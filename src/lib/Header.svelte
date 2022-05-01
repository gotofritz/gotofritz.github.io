<script>
  export let isHome = false;
  export let prev = "";
  export let next = "";
</script>

<nav class="flat-nav">
  <div
    itemscope
    itemtype="http://schema.org/Person"
    class="vcard group-of-links"
  >
    {#if isHome}
      <a href="mailto:info@gotofritz.net" itemprop="email">email</a>
      <a href="/fritz-stelluto_resume.pdf" title="my CV as a PDF">my resume</a>
    {:else}
      {#if prev}<a href={prev}>previous post</a>{/if}
      <a href="/">home</a>
      {#if next}<a href={next}>next post</a> {/if}
    {/if}
    <form class="search" action="https://google.com/search" method="get">
      <input
        type="text"
        id="search-str"
        name="q"
        results="0"
        placeholder="search"
        aria-label="search"
      />
      <input type="hidden" name="q" value="site:gotofritz.net" />
    </form>
  </div>
</nav>

<style>
</style>
