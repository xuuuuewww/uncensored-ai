import type { Metadata } from "next";
import Link from "next/link";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and updates from Uncensored AI.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const posts = await getAllPostsMeta();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-3xl font-bold tracking-tight">Blog</h1>
        <ul className="space-y-8">
          {posts.length === 0 ? (
            <li className="text-muted-foreground">No posts yet.</li>
          ) : (
            posts.map((post) => (
              <li key={post.slug}>
                <article>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block cursor-pointer"
                  >
                    <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="mt-1 text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                    )}
                    <time
                      dateTime={post.date}
                      className="mt-2 block text-sm text-muted-foreground"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {post.tags && post.tags.length > 0 && (
                      <ul className="mt-2 flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Link>
                </article>
              </li>
            ))
          )}
        </ul>
      </main>
    </div>
  );
}
