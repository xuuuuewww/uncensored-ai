import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, type TocItem, type FaqItem } from "@/lib/blog";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ArrowLeft } from "lucide-react";

const SITE_URL = "https://uncensored-ai.app";
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Not Found" };

  const url = `${SITE_URL}/blog/${slug}`;
  const image = post.meta.cover
    ? (post.meta.cover.startsWith("http")
        ? post.meta.cover
        : `${SITE_URL}${post.meta.cover}`)
    : DEFAULT_OG_IMAGE;

  return {
    title: post.meta.title,
    description: post.meta.description ?? undefined,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      type: "article",
      title: post.meta.title,
      description: post.meta.description ?? undefined,
      url,
      images: [{ url: image, alt: post.meta.title }],
      siteName: "Uncensored AI",
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description ?? undefined,
      images: [image],
    },
  };
}

function BlogPostingJsonLd({
  slug,
  title,
  description,
  datePublished,
  image,
}: {
  slug: string;
  title: string;
  description?: string;
  datePublished: string;
  image?: string;
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  const imageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description ?? title,
    datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      name: "ViraX",
      url: SITE_URL,
    },
    author: {
      "@type": "Organization",
      name: "ViraX",
      url: SITE_URL,
    },
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ArticleJsonLd({
  slug,
  title,
  description,
  datePublished,
  image,
}: {
  slug: string;
  title: string;
  description?: string;
  datePublished: string;
  image?: string;
}) {
  const url = `${SITE_URL}/blog/${slug}`;
  const imageUrl = image
    ? (image.startsWith("http") ? image : `${SITE_URL}${image}`)
    : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description ?? title,
    datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    publisher: {
      "@type": "Organization",
      name: "ViraX",
      url: SITE_URL,
    },
    author: {
      "@type": "Organization",
      name: "ViraX",
      url: SITE_URL,
    },
    ...(imageUrl && { image: imageUrl }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQPageJsonLd({ faqs }: { faqs: FaqItem[] }) {
  if (!faqs.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question" as const,
      name: question,
      acceptedAnswer: {
        "@type": "Answer" as const,
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function TocNav({
  toc,
  className = "",
  sticky = false,
}: {
  toc: TocItem[];
  className?: string;
  sticky?: boolean;
}) {
  if (toc.length === 0) return null;

  return (
    <nav
      className={sticky ? "sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto" : ""}
      aria-label="Table of contents"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
        On this page
      </p>
      <ul className="space-y-1.5 border-l border-border pl-4">
        {toc.map((item) => (
          <li
            key={item.id}
            className={
              item.level >= 3 ? "pl-3 ml-1 border-l border-border" : ""
            }
          >
            <Link
              href={`#${item.id}`}
              className="text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-r px-2 py-1 -mx-2 transition-colors duration-200 block cursor-pointer"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function TocSidebar({ toc }: { toc: TocItem[] }) {
  if (toc.length === 0) return null;

  return (
    <aside
      className="w-56 shrink-0 pt-20 hidden lg:block"
      aria-label="Table of contents"
    >
      <TocNav toc={toc} sticky />
    </aside>
  );
}

function TocMobile({ toc }: { toc: TocItem[] }) {
  if (toc.length === 0) return null;

  return (
    <aside className="lg:hidden mb-8 pb-6 border-b border-border">
      <TocNav toc={toc} />
    </aside>
  );
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground pt-16">
      <Navbar />
      <BlogPostingJsonLd
        slug={post.slug}
        title={post.meta.title}
        description={post.meta.description}
        datePublished={post.meta.date}
        image={post.meta.cover}
      />
      <ArticleJsonLd
        slug={post.slug}
        title={post.meta.title}
        description={post.meta.description}
        datePublished={post.meta.date}
        image={post.meta.cover}
      />
      <FAQPageJsonLd faqs={post.faqs} />
      <div className="flex gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TocSidebar toc={post.toc} />
        <main className="min-w-0 flex-1 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-6 cursor-pointer"
            aria-label="Back to blog list"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            Back to Blog
          </Link>
          <TocMobile toc={post.toc} />
          <article>
            <header className="mb-8">
              <h1 className="text-4xl font-bold tracking-tight">
                {post.meta.title}
              </h1>
              <time
                dateTime={post.meta.date}
                className="mt-2 block text-muted-foreground"
              >
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              {post.meta.tags && post.meta.tags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-2">
                  {post.meta.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </header>
            <div
              className="prose prose-neutral dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </main>
      </div>
      <Footer />
    </div>
  );
}
