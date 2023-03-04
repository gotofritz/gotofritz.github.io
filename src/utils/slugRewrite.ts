import type { CollectionEntry } from "astro:content";

export function slugRewrite(post: CollectionEntry<"post">) {
  return {
    ...post,
    slug: post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
  } as CollectionEntry<"post">;
}
