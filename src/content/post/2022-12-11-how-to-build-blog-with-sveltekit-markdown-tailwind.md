---
publishDate: 2022-05-03
updated: 2022-05-25T22:39:29.436714
draft: false
archived: false
title: How I built a markdown driven static website with SvelteKit and Tailwind
tags:
  - SvelteJS
  - Gotofritz
description: In <a href="/blog/blog-with-sveltekit-and-markdown">my last post I ported my existing blog to SvelteKit</a>, to get to used to it. Now I am going to build a new version from scratch, using markdown and tailwind. I will use <a href="https://github.com/mattjennings/sveltekit-blog-template">Matt Jennings's excellent SvelteKit blog template</a> as seed.
---

## Getting started

I use [degit, a tool by the SvelteKit's creator](https://github.com/Rich-Harris/degit), to reproduce [Matt Jennings's excellent SvelteKit blog template](https://github.com/mattjennings/sveltekit-blog-template) in a folder (`gotofritz.github.io-redesign/`) parallel to my main branch (`gotofritz.github.io/`)

```bash
❯ mkdir gotofritz.github.io-redesign
❯ cp -r   gotofritz.github.io/.git gotofritz.github.io-redesign/
❯ cd gotofritz.github.io-redesign/
❯ git checkout -b svelte-redesign
Switched to a new branch 'svelte-redesign'
❯ npx degit mattjennings/sveltekit-blog-template --force
  destination directory is not empty. Using --force, continuing
  cloned mattjennings/sveltekit-blog-template#HEAD

# i like semicolons, thank you very much
❯ cp ../gotofritz.github.io/.prettierrc .prettierrc

# Perfect - I also like pnpm. The same would work with npm
# or yarn, of course
❯ pnpm install
Packages: +321
...

# check that it runs
❯ pnpm run dev
  sveltekit-blog-template@0.0.1 dev
  ...
  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network

# it does
  <CTRL-C>

❯ git add .
❯ git commit -m "feature: clone mattjennings/sveltekit-blog-template"
```

## Publishing the static Sveltekit markdown site to GitHub pages

The original repo is set up to publish to a `/public/` folder, but GitHub pages expect either the root folder or a folder called `docs/`. I went for the latter. A simple change in `svelte.config.js` made it happen

```diff
  kit: {
    target: "#svelte",
    adapter: adapter({
-      pages: 'public',
-      assets: 'public'
+     pages: "docs",
    }),
```

All the other files I needed (the CNAME file, and google confirmation) are already in my static folder

![Where to set the docs/ folder as the root for your github pages in the github settings](/assets/how-to-build-blog-with-sveltekit-markdown-tailwind/docs.png)

## Importing markdown posts from outside the SvelteKit project root

...cannot be done, at least not in Q2 of 2022. It's [a limitation of Vite](https://github.com/vitejs/vite/issues/4759), the bundler used by SvelteKit. And no, symbolic links don't help either. Vite is "clever" enough to spot that you are trying to trick it.That is _that_ close to being a deal breaker. I like keeping the posts data and the code completely separate. I also prefer keeping posts in Dropbox, and then manage them with tools like Obsidian. That allows me to easily access them from my mobile phone when I am on the go. I came up with a workaround, but it's a hack.

## Synchronising posts inside SvelteKit with a folder outside the project using unison

Since source files cannot exist outside the project in Vite, I only have two options: ignore it, or sync manually. I decided to go for the syncing.

### Using unison to sync folders before a build

My first approach was to add a sync command to `package.json`, and have it run before building the site. As well as before starting the local dev server. And, of course, manually as needed. This is almost the kind of task you would use `rsync` for, but not quite. rsync at heart is a _backup_ command; you sync something you care about with a remote location. One is the original, the other the clone. But in the case of blog posts case either could be the original. I may have edited the post at work and the Dropbox copy is the most up to date. Or vice versa. What I need is a tool to keep two folders in sync, updating whichever is less recent. That tool is [unison](https://www.cis.upenn.edu/~bcpierce/unison/). Or so I thought.

The first step was to install unison with brew, `brew install unison`. Then I created an .env file with the path of the folders to sync to, and from. The file is called `.env` and there is a version called `.env.example` in the repo.

```bash
DIR_POSTS=./posts
DIR_POSTS_BAK=~/Dropbox/your site/posts
```

Then the package.json changes

```json
...
"scripts": {
  "sync": "source .env; if [[ ! -z $DIR_POSTS_BAK ]]; then unison \"$DIR_POSTS_BAK\" \"$DIR_POSTS\" -batch; fi",
  "build": "pnpm run sync ; svelte-kit build",
  "dev": "pnpm ryn sync ; svelte-kit dev",
  ...
}
  ...
```

which can be broken down as

<dl class="code-breakdown">
<dt>source .env;</dt>
<dd>a _very_ basic way to load a .env file into memory. Note that it doesn't handle comments and a lot of other things. Only suitable for a quick hack</dd>

 <dt>if [[ ! -z $DIR_POSTS_BAK ]]; </dt>
<dd>only run if I have actually set that variable in the .env file</dd>

<dt>unison \"$DIR_POSTS_BAK\" \"$DIR_POSTS\" -batch</dt>
<dd>this is where the syncing happens. `-batch` runs the command without asking the hundreds of impenetrable questions unison tends to ask</dd>

</dl>

<dl class="code-breakdown">
<dt>pnpm run sync</dt>
<dd>run this command with pnpm (I prefer it to npm, but either will work)</dd>

<dt> ; </dt>
<dd>whether the previous command succeeds or not, then...</dd>

<dt>svelte-kit build</dt>
<dd>run this script</dd>

</dl>

I can now remove the posts from Git (but not the filesystem!) with `git rm --cached posts/*`. To make sure that folder doesn't disappear, I add a blank file to it with `touch posts/.gitkeep`. I then amend the .gitignore file to reflect the latest changes

```bash
posts/*
!posts/.gitkeep
```

That kind of worked, and I was quite pleased with it. But eventually I got some racing condition between Dropbox syncing the folder with its remote copy and the folder inside the SvelteKit instance. I don't know exactly how, but unison ended up deleting both copies. Luckily I had another backup somewhere else. I am not sure of the dynamics but in the end it doesn't matter. The fact it happened once means it can happen again. And life's too short to waste it worrying about losing your blog posts. I needed another approach.

### Back to rsync

I ditched unison and the idea of automatic syncing. I restored the original `build` and `dev` scripts and added a couple of rsync ones

```bash
  "scripts": {
    ...
    "sync-to-here": "source .env; if [[ ! -z $DIR_POSTS_BAK ]]; then rsync -a \"$DIR_POSTS_BAK/\" \"$DIR_POSTS\"; fi",
    "sync-to-backup": "source .env; if [[ ! -z $DIR_POSTS_BAK ]]; then rsync -a \"$DIR_POSTS/\" \"$DIR_POSTS_BAK\"; fi"
  },
```

So now I have to sync manually. Not ideal, but hopefully the SvelteKit team will come up with a workaround.

## Adapting the boilerplate to my needs

I made some changes and adaptations, but mostly small touches here and there. I really like how it is setup, particularly the use of the [mdsvex-relative-images](https://github.com/mattjennings/mdsvex-relative-images) plugin which lets me create posts as either `blog/my-post.md` or `blog/my-post/index.md` which can then fetch images like `blog/my-post/an-image.png`

- I changed `info.js` to include the name of my own blog, and added a simple page title helper to it.

  ```js
  export const makeTitle = (title) => `${title} | gotofritz`;
  ```

- Renamed a few routes inside `routes/`: from `posts/` to `blog/`, from `rss.xml` to `feed.xml`
- Added my own favicon.ico
- Changed `get-posts.js` to cater for the legacy frontmatter in my posts, which is not always the same as Matt is using. One big difference is that I use tags, which is a simple array

  ```markdown
  ---
  title: How I built a markdown drive static website with SvelteKit and Tailwind
  tags:
    - SvelteJS
    - Gotofritz
  ---
  ```

- Built my own template with Svelte / Tailwind markup, importing my own fonts (I really like DM Serif Display for the title)
- Added sitemap to the robots.txt
- I use google as a search engine for the site, so I added that in the top navbar
- Created pages for the tag. They are similar to the index page, but they use a variation of `get-posts.js` to get their content from.

### Displaying drafts in dev mode in SvelteKit, but excluding it from build

I added a field to the frontmatter of the posts I wanted to keep as draft. Adding `draft: true` rather than, say `published: false` meant I only needed to add those flags to the posts that were drafts.

```markdown
---
publishDate: 2022-05-03
updated: 2022-05-25T22:39:29.436714
draft: true
title: How I built a markdown drive static website with SvelteKit and Tailwind
---
```

I then added a filter to the `get-posts.js` page to only allow those posts in dev mode

```diff
- import { browser } from "$app/env";
+ import { browser, dev } from "$app/env";
...
const posts = Object.entries(import.meta.globEager('/posts/\*_/_.md'))
  .map(([filepath, post]) => {
    return {
    ...
})
+  .filter((post) => dev || !post.draft)
  // parse HTML output for content metadata (preview, reading time, toc)
  .map((post) => {
    const parsedHtml = parse(post.component.render().html)
    ...
```

### Upgrading to @sveltejs/kit 1.0.0-next.338

I was having some routing issues I couldn't work around, but luckily upgrading to the latest version of SvelteKit solved them. I did need to make a couple of changes to the configuration though

```diff
  ...
  kit: {
-   target: "#svelte",
    adapter: adapter({
      pages: "docs",
    }),
  ...
  prerender: {
      entries: ["*", "/sitemap.xml", "/feed.xml"],
+     default: true,
    },
  ...
```

## Happy with SvelteKit so far, except for two issues

In the end Matt's work has saved me a lot of time. Thanks! I like Svelte and think it works well. I'd recommend it for any cases where you don't want to use React (i.e., when design systems are not involved. There is just no beating React when it comes to create, use, and manage design systems!)

There are only two outstanding issues that bother me

- the fact you can't put the posts outside the repository root
- some aggressive caching which cannot be turned off. For example the tag pages often need to be reloaded to show their 'true' content. I haven't worked how to fix that yet

## Prior art

- [Matt Jennings](https://mattjennings.io/blog/rewriting-my-website-in-sveltekit) posts explains a lot of his design choices
