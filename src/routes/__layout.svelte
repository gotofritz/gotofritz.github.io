<script>
  import "../app.css";
  import "../prism.css";
  import "focus-visible";
  import NavHeader from "$lib/components/NavHeader.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<NavHeader />
<div class="flex flex-col min-h-screen searching:text-gray-300">
  <div class="mx-auto w-full max-w-4xl">
    <slot />
  </div>
</div>
<Footer />

<style>
</style>
