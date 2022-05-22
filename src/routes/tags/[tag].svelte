<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const currentTag = params.tag;
    return {
      props: {
        currentTag,
        recentPosts: await fetch(`/posts.json?tag=${currentTag}`).then((res) =>
          res.json(),
        ),
      },
    };
  };
</script>

<script>
  import NavHeader from "$lib/components/NavHeader.svelte";
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { makeTitle } from "$lib/info.js";
  import { searching } from "$lib/stores/searching";

  export let recentPosts;
  export let currentTag = "";
</script>

<svelte:head>
  <title>{makeTitle(`tag: ${currentTag}`)}</title>
</svelte:head>

<NavHeader />
<div class="flex flex-col min-h-screen searching:text-gray-300">
  <div class="mx-auto w-full max-w-4xl">
    <div
      class="gotofritz-grid home grid"
      on:click={() => {
        searching.set(false);
      }}
    >
      <header class="mt-4">
        <h1 class="font-display text-6xl mb-16">
          <a href="./">tag</a>: {currentTag}
        </h1>
      </header>
      <section class="posts pr-8">
        {#each recentPosts as post}
          <div class="flex">
            <PostPreview {post} small />
          </div>
        {/each}
      </section>
    </div>
  </div>
</div>

<style>
</style>
