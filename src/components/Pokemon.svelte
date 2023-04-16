<script>
  import { CustomFetch } from "../scripts/API";
  import { pad } from "../scripts/functions";

  export let url = "";
</script>

{#await CustomFetch(url) then { name, id, varieties }}
  <div>
    {#await CustomFetch(varieties[0].pokemon.url) then { sprites }}
      <img src={sprites.front_default} alt={name} />
    {/await}
    <h2>{pad(id, 3)} - {name}</h2>
  </div>
{:catch error}
  <div>
    <h2>ERROR</h2>
    <h2>Something was wrong</h2>
  </div>
{/await}

<style>
  div {
    display: grid;
    place-items: center;
    border: 5px solid white;
    border-radius: 25px;
    padding: 5px;
    width: 200px;
    height: 250px;
  }
  div img {
    width: 100%;
  }
  div h2 {
    text-transform: capitalize;
    font-size: 1.3em;
  }
</style>
