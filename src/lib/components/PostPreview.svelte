<script>
  import { format, parseISO } from "date-fns";
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";

  export let post;
  export let small = false;
</script>

<div class="flex flex-col">
  <div>
    {#if !small}
      <h1 class="!mt-0 !mb-2 font-serif">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h1>
    {:else}
      <h3 class="!mt-0 !mb-2 font-display text-3xl">
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </h3>
    {/if}
  </div>

  <div class="opacity-70 font-summary mb-4">
    <time>{format(new Date(parseISO(post.date)), "MMMM d, yyyy")}</time>
    •
    <span>{post.readingTime}</span>
  </div>

  <div class="tags mb-4">
    {#each post.tags as tag}
      <div
        class="rounded-full bg-orange-500 py-2 px-4 mr-2 text-white inline-block tag"
      >
        {tag}
      </div>
    {/each}
  </div>

  <div class="flex-1 mb-4">{@html post.preview.html}</div>

  <div class="flex justify-start w-full  mb-16">
    <a href={`/blog/${post.slug}`}
      >Read More <ArrowRightIcon
        class="w-4 h-4 hidden inline-block"
        height="1rem"
        width="1rem"
        hover:inline-block
      /></a
    >
  </div>
</div>

<style>
  h3 {
    line-height: 1.1;
  }
</style>
