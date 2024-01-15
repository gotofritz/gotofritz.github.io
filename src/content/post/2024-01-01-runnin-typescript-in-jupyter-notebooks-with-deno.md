---
publishDate: 2024-01-02
draft: false
archived: false
title: "Running typescript in Jupyter notebooks with deno"
tags:
  - Jupyter
  - Typescript
  - Deno
description: I started this post to keep track of the process, thinking it was going to be a slog. Instead it took me all of 2 minutes and It Just Works. Mind. Blown.
---

## What is Deno?

If you have never heard of it - [deno](https://deno.com/) is a runtime similar to Node.js (in fact its creator was also Node.js's creator), but it "fixes" a few design choices node's creator considers bad, and most of all, it supports Typescript natively.

## How to run deno in a jupyter notebook

Strictly speaking it's the other way round - we are using deno to run a notebook, and the fact that typescript is understood by it (and python isn't) is just a side effect. But it looks and feels like a 'normal' Jupyter notebook, so it doesn't matter in the end.

First you need to [install deno](https://docs.deno.com/runtime/manual/getting_started/installation) itself. On a mac:

```bash
❯ brew install deno
==> Downloading https://formulae.brew.sh/api/formula.jws.json
...
```

Then you use deno to install [a jupiter kernel](https://docs.deno.com/runtime/manual/tools/jupyter)

```bash
❯ deno jupyter --unstable --install
[InstallKernelSpec] Installed kernelspec deno in /Users/fritz/Library/Jupyter/kernels/deno
✅ Deno kernelspec installed successfully.
```

Then you open a notebook, and you tell it to use the deno kernel you just installed instead of the usual ipython one. In VSCode there is a button at the top right of the IDE which says "Kernel". That's it. Job done.

The [official documentation](https://docs.deno.com/runtime/manual/tools/jupyter) is very good and there is no point repeating it here.
