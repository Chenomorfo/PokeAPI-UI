<script>
  import Pokemon from "../../components/Pokemon.svelte";
  import { CustomFetch } from "../../scripts/API";
</script>

<h1>National Pokemons</h1>
<section>
  {#await CustomFetch("https://pokeapi.co/api/v2/pokedex/1") then { pokemon_entries }}
    {#each pokemon_entries as { pokemon_species }}
      <Pokemon url={pokemon_species.url} />
    {/each}
  {/await}
</section>

<style>
  h1 {
    padding: 15px 0;
    font-size: 6em;
    text-align: center;
    text-transform: uppercase;
  }
  section {
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    width: 75%;
  }
</style>
