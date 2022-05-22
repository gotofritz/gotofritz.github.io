<script context="module">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch("/posts.json?allTags").then((res) =>
          res.json(),
        ),
      },
    };
  };
</script>

<script>
  import PostPreview from "$lib/components/PostPreview.svelte";
  import { makeTitle } from "$lib/info.js";
  import { searching } from "$lib/stores/searching";

  export let recentPosts;
</script>

<svelte:head>
  <title>{makeTitle("Fritz Stelluto")}</title>
</svelte:head>

<div
  class="gotofritz-grid home lg:grid p-2 l:p-0"
  on:click={() => {
    searching.set(false);
  }}
>
  <header class="mt-4"><h1 class="font-display">Fritz Stelluto</h1></header>
  <main
    class="intro font-intro text-xl lg:text-4xl w-full leading-tight mb-28  mt-2 lg:mt-0"
  >
    I'm Fritz, an engineer based in Berlin. I currently work in the Machine
    Learning department at <a href="https://wayfair.de">Wayfair</a>. I tend to
    write short posts about technical stuff
  </main>
  <section class="posts lg:pr-8">
    {#each recentPosts as post}
      <div class="lg:flex">
        <PostPreview {post} small />
      </div>
    {/each}
  </section>
</div>

<style>
  .intro {
    @apply w-full;
  }

  header h1 {
    @apply text-5xl;
  }

  @media (min-width: 768px) {
    .intro {
      width: 49ch;
    }
    header h1 {
      font-size: 9.4rem;
    }
  }
</style>
