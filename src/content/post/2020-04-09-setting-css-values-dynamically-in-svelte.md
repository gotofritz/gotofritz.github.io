---
description: If you are used to React's Styled Components, assigning CSS values dynamically in Svelte can be baffling at first.
publishDate: 2020-04-09
draft: false
archived: false
title: Setting CSS values dynamically in Svelte
tags:
  - SvelteJS
---

CSS-in-JS is not universally popular. In fact many developers, expecially CSS experts, absolutely detest it, as the CSS gets lost in a sea of JS. Although in Svelte CSS _is_ parsed and rendered by JS, the framework actually tries to keep the two separate. You cannot plug JS values into CSS; the following will not work

```html
<!-- App.svelte-->
<script></script>

<style>
  div {
    grid-template-cols: 1fr 2fr;
    grid-template-areas: 'nav main';
  }
</style>

<div>
  <OneComponent gridArea={nav}>
  <AnotherComponent gridArea={main}>
</div>

<!-- AnotherComponent.svelte -->
<script>
  export let gridArea;
</script>

<style>
  div { grid-area: {gridArea}; }
</style>

<div>
  Welcome to my homepage
</div>
```

This looks a bit drastic. What if you _need_ to pass some CSS values down the component tree? Well it's doable - you just need to use CSS variables, and use the HTML section of your .svelte file as a sort of _free trade zone_ where JS and CSS can talk to each other

```html
<!-- AnotherComponent.svelte -->
<script>
  export let gridArea;
</script>

<style>
  div {
    grid-area: var(--grid-area);
  }
</style>

<div style="--grid-area: {gridArea}">Welcome to my homepage</div>
```

So the component gets the value injected into a JS variable, which is then copied into a CSS variable in one of the HTML elements' style attributes. Doesn't matter which one, apparently. It's a bit of a roundabout way, and it's not clear how conflicts are dealt with, but it keeps the CSS nice and neat, which is a good thing.
