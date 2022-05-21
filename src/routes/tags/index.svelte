<script context="module">
  export const prerender = true;

  export const load = async ({ fetch, params }) => {
    const currentTag = params.tag;
    return {
      props: {
        currentTag,
        recentPosts: await fetch(`/posts.json?allTags=true`).then((res) =>
          res.json(),
        ),
      },
    };
  };
</script>

<script>
  import TagEntry from "$lib/components/TagEntry.svelte";
  import { searching } from "$lib/stores/searching";

  export let recentPosts;
</script>

<svelte:head>
  <title>all tags</title>
</svelte:head>

<div
  class="gotofritz-grid home grid"
  on:click={() => {
    searching.set(false);
  }}
>
  <header class="mt-4">
    <h1 class="font-display text-6xl mb-16">tags</h1>
  </header>
  <section class="posts pr-8">
    {#each recentPosts as tag}
      <div class="flex">
        <TagEntry tag={tag.tag} count={tag.count} />
      </div>
    {/each}
  </section>
</div>

<style>
</style>
