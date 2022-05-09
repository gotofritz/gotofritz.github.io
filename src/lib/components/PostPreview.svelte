<script>
  import { format, parseISO } from "date-fns";
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";

  export let post;
</script>

<div class="mb-16">
  <div class="title">
    <h3 class="!mt-0 !mb-2 font-display text-3xl">
      <a href={`/blog/${post.slug}`}>{post.title}</a>
    </h3>
  </div>

  <div class="opacity-70 mb-2">
    <time class="font-summary"
      >{format(new Date(parseISO(post.date)), "MMMM d, yyyy")}</time
    >
    •
    <span class="font-summary mr-2">{post.readingTime}</span>
    {#each post.tags as tag}
      <div
        class="rounded-lg bg-gray-200 py-1 px-2 leading-tight mr-4 mb-2 text-center text-gray-600 tag text-xs inline-block"
      >
        {tag}
      </div>
    {/each}
  </div>

  <div class="flex-1 mb-4">
    <div class="mb-4 prose">{@html post.preview.html}</div>

    <div class="justify-start">
      <a href={`/blog/${post.slug}`} class="group pr-8"
        >Read More <ArrowRightIcon
          class="w-4 h-4 invisible inline-block group-hover:visible"
          height="1rem"
          width="1rem"
          hover:inline-block
        /></a
      >
    </div>
  </div>
</div>

<style>
  h3 {
    line-height: 1.1;
  }
</style>
