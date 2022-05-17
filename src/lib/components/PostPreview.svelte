<script>
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";
  import PostDate from "$lib/components/PostDate.svelte";
  import PostTags from "$lib/components/PostTags.svelte";

  export let post;
</script>

<div class="mb-16">
  <div class="title">
    <h3 class="!mt-0 !mb-2 font-display text-3xl">
      <a href={`/blog/${post.slug}`}>{post.title}</a>
    </h3>
  </div>

  <div class="opacity-70 mb-2">
    <PostDate date={post.date} readingTime={post.readingTime} />
    <PostTags tags={post.tags} />
  </div>

  <div class="flex-1 mb-4">
    <div class="mb-4 prose dark:prose-invert">{@html post.preview.html}</div>

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
