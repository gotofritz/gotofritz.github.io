---
publishDate: 2024-01-01
draft: false
archived: false
title: "Pygraphviz Woes on M1 Mac: Docker to the Rescue"
tags:
  - Python
  - VSCode
  - Docker
description: I was trying to install <a href="https://github.com/pygraphviz/pygraphviz">pygraphviz</a> on my M1 laptop using pip, but I found it impossible. Luckily the Dev Container VSCode extension allows me to use it with docker.
---

Pygraphviz, a wrapper for [Graphviz](https://www.graphviz.org/), streamlines graph visualizations (think nodes and connections). While tinkering with [Networkx](https://networkx.org/), I hit a roadblock—pygraphviz was a prerequisite for reading graphs stored in files using the [DOT language](<https://en.wikipedia.org/wiki/DOT_(graph_description_language)>).

Installing pygraphviz invokes the C/C++ compiler to create bindings to Graphviz. The hitch is telling the compiler where to find Graphviz. A seemingly straightforward task, but predictably tricky in Python. Since I installed graphviz with brew, the location of the source files is easily found with

```bash
❯ brew --prefix graphviz
/opt/homebrew/opt/graphviz
```

Passing that path to pip, so that it can pass it to setup, is normally done with

```bash
❯ pip install --config-setting="--global-option=build_ext"
              --config-setting="--build-option=-I$(brew --prefix graphviz)/include/"
              --config-setting="--build-option=-L$(brew --prefix graphviz)/lib/"
              pygraphviz
```

But that doesn't work. Somehow those 'build-options' are not passed to the C compiler, and installation fails with

```bash
pygraphviz/graphviz_wrap.c:3020:10: fatal error: 'graphviz/cgraph.h' file not found
      #include "graphviz/cgraph.h"
               ^~~~~~~~~~~~~~~~~~~
      197 warnings and 1 error generated.
      error: command '/usr/bin/clang' failed with exit code 1
      [end of output]
```

even though the file _is_ there

```bash
❯ ls $(brew --prefix graphviz)/include/graphviz/cgraph.h
/opt/homebrew/opt/graphviz/include/graphviz/cgraph.h
```

This is the most frustrating part of working with Python. I opened [an issue](https://github.com/pygraphviz/pygraphviz/issues/490) in the pygraphviz repo, with little hope it can actually be solved.

## Enter docker

I have worked extensively with docker locally in the past, but then given up. It looks great on paper, but in practice on macs it becomes a memory and disk space hog. However, with Microsoft's introduction of the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension for VSCode, it was time for a second look.

Enabling the extension and creating a new container from a Python image was a breeze. I opened the command palette with &lt;CMD&gt; &lt;SHIFT&gt; P and typed "Dev Container". I picked the "New Container..." command, picked a suitable python image from the list, and it worked out of the box. Adding required packages, such as graphviz, was simplified by editing the `.devcontainer/devcontainer.json` file. No Dockerfile tinkering required—just restart the container, et voilà, it's there!

```json
// comments removed for brevity
{
  "name": "Python 3",
  "image": "mcr.microsoft.com/devcontainers/python:1-3.11-bookworm",

  "features": {
    "ghcr.io/rocker-org/devcontainer-features/apt-packages:1": {
      "packages": "graphviz,graphviz-dev"
    }
  }
}
```

After that I can finally run `pip install pygraphviz` and it just works.

## The Dev Container extension for VSCode is quite good

Working with docker and VSCode on the M1 laptop is quite nice. The machine has enough power and disk space you forget you are working with docker. The only gripe, when you reopen an editor associated with a docker project it nags you to start docker if it isn't running, and there is no "go away" button.
Nevertheless, it seems Docker for local development has earned its second chance.
