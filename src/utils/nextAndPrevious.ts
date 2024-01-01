import type { CollectionEntry } from "astro:content";

type nextAndPreviousDict = {
  newerSlug?: string;
  newestSlug?: string;
  olderSlug?: string;
  oldestSlug?: string;
};

export function nextAndPrevious(
  post: CollectionEntry<"post">,
  i: number,
  allPosts: Array<CollectionEntry<"post">>,
) {
  const nextAndPreviousLinks: nextAndPreviousDict = {};
  if (i + 1 >= allPosts.length) {
    nextAndPreviousLinks.oldestSlug = `/blog/${allPosts[0]?.slug}`;
  } else {
    nextAndPreviousLinks.newerSlug = `/blog/${allPosts[i + 1]?.slug}`;
  }
  if (i - 1 < 0) {
    nextAndPreviousLinks.newestSlug = `/blog/${
      allPosts[allPosts.length - 1]?.slug
    }`;
  } else {
    nextAndPreviousLinks.olderSlug = `/blog/${allPosts[i - 1]?.slug}`;
  }
  return {
    ...post,
    data: {
      ...post.data,
      ...nextAndPreviousLinks,
    },
  };
}
