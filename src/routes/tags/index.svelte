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
  import PostPreview from "$lib/components/PostPreview.svelte";
  import TagEntry from "$lib/components/TagEntry.svelte";
  import { makeTitle } from "$lib/info.js";
  import { searching } from "$lib/stores/searching";

  export let recentPosts;
</script>

<svelte:head>
  <title>all tags</title>
</svelte:head>

<div
  class="home grid"
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
  .home {
    grid-template-columns: 4rem auto 6rem;
    grid-template-areas:
      "header header header"
      "intro  intro  intro "
      " .. posts .."
      "footer footer footer ";
  }
  header {
    grid-area: header;
  }

  .posts {
    grid-area: posts;
  }
  :global(.home-icon) {
    height: 1rem;
    width: 1rem;
  }
</style>
