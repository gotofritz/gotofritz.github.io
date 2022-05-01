<script>
  import Footer from "$lib/Footer.svelte";
  import "../app.css";
</script>

<main class="panel-container">
  <div class="content">
    <slot />
  </div>
  <Footer />
</main>

<style>
  .panel-container {
    background-color: #fdfcf6;
    box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    flex: 1;
    justify-content: space-around;
    width: 100%;
    z-index: 2;
    position: relative;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 961px) {
    .panel-container {
      margin: 56px 0;
      max-width: 1440px;
      width: calc(100% - 180px);
      border-radius: 4px;
    }
  }
  .content {
    flex: 1;
    max-width: 700px;
    padding: 84px 0;
    width: 100%;
  }
</style>
