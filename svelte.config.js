import adapter from "@sveltejs/adapter-static";
import { mdsvex } from "mdsvex";
const dev = process.env.NODE_ENV === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ pages: "docs" }),
    prerender: { default: true, entries: ["*", "/sitemap.xml"] },
    appDir: "app_",
  },

  extensions: [".svelte", ".md"],

  preprocess: [
    mdsvex({
      extensions: [".md"],
      layout: {
        blog: "src/routes/blog/_post.svelte",
      },
    }),
  ],
};

export default config;
