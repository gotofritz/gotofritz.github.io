import { website } from "$lib/info";

export const asSitemapSlug = (post = {}) => {
  const rawUrl = post.tag
    ? `${website}/tags/${post.tag}`
    : `${website}/blog/${post.slug}`;
  return encodeURI(rawUrl);
};
