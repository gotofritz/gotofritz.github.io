---
description: Thanks to Elon Musk, it's now socially acceptable for developers to ditch their Twitter accounts. While I'm keeping mine to be able to read long threads, I recently decided to delete all of my tweets and start fresh. I like to think of it as a "quiet quitting"
publishDate: 2022-11-13
draft: false
title: Deleting tweets and likes from twitter
tags:
  - Twitter
---

## Deleting it all? Deleting it all

I'm not going to waste your time with the reasons I left Twitter. I never used it much anyway. But now I moved on, and I don't want my old Twitter account to have any trace of me. So I deleted everything: tweets, retweets, media, likes. My bookmarks are private, so they're safe. And I deleted my direct messages manually because there were so few of them.

## Deleting all tweets, retweets and media with delete tweet

As I set out on my quest to understand the Twitter API, I stumbled upon a free app called [TweetDelete](https://tweetdelete.net/). Simple to use and requiring no sign-in, TweetDelete gets the job done. Though it has a limit of 3200 tweets per day, but with a few daily scripts, I can use it to erase my entire Twitter presence. Farewell, Twitter.

## Deleting all twitter likes with JS on the inspector

Though TweetDelete does not allow for the removal of likes, I discovered that it is a simple process on the web version of Twitter. With a single click, a like can be removed without any confirmation modals. And for those who prefer to be even lazier, there are gists and blog posts with code to automate the process. I found exactly what I was looking for on alphr.com, thanks [to the work of Robert Hayes](https://www.alphr.com/delete-all-twitter-likes/).

```js
setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="unlike"]')) {
    d.click();
  }
  window.scrollTo(0, document.body.scrollHeight);
}, 10000);
```

To use it, navigate to the 'likes' tab, then paste the above JS in the browser inspector. The snippet will click on all the icons with attributes `data-testid="unlike"`, then scroll to the bottom of the page, and wait 10 seconds to give the UI time to load the next lot of liked tweets. Then it will click on all the 'unlikes' and so on, until you are done. Thanks Robert!

## And that was that

All in all simpler than I thought - I got it done without having to get API keys and all that jazz
