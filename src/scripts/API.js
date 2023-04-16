//@ts-nocheck
export const PokemonAPI = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
export const EvolvesAPI = (id) =>
  `https://pokeapi.co/api/v2/evolution-chain/${id}`;

export const FullPokedexAPI = () => `https://pokeapi.co/api/v2/pokedex/`;
export const PokedexAPI = (id) => `https://pokeapi.co/api/v2/pokedex/${id}`;

export const ItemAPI = (id) => `https://pokeapi.co/api/v2/item/${id}`;

export const CustomFetch = async (url = "") => {
  let res = await fetch(url);

  if (res.status === 200) {
    let data = await res.json();
    return data;
  }
};
