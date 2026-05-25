---
title: 'Running Roborev on a Branch if There Is New Content'
date: "2026-05-25T17:30:43+02:00"

description: I tend to use LLM coding agents in the cloud, and then [roborev](https://www.roborev.io/) locally to assess the code. This bash command pulls from git, and runs roborev only if changes were pulled

tags: ["coding agents"]
---

```bash
before=$(git rev-parse HEAD)
git pull
after=$(git rev-parse HEAD)
[ "$before" != "$after" ] && roborev review --branch --wait
```

I use `roborev tui --repo` when working locally, which gives you a nice CLI interface to keep track of multipe branches. But if the code lives in github then it adds too much clicking. `roborev review --branch --wait` will print the output stright to the CLI, which is often all I need.

<dl class="code-breakdown">
<dt>before=$(git rev-parse HEAD)</dt>
<dd>make a note of the github hash before I start</dd>
<dt>git pull</dt>
<dd>get the latest code from git</dd>
<dt>after=$(git rev-parse HEAD)</dt>
<dd>make a note of the github hash after the pull</dd>
<dt>[ "$before" != "$after" ]</dt>
<dd>has the hash changed?</dd>
<dt>&&</dt>
<dd>yes; then carry on</dd>
<dt>roborev review --branch --wait</dt>
<dd>review the code with roborev</dd>
</dl>


Simple yet effective.
