<script>
  /** @type string[]*/
  export let tags = [];
  export let tag = "";
  export let when = "--when--";
  export let permalink = "--permalink--";
  export let excerpt = "";
  export let title = "--title--";
  export let isEmpty = false;
  let whenHuman = when.substring(0, 10);
</script>

<section class="timeline">
  <div class="labelled-row">
    {#if tag}
      <h2>
        {@html tag}
      </h2>
    {:else}
      <h3 class="row-label">
        {#if when}
          <time datetime={when}>
            {whenHuman}
          </time>
        {/if}
      </h3>
    {/if}
    <div class="row-content">
      <div class="title">
        {#if !isEmpty && permalink}
          <a href={permalink}>{title}</a>
        {:else}
          {title}
        {/if}
      </div>

      {#if excerpt}<div class={tag ? "excerpt-tag" : "excerpt"}>
          {@html excerpt}
        </div>{/if}
      {#if tags.length}<div class="row-label">
          // {@html tags
            .map((tag) => `<a href="/tags/${tag}">${tag}</a>`)
            .join(" // ")}
        </div>{/if}
      {#if tag}
        <h3 class="row-label">
          {#if when}
            <time datetime={when}>
              {whenHuman}
            </time>
          {/if}
        </h3>
      {/if}
    </div>
  </div>
</section>

<style>
  time {
    color: hsla(45, 69%, 65%, 1);
    display: inline;
  }

  .excerpt {
    margin: 0.75rem 0;
  }

  .excerpt-tag {
    margin: 0.25rem 0;
  }

  .title {
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.1;
  }
</style>
