---
publishdate: 2012-03-28T20:52:00+01:00
title: Escaping $ in replace strings in Javascript
description: To have a $ in your replace strings in Javascript regular expressions, it needs to be escaped with another $
tags:
  - Javascript
draft: false
slug: escaping-in-replace-strings-in-javascript
---

I.e., `$$`, not `\$`. In other words, the escape character for the RegExp "language" is $, even within Javascript, not the standard slash \n

```js
"I &lt;feeling> that".replace(/&lt;(.+?)>/g, "$$1");
//won't work - will produce ""I $1 that""

"I &lt;feeling> that".replace(/&lt;(.+?)>/g, "$$$1");
//works - "I $feeling that"
```
