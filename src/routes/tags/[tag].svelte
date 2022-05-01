<script context="module">
  // @ts-ignore
  export const load = async ({ fetch, params }) => {
    const currentTag = params.tag;
    const posts = await fetch("/api/posts.json");
    const allPosts = await posts.json();
    // @ts-ignore
    const tagPosts = allPosts.filter((post) => post.tags.includes(currentTag));

    return {
      props: {
        posts: tagPosts,
        currentTag,
      },
    };
  };
</script>

<script>
  import Header from "$lib/Header.svelte";
  import PostSummary from "$lib/PostSummary.svelte";

  /** @type any*/
  export let posts = [];
  export let currentTag = "";
</script>

<svelte:head>
  <title>tag {currentTag} || gotofritz</title>
  <meta name="description" content="All the tags used on this site" />
</svelte:head>

<Header />
<section class="intro">
  <h1>Tag // {currentTag}</h1>
</section>
<article class="content-tags">
  {#each posts as post}
    <PostSummary {...post} />
  {/each}
</article>

<style>
  .intro {
    margin-top: 112px;
    margin-bottom: 142px;
  }
</style>
