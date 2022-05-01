<script context="module">
  // @ts-ignore
  export const load = async ({ fetch }) => {
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();

    return {
      props: {
        posts: allPosts,
      },
    };
  };
</script>

<script>
  import Header from "$lib/Header.svelte";
  import PostSummary from "$lib/PostSummary.svelte";
  /** @type {any} */
  export let posts;
</script>

<svelte:head>
  <title>gotofritz || fritz stelluto</title>
  <meta
    name="description"
    content="Fritz Stelluto has been a developer and engineering manager in the digital industry since the 90s. He lives in Berlin."
  />
</svelte:head>

<Header isHome={true} />
<section class="intro">
  <h1>Fritz Stelluto is an engineering manager in Berlin</h1>
  <h2>
    Currently leading the Smart Signage team at <a
      href="https://www.advertima.com/">Advertima</a
    >
  </h2>
</section>
{#each posts as post}
  <PostSummary {...post} />
{/each}

<style>
  .intro {
    margin-top: 112px;
    margin-bottom: 142px;
  }
  .intro {
    color: #2e394d;
    -webkit-font-smoothing: subpixel-antialiased;
    letter-spacing: 0.2px;
    text-rendering: optimizeLegibility;
  }
  .intro h2 {
    margin-top: 2px;
  }
  .content-post .intro h1 {
    margin-top: -0.5rem;
  }
</style>
