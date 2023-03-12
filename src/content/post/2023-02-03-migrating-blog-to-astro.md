---
publishDate: 2023-02-03
draft: false
title: Migrating My Blog to Astro
tags:
  - Astro
  - Gotofritz
  - SvelteJS
description: I built this site with <a href="https://kit.svelte.dev/" class="cactus-link">SvelteKit</a> before it was stable, hoping it wouldn't change <i>too</i> much. How naive of me. Of course it did. Faced with the prospect of rebuilding it from scratch, I decided I'd rather try something new. Enter <a href="https://astro.build/" class="cactus-link">Astro</a>
---

## TL;DR: was it worth it? Is Astro better than SvelteKit?

It depends what you mean by _worth it_... If I was a company and all of my time had to productive, then not. Astro is not any better then SvelteKit. The two frameworks share many design choices, and I would put them on a par. But of course it was worth as an exploration of new tech.

Overall Astro feels more suited to generating a static site out of markdown documents, because that is what it's designed for. It even comes with a GitHub workflow to publish to GIt pages. SvelteKit is a SPA/SSR engine that can be adapted to the task. However Astro seems to be rougher around the edges. I ended up spending more time converting from SvelteKit to Astro than I did migrating to SvelteKit in the first place. More monkey patching, more bugs. So I wouldn't recommend switching from one to the other, unless you have some specific needs (for example, Astro lets you embed components written in various frameworks like React, Vue, Web Components, etc)

## Wait, you only rebuilt your site last week

Yes, sometimes it feels like the only posts on my blog are of the "I migrated my blog from {old} to {new}" where _old_ and _new_ have been:

