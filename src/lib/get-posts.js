import { browser } from "$app/env";
import { descByDate, passIfData } from "$lib/utils";

// we require some server-side APIs to parse all post.metadata
if (browser) {
  throw new Error(
    `get-posts.js should not be used on the browser, fetch from /posts.json instead`,
  );
}

/**
 * Gets all of the posts with added post.metadata .
 *
 * This should only be used on the server, as some of the post.metadata we add requires
 * being on node (see `posts` below).
 *
 * For getting posts from the client, fetch from the /posts.json endpoint instead
 */
export function getPosts({ page = 1, limit } = {}) {
  if (limit) {
    return posts.slice((page - 1) * limit, page * limit);
  }

  return posts;
}

// Get all posts and add post.metadata
const rawPosts = Object.entries(
  import.meta.globEager("/src/routes/blog/**/*.md"),
);
const posts = rawPosts
  .map(([filepath, post]) => {
    if (!post.metadata.draft) {
      return {
        archived: post.metadata.archived,
        when: post.metadata.date,
        excerpt: post.metadata.excerpt,
        isEmpty: Boolean(post.metadata.is_empty),
        permalink: "/blog/" + filepath.split("/").pop().slice(0, -3),
        tags:
          !Array.isArray(post.metadata.tags) || post.metadata.tags.length === 0
            ? ["blog"]
            : post.metadata.tags.map((x) => x.toLowerCase()),
        title: post.metadata.title,

        // generate the slug from the file path
        slug: filepath
          .replace(/(\/index)?\.md/, "")
          .split("/")
          .pop(),

        // whether or not this file is `my-post.md` or `my-post/index.md`
        // (needed to do correct dynamic import in posts/[slug].svelte)
        isIndexFile: filepath.endsWith("/index.md"),

        // the svelte component
        component: post.default,
      };
    }
  })
  .filter(passIfData)

  // sort by date
  .sort(descByDate)

  // add references to the next/previous post
  .map((post, index, allPosts) => ({
    ...post,
    next: allPosts[index - 1],
    previous: allPosts[index + 1],
  }));
