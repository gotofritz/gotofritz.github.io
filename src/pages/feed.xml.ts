import siteMeta from "@/site-config";
import { draftsStop } from "@/utils";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const get = async () => {
  const posts = await getCollection("post", draftsStop);

  return rss({
    title: siteMeta.title,
    description: siteMeta.description,
    site: import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: "blog/" + post.slug.substring(11),
    })),
  });
};
