<script>
  import { format, parseISO } from "date-fns";
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";

  export let post;
</script>

<div class=" mb-16">
  <div class="title ml-32">
    <h3 class="!mt-0 !mb-2 font-display text-3xl">
      <a href={`/blog/${post.slug}`}>{post.title}</a>
    </h3>
  </div>

  <div class="opacity-70 font-summary mb-4 ml-32">
    <time>{format(new Date(parseISO(post.date)), "MMMM d, yyyy")}</time>
    •
    <span>{post.readingTime}</span>
  </div>

  <div class="flex flex-row">
    <div class="tags w-32">
      {#each post.tags as tag}
        <div
          class="rounded-lg bg-gray-200 py-1 leading-tight mr-4 mb-2 text-center text-gray-600 block tag"
        >
          {tag}
        </div>
      {/each}
    </div>

    <div class="flex-1 mb-4">
      <div class="mb-4">{@html post.preview.html}</div>

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
</div>

<style>
  h3 {
    line-height: 1.1;
  }
</style>
