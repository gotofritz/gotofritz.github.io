---
publishdate: 2024-12-02
draft: false
archived: false
title: "Migrating python projects to uv"
tags:
  - python
description: I finally had the chance to test Astral's <a href="https://docs.astral.sh/uv/">uv</a> tool. It's very good, from what I've seen so far.
slug: migrating-python-projects-to-uv
---

I first tested it on a simple cli app I am building with [click](https://click.palletsprojects.com/en/stable/). The changes were minimal as I was already using a `pyproject.toml` file for the project.

### Setup the virtual environment

I nuked my current venv, added a `.python-version` file to the project root, and used uv to create a new venv

```sh
❯ rm -rf venv
❯ echo '3.13' > .python-version
❯ uv venv
```

### Add dependencies

To move dependencies from `requirements.txt` to `pyproject.toml` I just used the REPL

```sh
❯ python
Python 3.13.0 (main, Oct 16 2024, 08:05:40) [Clang 18.1.8 ] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> import re
>>> import subprocess
>>> with open("requirements.txt", "r") as f:
...      for line in f.readlines():
...         if len(line) < 2 or line[0] == "#":
...             continue
...         package = re.sub(r"[\s=].*$", "", line, flags=re.IGNORECASE)
...         subprocess.run(f"uv add {package}", shell=True)
```

That worked because my project setup was quite simple.

### Add the build system

The project already had a `[project.scripts]` section with the entry point for the CLI app. All I had to do was to add this section to the `pyproject.toml`

```toml

[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"
```

## What I liked so far

UV is supposed to be fast, but my projects are so small I don't notice the difference to be honest. I like not having to use pyenv and pip and venv.
I like that uv picks up the `.python-version` seamlessly, and not having to do `poetry env use X`. I like that I can create util [scripts](https://docs.astral.sh/uv/guides/scripts/#declaring-script-dependencies) which have their own dependencies and run in a standalone virtual env.

It's not a game changer for me (yet), but it seems very nice indeed
