<script>
  import ArrowRightIcon from "heroicons-svelte/solid/ArrowRightIcon.svelte";
  import PostDate from "$lib/components/PostDate.svelte";
  import PostTags from "$lib/components/PostTags.svelte";

  export let post;
</script>

<div class="mb-16">
  <div class="title">
    <h3 class="!mt-0 !mb-2 font-display text-3xl">
      {#if post.is_empty}
        {post.title}
      {:else}
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      {/if}
    </h3>
  </div>

  <div class="opacity-70 mb-2">
    <PostDate date={post.date} readingTime={post.readingTime} />
    <PostTags tags={post.tags} />
  </div>

  <div class="lg:flex-1 mb-4">
    <div class="mb-4 dark:prose-invert searching:prose-invert leading-7">
      {@html post.preview.html}
    </div>

    {#if !post.is_empty}
      <div>
        <a href={`/blog/${post.slug}`} class="group pr-8 no-underline"
          >Read More <ArrowRightIcon
            class="w-4 h-4 invisible inline-block group-hover:visible"
            height="1rem"
            width="1rem"
            hover:inline-block
          /></a
        >
      </div>
    {/if}
  </div>
</div>

<style>
  h3 {
    line-height: 1.1;
  }
</style>
