<script context="module">
  export let prerender = true;
</script>

<script>
  import Header from "$lib/Header.svelte";
  export let title = "--title--";
  export let date = "--date--";
  /** @type string[]*/
  export let tags = [];
  export let excerpt = "--excerpt-";
  export let prev = "";
  export let next = "";

  let dateObj = new Date(date);
  // @ts-ignore
  let dateStr = isNaN(dateObj)
    ? date
    : `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(dateObj.getDate()).padStart(2, "0")}`;
  let tagsStr = tags.join(", ");
</script>

<svelte:head>
  <title>{title} || gotofritz</title>
  <meta
    name="description"
    content="Fritz Stelluto has been a developer and engineering manager in the digital industry since the 90s. He lives in Berlin."
  />
</svelte:head>

<Header {prev} {next} />
<article class="content-post">
  <section class="intro">
    <div class="post-meta">
      <time datetime={date}>{dateStr}</time>
      //
      <div class="tags">
        {#each tags as tag, i}
          {#if i > 0}, {/if}<a href="/tags/{tag}">{tag}</a>
        {/each}
      </div>
    </div>
    <h1>{title}</h1>
    <h2>{@html excerpt}</h2>
  </section>
  <section class="post-content">
    <slot />
  </section>
</article>

<style>
  .intro {
    margin-top: 112px;
    margin-bottom: 142px;
  }
  .intro {
    color: #2e394d;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
  }
  .intro h2 {
    line-height: 1.5;
    margin-top: 0.33rem;
  }
  .content-post .intro h1 {
    line-height: 1.1;
    margin-top: 0;
  }
</style>
