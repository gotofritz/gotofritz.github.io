import { descByDate, passIfData } from "$lib/utils";

// posts.json.js
export const get = async () => {
  const allPostFiles = import.meta.glob("../blog/**/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([pth, resolver]) => {
      const { metadata } = await resolver();

      if (!metadata.draft) {
        return {
          archived: metadata.archived,
          when: metadata.date,
          excerpt: metadata.excerpt,
          isEmpty: Boolean(metadata.is_empty),
          permalink: "/blog/" + pth.split("/").pop().slice(0, -3),
          tags:
            !Array.isArray(metadata.tags) || metadata.tags.length === 0
              ? ["blog"]
              : metadata.tags.map((x) => x.toLowerCase()),
          title: metadata.title,
        };
      }
    }),
  );

  const filteredPosts = allPosts.filter(passIfData);

  const sortedPosts = filteredPosts.sort(descByDate);

  return {
    body: sortedPosts,
  };
};
