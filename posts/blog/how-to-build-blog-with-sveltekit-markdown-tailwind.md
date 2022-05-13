---
date: 2022-05-03
draft: false
archived: false
title: How I built a markdown drive static website with SvelteKit and Tailwind
prev: reordering-audio-files-in-a-fat-usb-stick
tags:
  - svelte
  - gotofritz
excerpt: In <a href="./blog-with-sveltekit-and-markdown">my last post I ported my existing blog to SvelteKit</a>, to get to used to it. Now I am going to build a new version from scratch, using markdown and tailwind. I will use <a href="https://github.com/mattjennings/sveltekit-blog-template">Matt Jennings&#39;s excellent SvelteKit blog template</a> as seed.
---

## Getting started

I use [degit, a tool by the SvelteKit's creator](https://github.com/Rich-Harris/degit), to reproduce [Matt Jennings's excellent SvelteKit blog template](https://github.com/mattjennings/sveltekit-blog-template) in a folder (`gotofritz.github.io-redesign/`) parallel to my main branch (`gotofritz.github.io/`)

```bash
> mkdir gotofritz.github.io-redesign
> cp -r   gotofritz.github.io/.git gotofritz.github.io-redesign/
> cd gotofritz.github.io-redesign/
> git checkout -b svelte-redesign
Switched to a new branch 'svelte-redesign'
> npx degit mattjennings/sveltekit-blog-template --force
  destination directory is not empty. Using --force, continuing
  cloned mattjennings/sveltekit-blog-template#HEAD

# i like semicolons, thank you very much
> cp ../gotofritz.github.io/.prettierrc .prettierrc

# Perfect - I also like pnpm. The same would work with npm
# or yarn, of course
> pnpm install
Packages: +321
...

# check that it runs
> pnpm run dev
  sveltekit-blog-template@0.0.1 dev
  ...
  local:   http://localhost:3000
  network: not exposed

  Use --host to expose server to other devices on this network

# it does
  <CTRL-C>

> git add .
> git commit -m "feature: clone mattjennings/sveltekit-blog-template"
```

## Importing markdown posts from outside the SvelteKit project root

...cannot be done, at least not in Q2 of 2022. It's [a limitation of Vite](https://github.com/vitejs/vite/issues/4759), the bundler used by SvelteKit. And no, symbolic links don't help either. Vite is "clever" enough to spot that you are trying to trick it.That is _that_ close to being a deal breaker. I like keeping the posts data and the code completely separate. I also prefer keeping posts in Dropbox, and then manage them with tools like Obsidian. That allows me to easily access them from my mobile phone when I am on the go. I came up with a workaround, but it's a hack.

### Synchronising posts inside SvelteKit with a folder outside the project using unison

Since source files cannot exist outside the project in Vite, I only have two options: ignore it, or sync manually. I decided to go for the syncing. But not quite manual; I add a sync command to run before building the site, and before starting the local dev server. Or I can, indeed, run the sync manually as needed.

I created an .env file with the path of the folder to sync to, and from

```bash
DIR_POSTS=./posts
DIR_POSTS_BAK=~/Dropbox/your site/posts
```

I then install the CLI utility `unison` with brew (`brew install unison`). This is somewhat like rsync, but it allows to sync two directories bidirectionally. In my package json I add the command to load those .env variable and pass them to unison:

```json
...
"scripts": {
  "sync": "source .env; if [[ ! -z $DIR_POSTS_BAK ]]; then unison \"$DIR_POSTS_BAK\" \"$DIR_POSTS\" -batch; fi"
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

I then run the command manually once, to seed the CLI util (it keeps a local DB of what changed in the last run). I laso prepend that command to `dev` and `build` in npm scripts

```json
"scripts": {
 "dev": "npm run sync; svelte-kit dev",
 "build": "npm run sync; svelte-kit build",
 ...
  },
```

I can now remove the posts from Git (but not the filesystem!) with `git rm --cached posts/*`. To make sure that folder doesn't disapper, I add a blank file to it with `touch posts/.gitkeep`. I then amend the .gitignore file to reflect the latest changes

```bash
posts/*
!posts/.gitkeep
```

I also rename `rss.xml` to `feed.xml`, and rename the output directory from `public` to `docs`, because this is what Git Pages demand.

### Prior art

- [Matt Jennings](https://mattjennings.io/blog/rewriting-my-website-in-sveltekit) posts
