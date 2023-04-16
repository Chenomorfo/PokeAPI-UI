<script>
  import Navigation from "../components/Navigation.svelte";
</script>

<main>
  <Navigation />

  <section>
    <slot />
  </section>
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 0.5em;
  }
  section {
    max-height: 100vh;
    overflow-y: auto;
    padding: 20px 0;
  }
</style>
