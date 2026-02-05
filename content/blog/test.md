---
title: "Test Article for Blog System"
date: "2025-02-05"
description: "A sample post to verify the blog list, detail page, sitemap, and 404 behavior."
tags: ["test", "seo"]
cover: "/images/blog/test.jpg"
---

# Hello from the blog

This is a **test article** to confirm:

1. The blog list at `/blog` shows this post.
2. The detail page at `/blog/test` renders with nice typography (prose).
3. The sitemap includes `/blog/test`.
4. Visiting `/blog/not-exist` returns a real 404.

## Code block

```ts
const slug = "test";
console.log(`/blog/${slug}`);
```

## More content

Content is read from `content/blog/*.md` with front matter. Each file becomes one page at `/blog/[slug]`.
