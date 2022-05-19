<script context="module">
  export const prerender = true;

  export const load = async ({ fetch }) => {
    return {
      props: {
        recentPosts: await fetch("/posts.json?limit=100").then((res) =>
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
  class="home grid"
  on:click={() => {
    searching.set(false);
  }}
>
  <header class="mt-4"><h1 class="font-display">Fritz Stelluto</h1></header>
  <main class="intro font-intro text-4xl leading-tight mb-28">
    I'm Fritz, an engineer based in Berlin. I currently work in the Machine
    Learning department at <a href="https://wayfair.de">Wayfair</a>. I tend to
    write short posts about technical stuff
  </main>
  <section class="posts pr-8">
    {#each recentPosts as post}
      <div class="flex">
        <PostPreview {post} small />
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
  header h1 {
    font-size: 9.4rem;
    line-height: 1.1;
  }

  .intro {
    width: 49ch;
    grid-area: intro;
  }

  .posts {
    grid-area: posts;
  }
  :global(.home-icon) {
    height: 1rem;
    width: 1rem;
  }
</style>
