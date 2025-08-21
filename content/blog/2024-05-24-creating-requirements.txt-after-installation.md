---
publishdate: 2024-05-24
draft: false
archived: false
title: "Creating a requirements.txt after installation"
tags:
  - python
description: <code>pip freeze > requirements.txt</code> is the canonical way to capture all the packages you have installed in a Python project. I am not sure why; it doesn't do what you expect.
slug: creating-requirements.txt-after-installation
---

## Laughs in Javascript

Coming from Javascript I am still amazed by how primitive the DX in python feels in comparison. If you use pip, there is no `pnpm add PACKAGE` or `npm i PACKAGE --save` to install a package _and_ save a reference into the `requirements.txt`. Of course poetry creates lock files automatically, but pip is the standard python package manager, it should do the right thing. Instead, after installing packages with `pip install PACKAGEA  PACKAGEB ...` one has to capture the installed packages with `pip freeze > requirements.txt`. At least that's what popular search engines tell you to do.

In reality, `pip install PACKAGEA  PACKAGEB` followed by `pip freeze > requirements.txt` can potentially generate a requirements.txt which is quite long. That's because `freeze` is giving you a snapshot of the packages installed in your environment, not the one you _meant_ to install. When pip installs `PACKAGEA  PACKAGEB`, it also installs all of their dependencies. All of these dependencies will then be listed in your `requirements.txt`. But what you _really_ want to do is just have a requirements like

```text
PACKAGEA==4.0.1
PACKAGEB==1.0.3
```

For that you need to install a separate tool.

## Enter pipreqs

There are actually different tools for doing this; in my experience they are interchangeable, and I wouldn't agonise about which one to choose. I picked `pipreqs` because it was the first I came across, but `pip-compile` works just as well. I installed it with `pipx` so that is available globally. Of course, I had to install pipx first

```bash
❯ brew install pipx
==> Auto-updating Homebrew...
...

❯ pipx install pipreqs
installed package pipreqs 0.5.0, installed using Python 3.12.3
...

❯ pipreqs . --force
...
INFO: Successfully saved requirements file in ./requirements.txt
```

And that's the gist of it.
