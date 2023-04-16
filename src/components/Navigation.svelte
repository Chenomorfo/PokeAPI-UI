<script>
  class Link {
    constructor(name = "", path = "") {
      this.name = name;
      this.path = path;
    }
  }

  const links = [
    new Link("Home", "/"),
    new Link("All Pokemons", "/all"),
    new Link("Find", "/find"),
    new Link("Items", "/items"),
  ];
</script>

<nav>
  <h1 style="color:#242424;text-align:center;padding-top:10px">
    POKEDEX SVELTE
  </h1>
  <ul>
    {#each links as { name, path }}
      <li><a href={path}>{name}</a></li>
    {/each}
  </ul>
</nav>

<style>
  a {
    text-decoration: none;
    color: unset;
  }
  nav {
    background-color: aquamarine;
    height: 100vh;
  }
  ul {
    padding: 20px 0;
    display: grid;
    grid-auto-flow: row;
    gap: 2em;
  }
  li {
    color: #242424;
    font-size: 2em;
    text-align: center;
  }
</style>
