import { defineCollection, z } from "astro:content";

function removeDupsAndLowerCase(array: string[]) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

const post = defineCollection({
  schema: z.object({
    description: z.string().optional().default(""),
    draft: z.boolean().optional().default(false),
    newerSlug: z.string().optional(),
    newestlug: z.string().optional(),
    ogImage: z.string().optional(),
    olderSlug: z.string().optional(),
    oldestSlug: z.string().optional(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()).default([]).transform(removeDupsAndLowerCase),
    title: z.string(),
  }),
});

export const collections = { post };
[];
