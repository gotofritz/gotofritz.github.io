---
title: "Trying Actual Budget App"
date: "2025-01-06T12:34:35+01:00"
draft: true
description: How I migrated from You Need a Budget (YNAB) to Actual Budget
tags: ["apps"]
---

I have been a [YNAB](https://www.ynab.com/) user for a few years, but I wasn't too happy with it. They are really geared to the US market where it is normal to allow apps to access your bank account. I have never been a fan of that idea, and besides, it'd be a breach of contract here in Germany. Importing data via CSV is possible, but the YNAB team never put any effort into it, they are not interested. I needed to preprocess the CSV to make it YNAB friendly. I have been longing for an open source version of YNAB I could play with, and came across [Actual Budget](https://actualbudget.org/)

## TL;DR is it any good?

So far I like it, and I'm going to keep using it.

It's very similar to YNAB in approach. The [rules](https://actualbudget.org/docs/budgeting/rules/) are more (they even allow regexes), as are the [reports](https://actualbudget.org/docs/reports/custom-reports) - admittedly not a high bar since they are quite poor in YNAB. It's quite powerful and there is still a lot I haven't discovered.

But most of all, it has a very nice interface for uploading CSVs, and it remembers your mappings next time you import one.

On the minus site the UX is not super sleek. But given that one my main complaints about YNAB is that they put all their efforts into UX rather than functionality, I have no complaints. It still has a few bugs, but they are being fixed, and am looking forward helping out with that.

## A Node.js / React app with Redux

Actual Budget is a javascript app with an interesting architecture.

> When actual runs, it runs the front-end react based web app, as well as a local in-browser database server. You may see these informally referred to as 'frontend' and 'backend' - not to be confused with the sync-server or some other type of remote 'backend' (which doesn't exist).

_from_ [Architecture Notes](https://actualbudget.org/docs/contributing/project-details/architecture)

But you only need to worry about the architecture if you want to contribute to it and hack around. If you just want to use it, then the easiest way is with docker. In my case, `YOUR/PATH/TO/DATA:/data` is a Dropbox folder

```sh
❯ docker run --pull=always --restart=unless-stopped -d -p 5006:5006 -v YOUR/PATH/TO/DATA:/data --name my_actual_budget actualbudget/actual-server:latest
```

### It just wouldn't die

At one point I got an alert in the page that a new version was available. So I tried to stop all running docker containers

```sh
❯ docker stop $(docker ps -q)
```

Then I refreshed the page again in Firefox and .. it was still there! So I decided to go nuclear and remove anything remotely docker-like

```sh
# remove all containers
❯ docker rm $(docker ps -a -q)

# remove all images
❯ docker rmi $(docker images -q)

# remove all volumes
❯ docker volume rm $(docker volume ls -q)

# confirm there is nothing whatsoever listening to that port
❯ sudo lsof -i -P | grep LISTEN | grep 5006
```

But it was still in the browser, mocking me! That's when I started reading the documentation and discovered it doesn't have a server as such. I restarted the browser and the app was gone, as expected.

## Running the server locally

Eventually I moved from docker to running the server locally (I was trying to diagnose a small bug). The instructions are pretty easy, but what is doesn't make clear is that I needed to create a file `/config.json` at the root of the project folder with the same path I passed as a volume in docker command

```sh
❯ gh repo clone actualbudget/actual-server
❯ cd actual-server

# this needs to be done before starting the server
❯ echo '{ "ACTUAL_DATA_DIR": "/YOUR/PATH/TO/DATA" }' > config.json

❯ yarn install
➤ YN0000: · Yarn 4.3.1
➤ YN0000: ┌ Resolution step
...

❯ yarn start
Checking if there are any migrations to run for direction "up"...
....
```

Then the instance in the browser will find the server. But I needed to sign out and sign back in again (the first time you can enter any username/password combination you like). After that, the web app showed me a panel to register the db in the browser with the server, I clicked "Register" and that was it.
