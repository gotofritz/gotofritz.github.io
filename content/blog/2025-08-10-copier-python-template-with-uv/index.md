---
title: Copier Python template with uv
date: '2025-08-10T22:20:52+02:00'

description: Here's a copier project template that sets up everything I need for a modern Python CLI project in about 30 seconds.

tags: ['copier', 'python', 'uv', 'vscode']
mastodon: https://hachyderm.io/@gotofritz/115335490987115077
---

The template is available at [github.com/gotofritz/copier-python-template](https://github.com/gotofritz/copier-python-template) should you want to fork it and try it out. Just make sure you replace all occurrences of "gotofritz" from your fork.

## Copier, because nobody wants to set up the same boilerplate over and over

[Copier](https://copier.readthedocs.io/en/stable/) is a CLI tool written in Python which you can use to set up project templates. You can then use it to generate new projects from your templates, or even update existing ones when you've improved the template. When you're setting up a new project, it asks you questions to fill in all the placeholders you've left in the template.

## uv, modern Python package management

[uv](https://docs.astral.sh/uv/) is a Python package installer and resolver written in Rust. It's supposed to be a drop-in replacement for pip and pip-tools, except way faster. But it doesn't stop there - it also handles virtual environments and can wrangle Python versions, so it's basically everything you need for Python project management rolled into one tool.

## The Template

The Copier template combines these tools to create a comprehensive Python project setup. It generates projects with modern tooling and best practices already configured.

When you use this template, you get a project with:

- **CLI scaffolding** with Click
- **Fast dependency management** using uv instead of pip
- **Code formatting and linting** with Ruff
- **Type checking** with mypy
- **Pre-commit hooks** for code quality enforcement
- **Testing setup** with pytest and coverage reporting
- **Various coding tasks** using TaskFile
- **Automated versioning** using Conventional Commits and Commitizen

## Getting Started

Install uv if you haven't already:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Then generate a new project:

```bash
uvx copier copy https://github.com/gotofritz/copier-python-template my-project --trust
```

You need that `--trust` flag because the template runs some setup scripts to get everything initialized properly.

Answer the interactive prompts to configure your project, then:

```bash
cd my-project
git init
uv sync
```

## Project Structure

You'll find:

- **pyproject.toml** with modern Python packaging configuration
- **Development tools** already configured (ruff, mypy, pytest, pre-commit)
- **CLI scaffolding** if you want it, complete with sample commands
- **TaskFile** for all those repetitive tasks you'd otherwise forget how to run

## Development Workflow

Here's what a typical workflow looks like:

```bash
# Install dependencies
uv sync

# Try out the main command (assuming you opted for CLI)
my-project -h

# run all code quality steps, including test
task qa

# just run the tests
task test

# open the code coverage summary in a web browser
task coverage

# Install pre-commit hooks
uv run pre-commit install

# See all available tasks
task --list
```

## Updating Projects

When the template is updated, you can update existing projects:

```bash
uvx copier update
```

It'll merge the improvements into your project and let you deal with any conflicts that crop up.

## Why This Approach

When starting up a new project the last thing I want is to be bogged down with setting up the project scaffolding. Reusing a project structure I am familiar saves me tons of time.

<https://gotofritz.net/blog/2025-08-10-copier-python-template-with-uv/>
