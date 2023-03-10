---
publishDate: 2023-03-10
draft: false
archived: false
title: A Clasp template for local Google Apps Script projects, using copier
tags:
  - BoilerPlate
  - Copier
  - GoogleAppsScript
description: |-
  It is possible to develop Google Apps Script projects locally, on your machine, in Typescript, and sync them with Drive. Excited? Don't be. I am still not sure it's a good idea. Anyhow, here's a starter project using Python's Copier
---

## Quick Start

If you just want to start coding, head over to [the repo](https://github.com/gotofritz/copier-template-clasp), install the prerequisites you may need, then spawn your own version

```bash
❯ copier https://github.com/gotofritz/copier-template-clasp my-project-folder
...
```

and everything will happen automagically

## What exactly _is_ Clasp?

[Clasp](https://github.com/google/clasp) is a small Google tool which lets you create a Google Apps Script (GAS) project (i.e., a scripted Sheets / Doc / Slides or other similar) and syncs it with a local folder. It provides some useful Typescript types for all GAS entities.

### How Clasp works, and similarities with the online editor

When you edit scripts with the online GAS editor and save, all the individual .gs script files are concatenated and passed to an optimiser tool called Closure Compiler, and sent to a V8 instance somewhere in a Google data center. V8 is the same engine that powers Node.js. However it's _not_ Node.js. Before the 2020s GAS run on Rhino, the Mozilla tool that compiled JS to Java. They exchanged Rhino with V8, but a lot of the old architecture remains. The V8 script then talks back to the document in your browser, and things happen.

Clasp is not that dissimilar. When you edit your Typescript files locally, they are bundled into a single GAS-friendly JS file, which is also sent to a V8 instance somewhere in a Google data center. If you then have the document open in your browser, you can refresh the page and things will happen there too. So far so similar. So what are the benefits? GAS scripts cannot be run outside Google infrastructure. Why work on your local machine?

## Benefits of using Clasp

### Typescript

If you are a fan of Typescript, that is a no-brainer. You have all the typing goodness that language brings to you. On the online editor you only have the limited typing support Closure Compiler brings. If you don't care much for Typescript, then read on

### Local developer tooling

Reformatting on save with Prettier, or running ESLint is so second nature to JS developers that working without them can feel quite stressful. Working locally makes that a formality. But is it enough to switch?

### Global search and replace

When Google migrated to V8 and the new shiny online editor in 2020ish, they broke global search and replace. A bug was immediately reported, but it's been sitting there, untouched, since. That means that when you want to find variables in other files you have a to open each file in turn and do a local search there. A major PITA, and something that working locally fixes.

### Tests

A much bigger win would be the ability to write tests. That was one of the big reasons to experiment with Clasp when I started. The sad news is that I haven't managed to make it work, and did I find anyone else who has either. The issue is that individual Typescript files which make up your Clasp project are not modules. They are simple files in global scope, like this

```js
const menu = SpreadSheetApp().createMenyu()...
...
```

If you want to use tools like Jest you need each file to be a module

```js
export const menu = SpreadSheetApp().createMenyu()...
```

I haven't a found a way to make _both_ work. I am sure it is doable, I just don't find fiddling with JS build tools exciting enough that I want to invest weeks of my free time on it. Tests are therefore currently on hold

### Third party libraries

I originally discovered Clasp when I was searching for ways to include [Ramda](https://ramdajs.com/), the <abbr title="Functional Programming">FP</abbr> library, in a script. When you bundle your own code you can of course add any third party libraries of your choice (within limits - you won't be able to run React in a Google Spread Sheet. I think). But it also means you or your team can create utilities classes you can distribute more easily than you can with the standard GAS mechanism

### Version Control

The last benefit of handling the code yourself is that you can put it under version control. Which means you can have code reviews if you work in a team for example.

## The downsides of using Clasp

OK, enough of this positivity. What are the bad parts of Clasp? There are a few

### It's slower than the online editor

Although the cycle is the same (transpile - bundle - feed to a remote V8 instance - see end result in browser), it is noticeably slower when working with Clasp. I have set up my boilerplate to watch for code changes and bundle + push automatically. But the slowest part is having to refresh the browser window after yout push, and waiting for it to rerender. I guess I could do that part with Playwright? Add to the "One Day" list. As for the slowness, I haven't worked with it long enough for it to be deal breaker. Yet.

### Longevity

Clasp is a very minor project at Google, and it seems to have already peaked and in Keep The Lights On mode. There have been four major contributors to it, none of whom is currently at Google (and only one was, to start with). All of them have stopped contributing a couple of years ago. A new Google employee has been pushing a few commits a few months ago, and that was that. My spider sense tells me clasp will keep working until suddenly it doesn't. But then, is that any different from vanilla GAS? or anything Google for that matter? The moment you pick their stack you know the score. Also, I had written off GAS itself a decade years ago, when I discovered there was only one Google employee maintaining it part time. And yet it's still around... But Clasp doesn't seem actively maintained. As [PopGoesTheWza wrote on SO](https://stackoverflow.com/a/66715855/345007):

> Don't rely on @google/clasp for compiling your typescript into .gs
>
> Trust me (as a major contributor to clasp) you'll be best by handling the compilation yourself, with clasp only being used to push your compiled files.

### Once you go Clasp, it's incovenient to go back

A bigger risk is that once you start using Clasp it's inconvenient to go back to the online editor. You can't get your individual .ts files back. You can't apply a quick fix directly in the editor. If clasp stops working, you'll be left with one big bundled .gs file. If you use comments at the top your individual files to separate them and include their path, it should be possible to recreate them manually later. But it will be ugly transpiled .ts and not "native" GAS / JS.

## TL;DR is it worth using Clasp then?

I'm not totally convinced myself. It's a bit of a risky bet, but all in all a risk I'm willing to take.

## About the boilerplate

The boilerplate I created is based on PopGoesTheWza's own template. I made a few changes and converted to a [Copier](https://copier.readthedocs.io/en/stable/generating/) template. I used Copier because I prefer Python to Node for CLI scripting.

It uses fswatch for automatically pushing files to Google when you save, and of course the clasp tool, but other than that it's standard Node/TS dependencies. Hope it's useful to you.
