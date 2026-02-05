import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface PostMeta {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  cover?: string;
}

export interface PostMetaWithSlug extends PostMeta {
  slug: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Post {
  slug: string;
  meta: PostMeta;
  contentHtml: string;
  toc: TocItem[];
  faqs: FaqItem[];
}

/**
 * Extract TOC from markdown (H2–H6). Uses github-slugger so ids match rehype-slug output.
 */
function extractToc(content: string): TocItem[] {
  const slugger = new GithubSlugger();
  const toc: TocItem[] = [];
  const headingRe = /^(#{2,6})\s+(.+)$/;
  for (const line of content.split("\n")) {
    const m = line.match(headingRe);
    if (!m) continue;
    const level = m[1].length;
    const raw = m[2].trim();
    const text = raw.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
    toc.push({ id: slugger.slug(text || raw), text: text || raw, level });
  }
  return toc;
}

/**
 * Extract FAQ Q&As from markdown (## FAQ section: **Question?** followed by answer until next **Question**).
 */
function extractFaq(content: string): FaqItem[] {
  const lines = content.split("\n");
  const faqs: FaqItem[] = [];
  let inFaq = false;
  let currentQ: string | null = null;
  let currentA: string[] = [];

  const flush = () => {
    if (currentQ !== null && currentA.length > 0) {
      faqs.push({
        question: currentQ.trim(),
        answer: currentA.join(" ").replace(/\s+/g, " ").trim(),
      });
    } else if (currentQ !== null && currentA.length === 0) {
      faqs.push({ question: currentQ.trim(), answer: "" });
    }
    currentQ = null;
    currentA = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      if (headingMatch[1].trim() === "FAQ") {
        inFaq = true;
        continue;
      }
      if (inFaq) {
        flush();
        inFaq = false;
      }
      continue;
    }
    if (!inFaq) continue;

    const boldMatch = line.match(/^\*\*(.+)\*\*\s*$/);
    if (boldMatch) {
      const text = boldMatch[1].trim();
      if (text.endsWith("?")) {
        flush();
        currentQ = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim();
      } else if (currentQ !== null) {
        currentA.push(text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1"));
      }
      continue;
    }
    if (currentQ !== null && line.trim()) {
      currentA.push(line.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").trim());
    }
  }
  flush();
  return faqs;
}

/**
 * Scan content/blog for all .md files and return their slugs (filename without extension).
 */
export async function getAllSlugs(): Promise<string[]> {
  try {
    const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
    const slugs = entries
      .filter((e) => e.isFile() && e.name.endsWith(".md"))
      .map((e) => e.name.replace(/\.md$/, ""));
    return slugs;
  } catch {
    return [];
  }
}

/**
 * Read front matter of all posts, sorted by date descending.
 */
export async function getAllPostsMeta(): Promise<PostMetaWithSlug[]> {
  const slugs = await getAllSlugs();
  const posts: PostMetaWithSlug[] = [];

  for (const slug of slugs) {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    try {
      const raw = await fs.readFile(filePath, "utf-8");
      const { data } = matter(raw);
      const meta = data as PostMeta;
      if (meta.title && meta.date) {
        posts.push({ ...meta, slug });
      }
    } catch {
      // skip invalid or unreadable files
    }
  }

  posts.sort((a, b) => (b.date > a.date ? 1 : -1));
  return posts;
}

/**
 * Read a single post by slug. Returns null if file does not exist or is invalid.
 * Uses remark-gfm for tables and rehype-slug for heading ids. HTML is from trusted repo Markdown only.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!slug || slug.includes("/") || slug.includes("..")) return null;
  if (!/^[a-zA-Z0-9_-]+$/.test(slug)) return null;

  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    const meta = data as PostMeta;
    if (!meta.title || !meta.date) return null;

    const result = await remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeStringify)
      .process(content);

    const contentHtml = String(result.value);
    const toc = extractToc(content);
    const faqs = extractFaq(content);

    return { slug, meta, contentHtml, toc, faqs };
  } catch {
    return null;
  }
}
