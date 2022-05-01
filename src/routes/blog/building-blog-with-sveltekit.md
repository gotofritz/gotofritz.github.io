---
date: 2022-04-22
draft: true
archived: false
title: I rebuilt my website with SvelteKit
permalink: /blog/building-blog-with-sveltekit
prev: reordering-audio-files-in-a-fat-usb-stick
tags:
  - svelte
  - gotofritz
excerpt: https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog
---

## Installation

```bash
$ npm init svelte@next gotofritz
Need to install the following packages:
  create-svelte@next
Ok to proceed? (y) y
...

Next steps:
  1: cd gotofritz
  2: npm install (or pnpm install, etc)
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open

To close the dev server, hit Ctrl-C

Stuck? Visit us at https://svelte.dev/chat

$ npm install
gotofritz@0.0.1 prepare
...

$ npm run dev -- --open
```

I hardly had to think - I picked JS over TS (apparently the Svelte MD module doesn't work too well with TS), eslint and prettier, and bob's your uncle. Well... _mostly_. I had to change the prettier settings as they are all wrong - single quotes? tabs??!? who uses tabs in JS? Weird. Well the Svelte devs have volunteered their spare time to give us a wonderful tool, it's no problem whatsoever to indulge their little quirks. And it could have been worse, at least they use semicolons... Anyway no biggie, I just edit .prettierrc, the prettier config file, and that's it

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```

### Start hacking

I already have a website built with ancient technology ([Metalsmit](https://www.metalsmith.io/), [Handlebars](https://handlebarsjs.com/)) so my first job is to convert it as is to SvelteKit.

- Move static assets such as favicons into `src/static`
- Copy the rendered CSS from my old site into `src/app.css`. Since I will be redesigning it anyway, no point in reorganising all the CSS files to fit SvelteKit's component structure
- Copy the HTML scaffolding from a variety of Handlebars files into `src/app.html`. I convert the path variables to `%svelte.assets%`
- Similarly to create-react-app, there are tags such as `%svelte.body%` and `%svelte.head%` in your HTML templates for a site's title and description
- SvelteKit comes with a Header component already wired up. I also had a header component, so it's pretty much a copy and paste job. This is the only case where I need one of this if/else statements in the template. Easily done with Svelte

  ```svelte
  <script>
    export let isHome = false;
  </script>

  <header>
    <nav class="flat-nav">
      <div
        itemscope
        itemtype="http://schema.org/Person"
        class="vcard group-of-links"
      >
        {#if isHome}
          <a href="mailto:info@gotofritz.net" itemprop="email">email</a>
          <a href="/fritz-stelluto_resume.pdf" title="my CV as a PDF">my resume</a
          >
        {:else}
          <a href="/">home</a>
        {/if}
        ... etc ...
  ```

- Passing the value of isHome dynamically left me a bit disappointed. It's not that straigtforward to pass variables up the tree from a page to a layout. My first approach involved using the standard `pages` store which comes with svelte kit, and using the url property set by the router by default. It works, but it's neither portable nor elegant.

  ```svelte
  <script>
    import { page } from "$app/stores";
    export let isHome = $page.url.pathname == "/";
  </script>
  ```

- I want to set variables from inside svelte files, not by hardcoding strings in JS blocks in the layout. I tried with setContext and getContext but no joy there. I know about stores, but it seems a bit of an overkill for a simple variable. I'll leave it for refactoring later.
- I finally add the content of the homepage to `index.svelte`. Getting there

### Enter mdx

It's time to start importing those MD files.

- First I install mdsvex with `npm i -D mdsvex`
- Then amend the configuration `svelte.config.js`

  ```js
  const config = {
    extensions: [".svelte", ".md"],
    preprocess: [
      mdsvex({
        extensions: [".md"],
      }),
    ]
    ...
  ```

- In my `index.svelte` I add a JS block to fetch all the metadata for the posts

  ```svelte
  <script context="module">
    export const prerender = true;

    export const load = async () => {
      const allPostFiles = import.meta.glob("../../src-old/blog/**/*.md");
      const iterablePostFiles = Object.entries(allPostFiles);

      const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
          const { metadata } = await resolver();
          const postPath = path.slice(2, -3);

          return {
            archived: metadata.archived,
            when: metadata.date,
            permalink: metadata.permalink,
            published: metadata.published,
            tags:
              metadata.tags && metadata.tags.length
                ? "//" + metadata.tags.join(" //")
                : "/ BLOG",
            title: metadata.title,
          };
        }),
      );
      const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.when) - new Date(a.when);
      });

      // TODO: filter out non-published files when not in dev
      // (or maybe simply use _xxxx.md names for them?)

      return {
        props: {
          posts: sortedPosts,
        },
      };
    };
  </script>
  ```

- I got the error `The request url /Users/gotofritz/Dropbox/src-old/ is outside of Vite serving allow list`. That's because `../../src-old/` is a symbolic link. Vite resolves it to the actual folder, which I happen to keep in Dropbox. Vite doesn't like it's not under te project's `src/` but somewhere totally different. Eventually I discover the `svelte.config.js` amend that makes it work. `config.kit.vite` is the part of the SvelteKit config where you can add Vite config

  ```js
  const config = {
    kit: {
      vite: {
        server: {
          fs: {
            allow: ["/Users/gotofritz/Dropbox/"],
          },
        },
      },
    },
    ,, etc
  ```

- After that is simply a matter of using this data.

  ```svelte
  <script>
    // @ts-nocheck
    import PostSummary from "$lib/PostSummary.svelte";
    import { post } from "./todos";
    export let posts;
  </script>

  {#each posts as post}
    <PostSummary {...post} />
  {/each}
  ```

- `<PostSummary ` is a simple component I created for this

  ```svelte
  <script>
    export let tags = "--tags--";
    export let when = "--when--";
    export let permalink = "--permalink--";
    export let title = "--title--";
    let whenHuman = when.substring(0, 10);
  </script>

  <section class="timeline">
    <h3 class="row-label">
      <time datetime={when}>
        {whenHuman}
      </time>
    </h3>
    <div class="row-content">
      {#if permalink}
        <a href={permalink}>{title}</a>
      {:else}
        {title}
      {/if}
      <div class="row-label">{tags}</div>
    </div>
  </section>
  ```

### Refactoring: moving file list to an async Svelte Store

One of SvelteKit's quirks is that you can have a `load` function only in a page. In my mind that makes it a bad place for fetching global information. Like, for example, a list of all the files in the site. A `store` seems the more logical place for that. That gets us into one of the least savoury parts of Svelte: async stores.

Svelte Stores are not designed to be asynchronous. What makes me think that? Their start function needs to return a `stop` function. But all async functions return a promise. For example, [the code in this gist by Theo Steiner](https://gist.github.com/Theo-Steiner/e7fdbbdde224e5d53c35da26844902bd) feels like the obvious way to wire up an async store. But if you try it, Svelte fails it with a `TypeError: stop is not a function` error. That's because it isn't. You'd think that `async set => set(await getQuestionData())` isn't returning anything. But it is, it returns a promise. There are workarounds, but they feel like hacks.

```svelte
import { readable } from "svelte/store"
export const questionStore = readable([], async set => set(await getQuestionData()))

async function getQuestionData() {
  const url =
    "https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple"
  const response = await fetch(url);
  const data = await response.json();
  return data.results
}
```

I found [svelte-asyncable, an asyncable store](https://github.com/sveltetools/svelte-asyncable). But I am wary of small projects with a single contributor. Their priorities may change and then I'd be stuck with an obsolete library. In the end I went for the least hacky solution: remove the `async` in favour of old fashioned promise/thens. The page renders, but now the file list loads asynchronously after page load. I have a feeling this may not play well when I'll get to generating the static site. But I'll cross that bridge when I get to it.

```js
// stores/sitemap.js
import { readable } from "svelte/store";

export const loadFilelist = async () => {
  const allPostFiles = import.meta.glob("../../../src-old/blog/**/2*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([, resolver]) => {
      const { metadata } = await resolver();

      return {
        archived: metadata.archived,
        when: metadata.date,
        permalink: metadata.permalink,
        published: metadata.published,
        tags:
          metadata.tags && metadata.tags.length
            ? "//" + metadata.tags.join(" //")
            : "// BLOG",
        title: metadata.title,
      };
    }),
  );
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.when) - new Date(a.when);
  });

  // TODO: filter out non-published files when not in dev
  // (or maybe simply use _xxxx.md names for them?)

  return sortedPosts;
};

