<script>
  import { CustomFetch } from "../../scripts/API";
</script>

{#await CustomFetch("https://pokeapi.co/api/v2/item-category?offset=0&limit=100") then { results }}
  {#each results as { url }}
    {#await CustomFetch(url) then { name, items }}
      <h1>{name.replace("-", " ").replace("-", " ")}</h1>
      <div>
        {#each items as { url }}
          {#await CustomFetch(url)}
            <span>
              <h1>WAIT</h1>
              <h3>Loading</h3>
            </span>
          {:then { name, sprites }}
            <span>
              <img src={sprites.default} alt={name} />
              <h3>{name}</h3>
            </span>
          {/await}
        {/each}
      </div>
    {/await}
  {/each}
{/await}

<style>
  h1 {
    text-transform: capitalize;
  }
  div {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 25px;
  }
  span {
    border: 1px solid white;
    height: 75px;
    width: 50px;
    display: grid;
    place-items: center;
  }
  span {
    width: 100%;
  }
</style>
