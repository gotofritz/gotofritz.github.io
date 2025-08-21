---
title: Upgrading Actual Budget
date: "2025-07-26T15:24:20+02:00"

description: |-
    [Actual Budget](https://actualbudget.org/) is the open source budgeting app I replaced YNAB with. They have now merged all the Actual apps into one repo, which meant running a migration.

tags: ["actual budget", "open source software"]
---

## Why leave You Need A Budget (YNAB)?

[YNAB](https://en.wikipedia.org/wiki/YNAB) was great and refreshing when it first came out, but that was many years ago now. The product has been stagnant for a while, barring the odd UX adjustments every now and then.

It is also geared to the US market, they only seem to be interested in customers who are willing to connect YNAB to their bank accounts. It's not something we do as lightly in Europe (and besides it may even be a breach of contract). I'd rather import CSV files manually, but they make it very awkward. Besides, I am not so enamoured with the idea of giving the staff of a random startup in the US access to all my financial affairs.

## Why Actual Budget?

Actual Budget follows the same principles as YNAB but it's way better and more configurable. It's open source for a start, and all the files are local. It imports CSVs from my bank accounts very nicely. It's also a lot more configurable than YNAB. I am totally happy with it.

## The need for migrating

I have been [building Actual from source](https://actualbudget.org/docs/install/build-from-source) since that allows me to submit patches and small fixes. It's not so complicated, it's a React App. At the start of 2024 all the Actual apps into one repo, so I had which meant doing a migration. It mostly worked, except for a small glitch in the configuration. This is what I did

First I cloned the new repo, installed and built it, as per [instructions](https://actualbudget.org/docs/install/build-from-source)

```bash
❯ git clone https://github.com/actualbudget/actual.git
...
❯ yarn install
...
❯ yarn build:server
...
```

Then I copied the config to the new repo. This is where I came across a glitch - I save the data in Dropbox, but and the config key had changed name from ACTUAL_DATA_DIR to dataDir, but wasn't documented. I fixed it using sed and submitted a PR for the documentation

```bash
# this opens the file from the old actual-server repo,
# runs sed on it to change a string, and saves it
# to the new repo
❯ sed -e "s/ACTUAL_DATA_DIR/dataDir/" actual-server/config.json > \
   actual/packages/sync-server/config.json
```

The other files could just copied without changes

```bash
❯ cp actual-server/.migrate actual/packages/sync-server/
❯ cp -r actual-server/user-files actual/packages/sync-server/
❯ cp -r actual-server/server-files actual/packages/sync-server/
```

After that the server can be run with just

```bash
❯ yarn start:server
Checking if there are any migrations to run for direction "up"...
...
```

and then accessed at <http://127.0.0.1:5006/>. It was relatively smooth
