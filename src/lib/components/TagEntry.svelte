<script>
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";
  import PostDate from "$lib/components/PostDate.svelte";
  import PostTags from "$lib/components/PostTags.svelte";
  import PostsCount from "./PostsCount.svelte";

  export let tag;
  export let count;
</script>

<div class="mb-8">
  <div class="title">
    <h3 class="!mt-0 !mb-2 font-display text-3xl">
      <a href={`/tags/${tag}`}>{tag}</a>
      <span class="font-normal" />
    </h3>
  </div>
  <div class="opacity-70 ml-12">
    <PostsCount {count} />
  </div>
</div>

<style>
  h3 {
    line-height: 1.1;
  }
</style>
