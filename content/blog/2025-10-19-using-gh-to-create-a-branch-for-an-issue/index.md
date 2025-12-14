---
title: "Using Gh to Create a Branch for an Issue"
date: "2025-10-19T17:01:23+02:00"

description: |-
  The CLI utility [gh](https://cli.github.com/) allows you to create a branch associated with an issue, even if in another repository.

tags: ["github"]
mastodon: https://hachyderm.io/@gotofritz/115401940724676022
---

## TL;DR

```bash
# creates a branch in repo bomb for issue 170 in repo nails
❯ gh issue develop 179 --repo acme/nails
    --branch-repo acme/bomb
    --checkout
github.com/acme/bomb/tree/179-i-got-a-brilliant-idea
```

## GH is very useful for working with Github projects

Github Projects is a substandard tool for managing issues - mostly because feature poor and not in active development. But it's free and works well with the [gh](https://cli.github.com/) CLI utility. Its most compelling feature, however, is probably the fact that it's not [Jira](https://thenewstack.io/why-developers-hate-jira-and-what-atlassian-is-doing-about-it/). We have been using it at work until we became large enough to migrate to better tooling, in our case [Linear](https://linear.app/).

## Using gh with Github Projects

There are a few commands that you can use with the `gh` CLI utility:

- [`gh issue`](https://cli.github.com/manual/cli-issue)
- [`gh pr`](https://cli.github)

Here are a couple I use all the time

### View work in the browser

```bash
❯ gh issue view 123 -w
❯ gh pr view -w
❯ gh repo view -w
```

These are all similar, and they open an issue / the current PR / the current repo in a web browser

### Toggle draft / ready for work for a PR

```bash
# make the PR ready
❯ gh pr ready

# make the PR a draft
❯ gh pr ready --undo
```

Odd syntax, but whatever

### Checkout a new branch for an issue in another branch

And the biggest time saver of them all, which create a branch associated with an issue in another repo, and checks it out too.

```bash
❯ gh issue develop 179 --repo acme/nails
    --branch-repo acme/bomb
    --checkout
github.com/acme/bomb/tree/179-i-got-a-brilliant-idea
```

Hope these are helpful to you.