1. SSIs, XSLTs (don't ask)
1. XSLTs, Wordpress
1. Wordpress, Jekyll
1. Jekyll, Metalsmith
1. Metalsmith, Hexo (draft)
1. Metalsmith, Gatsby (draft)
1. Metalsmith, SvelteKit
1. SvelteKit, Astro

I didn't exactly have a choice this time around thanks to the breaking changes in SvelteKit. But honestly, it always felt a bit hacky to me. I had to create my own endpoints and wrap my head around the convoluted caching mechanism. For instance, the tags page would only filter by the tag in the URL if I hit refresh. Not exactly the best choice for a static site generator powered by MD(X).

That said, Astro isn't without its quirks either.

- posts don't have a default layout
- svg components are way too laborious
- images cannot live in the same folder where the post is
- draft posts are still published
- sitemaps are a mess

But the developer experience was much better.

## Astro posts don't have a default layout document

I started with the excellent step by step official tutorial, and immediately hit a snag. Astro doesn't have an easy way to provide a default layout for your pages. Either you add one to each document's frontmatter, or the engine will crash. What an odd design choice. I could easily add a layout to each page with <abbr title="Streaming EDitor, a classic unix command line tool">sed</abbr>, but that's not the point. I want to keep rendering information separate from the post content. Ideally I should be able to drop the markdown documents in another static site generator and it should just work. It never happens of course, but still.

There is [an endless discussion about default layouts on github](https://github.com/withastro/astro/issues/397). Incidentally, loooong discussions about technical issues seem a staple feature of Astro-world. Luckily after a couple of years someone posted [a link to a workaround](https://docs.astro.build/en/guides/markdown-content/#modifying-frontmatter-programmatically) (only 5 days ago!). It's the kind of hacky solution I didn't like about SvelteKit and Metalsmith before it, but I really shouldn't complain given this is all free code

### A simple remark plugin to add a default 'layout' to Astro markdown documents

The remark plugin is super simple - it adds a property 'layout' to the frontmatter if one wasn't defined.

```js
// src/plugins/remark-frontmatter.mjs
export function remarkFrontmatter() {
  return function (tree, file) {
    if (!file.data.astro.frontmatter.layout) {
      file.data.astro.frontmatter.layout = `${file.cwd}/src/layouts/Layout.astro`;
    }
  };
}
```

And then added the plugin to the config

```js
// astro.config.mjs
import { defineConfig } from "astro/config";
import { remarkFrontmatter } from "./src/plugins/remark-frontmatter.mjs";

export default defineConfig({
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkFrontmatter],
  },
});
```

That was the only change I neded to make the bulk of the site work. In the sense that all the pages are rendered and the engine doesn't crash. Now the tedious work of ironing out the small kinks

## Converting SVGs to a generic Astro component

The footer has a bunch of SVGs in it. In my SvelteKit blog they were Svelte components, now I need to convert them to Astro ones. [David Warrington's blog post was very helpful](https://ellodave.dev/blog/article/using-svgs-as-astro-components-and-inline-css/). I got it working, but it was far too much work for simply showing some SVGs. And that was only a minor step! I still hadn't done listing blog posts, tags pages, etc. It's going to take me a while. Time to pivot!

## Pivoting to Astro Cactus, a pre-built Astro theme

I decided to reduce the pain with a pre-built theme. I picked the excellent [Astro Cactus](https://astro.build/themes/details/astro-cactus/)

### Installing Astro Cactus

The standard installations worked out of the box

1. I [generated a copy of the theme repo on github](https://github.com/chrismwilliams/astro-theme-cactus/generate)
1. cloned it to my local machine with `gh repo clone gotofritz/xxx`
1. `pnpm install` and `pnpm run dev` to start it up

### Changing indentation from tabs to spaces in Astro

The Astro dev team, just as the Svelte team, are committed to indenting the code with tabs. I thought it was an odd choice, the industry standard is spaces (except for Makefiles, of course). I mean YAML will not even validate if written with tabs. But then I came across [a Github discussion where they put forward a good argument for tabs](https://github.com/withastro/astro/pull/2253) (spoiler: it's because of accessibility). For the first time in decades I am reconsidering my choices. Still, for my personal blog I'd rater stick to the known and trusted; and that means spaces.

It took me a while to find out how - the `.prettierrc.js` config file _does_ have spaces, but astro didn't honour it. Turns out the `.eslintrc.js` plugin file ignored that setting. I made sure it didn't

```js
  "prettier/prettier": [
    "off",
    {},
    {
      usePrettierrc: true,
    },
  ],
```

### Validating post schema with zod

A nice touch with this theme is that it uses [zod](https://zod.dev/) to validate the schema of the front matter of each document. I like that - it ensures consistency. But it forces a bit of a cleanup of my existing posts. Nothing major, but I _did_ hit a minor snag. The schema expects `publishDate` to be a string, which it then converts to a date. My `publishDate` _are_ strings, but in the format `yyyy-mm-dd (hh:mm)?` which the frontmatter plugin somehow converts to dates.

So I change the schema validator to

```diff
// src/content/config.ts
- publishDate: z.string().transform((str) => new Date(str)),
+ publishDate: z.coerce.date(),
```

### Images cannot live in the same folder as the posts in Astro

Astro doesn't allow images to be stored in the same folder as the markdown files. Bummer. Why do all frameworks do that 🙄. That's one thing SvelteKit did better. To be fair, things are beginning to move - there is [a long discussion from a few months ago](https://github.com/withastro/roadmap/discussions/376) and a [new RFC from yesterday](https://github.com/withastro/roadmap/discussions/468). But for now I'm stuck with putting everything in the public folder. Or was it src? It's unclear where they should go. Luckily I only had a handful of images, which I could manually move over to public/assets. Not too happy about it, but it is what it is.

### Nesting post folders with Astro Cactus

The theme didn't allow nested folders within `posts/my-post`. That was an easy fix, I just needed to rename `src/pages/posts/[post].astro` to `src/pages/posts/[...post].astro`

Actually not _that_ easy, I discovered the og png generator broke in ways that are not entirely clear. But the following code fixes that

```diff
// src/pages/og-image/[slug].png.ts
export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getCollection("post");
- const allPosts = posts.map(slugRewrite);
+ const allPosts = posts.map(slugRewrite).map((p) => {
+   return {
+     ...p,
+     slug: p.slug.replace(/^.*\/([^/]+)$/, "$1"),
+   };
+ });
  return allPosts
    .filter(({ data }) => !data.ogImage)
    .map(({ slug }) => ({ params: { slug } }));
}
```

### Prepend post filename with date, and remove it when generating posts

One thing I really liked about jekyll was the ability to prepend the date to the markdown filename, and have jekyll remove that. So that `posts/2010-01-23-my-great-post.md` would be accessible as `posts/my-great-post`. The benefit is that posts are ordered by date in my IDE. I first I noticed that adding `slug: my-great-post` manually to a post would work. But how to do it automatically? After a bit of experimentation I created a function in `src/utils/slugRewrite.ts`

```js
import type { CollectionEntry } from "astro:content";

export function slugRewrite(post: CollectionEntry<"post">) {
  return {
    ...post,
    slug: post.slug.replace(/^\d{4}-\d{2}-\d{2}-/, ""),
  } as CollectionEntry<"post">;
}
```

and then use it in the `getStaticPath` function in both `[...page].astro` and `[...post.astro]`

```diff
export async function getStaticPaths({ paginate }: GetStaticPathsOptions) {
  const allPosts = await getCollection("post");
+ const mapped = allPosts.map(slugRewrite);
  const allPostsByDate = sortMDByDate(mapped);
```

I had to apply that function in a few pages across the site - wherever `getCollection` or `getEntryBySlug` where called. For example, I changed the code in the page that generates social media previews:

```diff
// <astro>/src/pages/og-image/[slug].png.ts

export async function get({ params: { slug } }: APIContext) {
- const post = await getEntryBySlug("post", slug!);
+ const allPosts = await getCollection("post", draftsStop);
+ const mappedPosts = allPosts.map(slugRewrite);
+ const post = mappedPosts.find((p) => p.slug === slug!);
```

### Adding a custom font to the Tailwind theme

The mastheads use a free Google font. I wanted to host it as part of the site, so I [downloaded it from google](https://fonts.google.com/specimen/DM+Serif+Display), then added font-face to `<astro>/src/styles/global.css`

```css
@font-face {
  font-family: "DM Serif Display";
  src: url("/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
```

I added the _masthead_ definition to `<astro>/tailwind.config.cjs`

```diff
  fontFamily: {
    // Add any custom fonts here
    sans: [...fontFamily.sans],
    serif: [...fontFamily.serif],
+   masthead: ["DM Serif Display", "Helvetica", "sans-serif"],
  },
```

and then used it in an existing style in the same file

```diff
    plugin(function ({ addComponents }) {
      addComponents({
        ".cactus-link": {
          ...
          },
        },
        ".title": {
-         "@apply text-2xl text-accent-2": {},
+         "@apply text-2xl text-accent-2 font-masthead": {},
        },
      });
    }),
  ],
};
```

## Creating an SVG logo. With Gimp

Astro Cactus has a lovely minecrafty logo, I decided to replace it with one of my own. Nothing fancy, just a simple square with the name of the site in a chunky pixelated font. Being an SVG, it would also double as favicon, something I hadn't gotten around in previous versions of the site

First I downloaded and installed the [free font FFF Forward](https://www.1001fonts.com/fff-forward-font.html). Then I tried to download Inkscape to use it and... disaster. Inkscape doesn't support OS X 13 (Ventura). Need a plan B. Luckily Gimp has primitive tooling to export SVGs. Should be enough for my primitive logo.

So I created the image in Gimp using the Forward font, then CTRL-clicked on the text layer and selected "Text to Path". I opened the Paths toolbox, CTRL-clicked on the newly created path, selected "Export to SVG" from the menu. There is my SVG! But it had strange artefacts at the corners (I guess that's why it's a free font). Still, it's a starting point.

To clean up the artefacts, I used [a free online svg editor](https://boxy-svg.com/). Boxy-SVG is not brilliant, and it forces you to create an account, but for a quick one off job once every blue moon it's good enough. Well almost - the logo is not crisp at all, but I am happy waiting for Inkscape to be compatible with OS X for the last mile

I added the logo to `<astro>/src/pages/og-image/[slug].png.ts` (it generates the preview you see when you post, say, a link to a post on mastodon), to `<astro>/src/components/layout/Header.astro`, and `<astro>/public/icon.svg`

## Forcing a format for Intl.DateTimeFormatOptions

I changed the font of the date in the post list to monospace, so that it would align nicely. But the date formatter shows some months as 3 letters (Jan, Feb) and some as 4 (Sept). That is no good, it screws up the alignment. It turns out it's incredibly complicated to fix.

The date uses Javascript's [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) object:

```ts
const formatOptions: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  ...options,
};
return new Date(date).toLocaleDateString("en-GB", formatOptions);
```

To show the day as as 01 instead of 1 just change `day: "numeric"` to `day: "2-digit"`. To change `Sept` to `Sep` however is not so easy. Long story short, the TC39 people do not want `Intl.DateTimeFormat` or the newer `Temporal` to be a flexible data formatter like every other language ([exhibit 1](https://github.com/tc39/ecma402/issues/554), [exhibit 2](https://github.com/js-temporal/proposal-temporal-v2/issues/5)). They have decided `Sept` is how Brits write the abbreviation for September, and that is that. But only in the UK; the "en-US" locale will use `Sep`. I am sure that is news to most Brits or Americans, but that is that. Switching to a US locale is out of the question of course, it would also change the order of the other parts to the ghastly month-first format they use in the States `Sep 01, 2022`.

I can think of only two workarounds: either generating each part individually, with different locales, and then joining them together. Or use the formatToParts method to get the individual parts, and massage the month name. They are both equally clunky, I went for the second approach

```ts
export function getFormattedDate(
  date: string | number | Date,
  options: Intl.DateTimeFormatOptions = {},
  locale: Intl.LocalesArgument = "en-GB",
) {
  const formatOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    ...options,
  };
  const dateTimeFormat = new Intl.DateTimeFormat(
    locale as string,
    formatOptions,
  );
  const parts = dateTimeFormat.formatToParts(new Date(date));
  const partValues = parts.map((p) => p.value);

  return `${partValues[0]} ${partValues[2]?.substring(0, 3)} ${partValues[4]} `;
}
```

All of that to show a date 🙄

## Rendering frontmatter strings with HTML in them

My posts are written in Markdown files with frontmatter. The initial paragraph, the description, is actually in the frontmatter, not in the markdown body. This is because it is used, for example, when generating the RSS feed. By default frontmatter is plain text, and any HTML in the description will be simply printed out. How to render it as HTML instead?

Astro has a default component called Fragment, to which [template directives](https://docs.astro.build/en/reference/directives-reference/#sethtml) can be added exactly for that purpose. In the example below, `post` is the variable that holds my post, and `data.description` are its properties and `set:html` is the template directive

```astro
<Fragment set:html={post.data.description} />
```

When generating the RSS feed and the meta tags, I have the opposite problem - there I don't want any HTML at all. There is no template directive equivalent to `set:html` (there is `set:text`, but it shows the HTML source). Because the code is generated in Node.js, I can't use the DOM to strip the HTML away for me:

```js
// NOTE: this is not XSS safe
export function stripHtmlInABrowser(dirtyString = ""): string {
  const div = document.createElement("div");
  div.innerHTML = dirtyString;
  return div.textContent || div.innerText || "";
}
```

I have to resort to RegExp. A simple one, since my HTML is very simple

```js
export function stripHtml(dirtyString = ""): string {
  const re = RegExp(/<[^>]+?>/, "gm");
  return dirtyString.replaceAll(re, "");
}
```

## Next and Previous post links

I like being able to navigate chronologically to the next and previous posts in my blog, without having to go back to the homepage. I am not sure how useful it is to readers - I get so few it's hard to tell. But it helps _me_ going through all the posts when I'm doing some site-wide changes, and that is a good enough reason. The theme I am using doesn't offer that functionality, but it's pretty easy to add it in. First I added two new properties to the post metadata schemas

```diff
// src/content/config.ts
 const post = defineCollection({
   schema: z.object({
    ...
+    newerSlug: z.string().optional(),
+    olderSlug: z.string().optional(),
    ...
   }),
 });
```

Then I create a small util plugin, similar to the `slugRewrite` I had created earlier. The links will cycle through the whole list of posts without ending, they just silently go back to the beginning when at the end.

```ts
// src/utils/nextAndPrevious.ts
import type { CollectionEntry } from "astro:content";

export function nextAndPrevious(
  post: CollectionEntry<"post">,
  i: number,
  allPosts: Array<CollectionEntry<"post">>,
) {
  const newerSlug = (i + 1) % allPosts.length;
  const olderSlug = (i - 1 + allPosts.length) % allPosts.length;
  return {
    ...post,
    data: {
      ...post.data,
      newerSlug: `/blog/${allPosts[newerSlug]?.slug}`,
      olderSlug: `/blog/${allPosts[olderSlug]?.slug}`,
    },
  };
}
```

This hardcodes the links to `/blog/`, but that's exactly how the rest of the theme is built. Yes, best practices dictate that is made configurable, but I will defer to the spirit of <abbr title="You Aint Gonna Need It, one of eXtreme Programming's principle">YAGNI</abbr> here. This also relies on the array of posts being sorted, but because the filenames start with the date I know they _are_ sorted.

The plugin is then added to the util index for easier import

```diff
// /src/utils/index.ts
@@ -1,4 +1,5 @@
...
 export { elementHasClass, toggleClass } from "./domElement";
+export { nextAndPrevious } from "./nextAndPrevious";
 export { getUniqueTags, getUniqueTagsWithCount, sortMDByDate } from "./post";
...
```

Then add the plugin to the posts page

```diff
// src/pages/blog/[...post].astro
 ---
 import PostLayout from "@/layouts/BlogPost";
-import { slugRewrite } from "@/utils";
+import { nextAndPrevious, slugRewrite } from "@/utils";
...

 export async function getStaticPaths(): Promise<GetStaticPathsResult> {
   const posts: CollectionEntry<"post">[] = await getCollection("post");
-  const mapped = posts.map(slugRewrite);
+  const mapped = posts.map(slugRewrite).map(nextAndPrevious);
```

And finally use it in the BlogPost layout. I've added the links above the Table of contents on the top right (only visible on desktops). I didn't know where else to put it quite frankly.

```diff
// src/layouts/BlogPost.astro

 const { post } = Astro.props;
 const {
-  data: { title, description, ogImage, publishDate },
+  data: { title, description, ogImage, publishDate, newerSlug, olderSlug },
   slug,
 } = post;
...
     <aside class="hidden text-right sm:sticky sm:top-20 sm:block">
+      <nav class="flex w-full flex-nowrap justify-between">
+        <a class="before:content-['<<']" href={olderSlug}>previous</a>
+        <a class="after:content-['>>']" href={newerSlug}>next</a>
+      </nav>
       <h2 class="font-semibold">Table of Contents</h2>
...

```

## Preventing the main content area from expanding when the content is too wide

There was a bug whereby the main content area would expand if the content was too wide. That was very noticeable once I added the next/previous navigation links above the content navigation area to the right. The reason was that main content of posts were defined as a grid with autogenerated columns `3fr 1fr`. But that is equivalent to `minmax(auto, 3fr) 1fr`. It's that `auto` that prevents the column from being smaller than the largest unit of content (image, longest word, whatever). In Tailwind one could declare custom widths with `sm:grid-cols-[minmax(0,3fr)_1fr]` but that is not very elegant. I opted for changing the layout to 4 columns (which use the `minmax(0, 1fr)` trick) instead. I also submitted a fix upstream in a PR

```astro
- <div class="sm:grid sm:grid-cols-[3fr_1fr] sm:items-start sm:gap-x-10">
-  <article class="break-words">
+ <div class="sm:grid sm:grid-cols-4 sm:items-start sm:gap-x-10">
+  <article class="sm:col-span-3 break-words">
```

## Astro doesn't respect the _draft_ flag in the frontmatter for collections

Astro has a concept of _pages_ and _collections_. They both are units of contents which correspond to .astro or .md(x) document. The two are distinguished by their location in the filesystem - `<astro>/src/pages` and `<astro>/src/content` (why content and not collections? good question). The only difference between them is that collections can have a schema for their frontmatter, which is very useful. That's the theory anyway.

In reality there is another difference: pages with `draft: true` in their frontmatter will be rendered when running `pnpm run dev` but not published when you run `pnpm run build`. Which makes sense - you want to see your draft when you work on them, but not publish them until they are ready. The same mechanism, sadly, doesn't work for collections. I am not sure if it's a bug or a feature. I filed [a bug on github](https://github.com/withastro/astro/issues/6400), but the way the documentation is written, where they mention you should create your own filter function, makes me think it's a feature. Oh dear, if it is it'd be a daft idea on so many levels.

Regardless of _why_ it happens, I need a workaround. It will have to be applied to all instances of `getCollection`, the function which generates lists of posts in your index pages. Conveniently, the function takes a filtering function as second argument, which is exactly what I need. The only issue is that it gets called seven times across the site - manual replacement of so many instances is often error prone. A common workaround would be to wrap it with a function which has the filter built in. But I'll leave that for the next iteration.

The filter function itself is quite simple. It needs to run only when running the `pnpm run build` command, not `pnpm run dev`. Astro makes that information available with the global `import.meta.env.PROD` (for build) and `import.meta.env.DEV` (for dev). I called the function `draftsStop` - I tend to call filter functions `xxxStop` or `xxxPass`, as a nod to synthesisers filters.

```ts
// src/utils/draftsStop.ts
import type { CollectionEntry } from "astro:content";

export function draftsStop({ data }: CollectionEntry<"post">) {
  return import.meta.env.DEV || !data?.draft;
}
```

And then change it everywhere it's used

```diff
...
-import { slugRewrite, sortMDByDate } from "@/utils";
+import { draftsStop, slugRewrite, sortMDByDate } from "@/utils";

const MAX_POSTS = 20;
-const allPosts = await getCollection("post");
+const allPosts = await getCollection("post", draftsStop);
...
```

## Fixing the sitemap with Astro

The [astro sitemap plugin](https://docs.astro.build/en/guides/integrations-guide/sitemap/) is quite messy. It doesn't respect drafts and it allows a filter function, but only based on the url, not the frontmatter. Also it doesn't integrate with the robots.txt, and has a strange arrangement with a sitemap-index sitemap-0 files. There is no way of fixing it. Luckily the rss feed can be used as sitemap, so I'll just removed the plugin from the theme.

## Working with Astro

The rest was just minor adjustments, refactoring components, and so on. All in all working with Astro feels nice. There are a lot of quirky design decisions, some bugs, and it doesn't always do what I wanted, but that is _always_ the case: the perfect tool doesn't exist. Thanks Astro team!

## Comments?

If you have any comments, join [the discussion on mastodon](https://fosstodon.org/@gotofritz/109965165114995854)