export const filelist = readable([], (set) => {
  loadFilelist().then((list) => {
    set(list);
  });
});
```

```svelte
<script>
  // routes/index.svelte ...
  import PostSummary from "$lib/PostSummary.svelte";
  import { filelist } from "$lib/stores/sitemap.js";
</script>

... other stuff ...

{#each $filelist as post}
  <PostSummary {...post} />
{/each}
```

### Adding MD blog posts to SvelteKit

I wanted to keep my old blog posts where they are, in Dropbox. That way I could decouple them from the site implementation. Creating a symbolic link to them with

```bash
$ ln -s ~/Dropbox/my_folder routes/blog
```

wasn't possible. The config trick I used for generating the index page doesn't work with routes. Additionally I couldn't find a way to rename routes dynamically. The posts file names follow the Jenkins convention, `yyyy-mm-dd-the-post-slug.md`. I couldn't make them accessible as `the-post-slug`. Quite simply, SvelteKit can be used as a static site generator. But at heart, it isn't one. I bit the bullet and copied the md files files inside the `routes/blog/` folder. Then removed the date from the filename. It worked without a glitch.

#### Adding excerpts with mdsvex

My markdown sourcefiles had an excerpt section in the body. That was separated from the main body with an HTML comment. They were originally Wordpress posts, that's the reason for that. And once I set up my blog engine that way, I applied the same principle to all posts.

```html
---
some: frontmatter
title: My Post
---

Here is <b>the excerpt</b>. Just some HTML
<!--more-->
Now comes the rest of the post. Also HTML
```

`mdsvex` doesn't provide a way to handle that. You can apply a chain of [remark](https://remark.js.org/) plugins to the markdown source, and of [rehype](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md) plugins to the generated HTML. But then `mdsvex` gets whatever comes out from the other end as a Svelte component. You can't fiddle with it in a template (at least, not as far as I could make out).

There is, actually, [a remark plugin for extracting a Wordpress style excerpts](https://www.npmjs.com/package/remark-excerpt). It works quite well. But it keeps the excerpt and throws away the body. Mdsvex is not sophisticated enough to "split" the markdown data into a body _and_ an excerpt and handle both in parallel. That is actually very similar to my old metalsmith engine, or to gulp, from the same era... I hoped it would be more capable, but Sveltekit is not a pure <abbr title="Static Site Generator">SSG</abbr>. In the end rather than fighting it I preferred writing a simple script to batch-process all the posts I have. I moved any "special" information which needs special treatment to the frontmatter. The body is just the page content, nothing meta in it. It makes more sense that way.

There is another way to handle the whole thing. One which should allow me to move the markdown files back to my Dropbox folder. But I will attempt it in the next version.

### Tags
