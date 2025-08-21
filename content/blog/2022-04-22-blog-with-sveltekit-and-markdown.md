---
publishdate: 2022-04-22
draft: false
archived: false
title: I rebuilt my website with SvelteKit
tags:
  - SvelteJS
  - Gotofritz
description: Building a static website with <a href="https://kit.svelte.dev/">Sveltekit</a> and markdown is hard going at first. But just when I was about to give up I stumbled on some blog posts and boilerplates that helped me crack it. I may still switch to <a href="https://astro.build/">Astro</a> later though
slug: blog-with-sveltekit-and-markdown
---

## Getting used to SvelteKit's and Vite's quirks

Documentation is still sparse, and SvelteKit is not designed as an <abbr title="Static Site Generator">SSG</abbr>. So at first it was hard to get my head around how it all fits together. Fetching content in templates? Aren't stores the most logical places for content? But why is it so painful to load async content in stores and fetch it from there? Being forced to put the markdown content inside the `routes` folder? Do you _really_ have to create an endpoint in JSON and then fetch the data from there? And how do I fix that race condition that makes the content disappear after page load?

It's not that I couldn't fix the issues, but it all felt too flakey. I thought it'd be a risk to commit to SvelteKit. Then I come across a few useful blog posts, but best of all [Matt Jennings's excellent SvelteKit blog template](https://github.com/mattjennings/sveltekit-blog-template). He made all the design decisions I would have made, and ironed out all the issues I also encountered. With that I was able to put together a site I was happy with. Thanks Matt!

## General ideas for using SvelteKit as a static site generator

The heart of the application is the `routes` folder. You organise things by creating files and folders there. [Rich Harris also thinks the name 'routes' is confusing](https://github.com/sveltejs/kit/issues/3021), but for now it is what it is.

There are two types of routes: pages and [endpoints](https://kit.svelte.dev/docs/routing#endpoints). To simplify, pages are exactly what they sound like, they get translated into URLs a user can see. Endpoints do "backend stuff". You can tell them apart because endpoints end with `.js`, whereas pages end with `.svelte`. At least by default; plugins can change that. And in the routes folder you will also find templates; they are also `.svelte` files. But their name starts with underscores.

As for data sources, I find it easier to think of SvelteKit as Wordpress-like rather than Jekyll-like. As in, there is no magical executable that knows everything about my app. Instead there is a queryable data source which you can use for the same purpose. But it's not a mysql database - it's an endpoint (or endpoints). And you have to create them yourself.

Creating entrypoint(s) is less daunting that it sounds; in the simplest case that would be a 20-30 lines js file. It can use Vite and the mdsvex plugin to collect the frontmatter from all your markdown sources. It can return that list as JSON. But of course entrypoints can get much fancier, the sky's the limits. Once you have your entrypoint, you then create some reusable utility functions. They would fetch this JSON data and apply some filtering, pagination, or id matching, and so on. Then display the data.

What about svelte stores? They don't really fit in with the SSG workflow. Use them, if you need them, as a way to share UI state across pages. But I don't find them so useful for generating the site itself.

## Skeleton SvelteKit static site structure

```bash
├── app.css
├── app.html
...
├── lib
│   ├── components               # your typical svelte component
│   │   ├── Footer.svelte
│   │   ├── Header.svelte
│   │   └── PostSummary.svelte
│   ├── ...
│   ├── get-posts.js            # some util functions to handle the
│   └── filter-by.js            # data from the entrypoint
└── routes
    ├── __layout.svelte         # a layout file
    ├── api
    │   └── posts.json.js       # a single entrypoint for the whole site
    ├── blog
    │   ├── _post.svelte        # a layout file, for markdown files
    │   ├── [slug].svelte       # this fetches content from /api/posts.json and generates a page
    │   └── index.svelte        # same, but this is the index page
    ├── feed.xml.js             # this is also an entrypoint, for rss
    ├── index.svelte            # the site's homepage
    ├── sitemap.xml.js          # this is also an entrypoint, for google / SEO
    └── tags                    # exactly the same idea as /blog/
        ├── [tag].svelte
        └── index.svelte
```

**app.css**: I was converting an existing site, so I just took the generated css and pasted it in `/app.css`. Obviously not the most flexible way to handle it. But this version of the site is in end of life, I don't need to maintain it or amend it. This file is imported as is in the main template

**app.html**: The container HTML for all the pages in the site. It has the `<head>` and `<body>` tag. You can push stuff into this from svelte files by wrapping them in `<svelte:head>`

**lib/components/**: holds straightforward Svelte components. Nothing SSG specific.

**lib/get-posts.js, etc**: These are utility functions used everywhere else in the site. They interact with the data from `/api/posts.json`

**routes/\_\_layout.svelte**: Svelte default layout. It will sit between the main `app.html` and the main content being rendered. In my case it has the header and footer.

**routes/api/posts.json.js**: This is the main entrypoint, the "database" which powers everything. You can see [the json it returns here](https://gotofritz.net/api/posts.json)

**routes/blog/[slug].svelte, index.svelte** They are 'pages' in the website, like the one you are reading. They use `lib/get-posts.js` etc to fetch data from `/api/posts.json`, and then inject it into the various svelte componenents

**routes/feed.xml.js, sitemap.xml.js**: They are both endpoints which produce XML files with file lists. They also use `lib/get-posts.js` etc to fetch data from `/api/posts.json`. [feed.xml](https://gotofritz.net/feed.xml) is for RSS readers, [sitemap.xml](https://gotofritz.net/sitemap.xml) is for search engines.

**routes/tag/[tag].svelte, index.svelte** Some idea as the blog 'pages' - except that the query used to fetch the data from `/api/posts.json` is slightly different.

### Relatively happy

Once I understood the main idea and stopped wasting time with stores development was relatively easy. Particularly as I had [Matt Jennings's excellent SvelteKit blog template](https://github.com/mattjennings/sveltekit-blog-template) to fall back on when I got stuck. It's definitively a huge improvement on what I had before. I still reserve the right to move to <a href="https://astro.build/">Astro</a> though.

### Prior art

I started following [Josh Collinsworth](https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog) blog post to get started.
[David Parker](https://www.davidwparker.com/posts/how-to-make-an-rss-feed-in-sveltekit)'s post was also useful.

I then stumgled upon [Matt Jennings](https://mattjennings.io/blog/rewriting-my-website-in-sveltekit) and [Scott Spence](https://scottspence.com/posts/make-an-rss-feed-with-sveltekit)'s posts, both of which were also super useful.

Some information was gleaned from [mdsvex repo](https://mdsvex.pngwn.io/docs#use-it) and of course the [sveltekit repo](https://kit.svelte.dev/) and issue
