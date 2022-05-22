<script>
  export let count = 0;
  export let posts = count === 1 ? "post" : "posts";
</script>

<div class="font-summary">{count} {posts}</div>
