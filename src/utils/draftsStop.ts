import type { CollectionEntry } from "astro:content";

export function draftsStop({ data }: CollectionEntry<"post">) {
  return import.meta.env.DEV || !data?.draft;
}
