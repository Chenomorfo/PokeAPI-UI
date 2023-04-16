<script>
  import { CustomFetch } from "../scripts/API";

  const randomNumber = () => {
    return Math.floor(Math.random() * 152);
  };

  let pokemon = randomNumber();
</script>

<section>
  <div style="font-size: 1.5em;padding:20px">
    Buscar pokemon:
    <input style="font-size: 1.5rem;" bind:value={pokemon} type="text" />
  </div>
  <div class="Pokemon">
    <div class="Sumary">
      {#await CustomFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) then { name, sprites, types }}
        <img style="width: 250px;" src={sprites.front_default} alt={name} />
        <h1 style="font-size: 3.5rem; text-transform:capitalize">
          {name}
        </h1>
        <ul>
          {#each types as { type }}
            <li>{type.name}</li>
          {/each}
        </ul>
      {/await}
    </div>
    <div class="Expanded">
      {#await CustomFetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`) then { flavor_text_entries, habitat }}
        <h3 style="padding:10px 0; text-transform:capitalize">
          Habitat: {habitat.name}
        </h3>
        <h2 style="padding:10px 0;">Description:</h2>
        <p>
          {flavor_text_entries[0].flavor_text}
        </p>
        <br />
        {#await CustomFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) then { height, weight }}
          <h3>Height: {height} | Weight: {weight}</h3>
        {/await}
      {/await}
    </div>
  </div>
</section>

<style>
  section {
    width: 50%;
    margin: auto;
  }
  .Pokemon {
    border: 3px solid white;
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
  .Sumary {
    border-right: 1px solid white;
    padding: 0 15px;
  }
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
    justify-content: right;
  }
  li {
    border: 1px solid white;
    padding: 4px 15px;
    font-size: 1.2em;
    border-radius: 20px;
  }
  p {
    font-size: 1.5rem;
  }
</style>
