export default async function getPokeResults(searchTerm: string) {
  //   const searchParams = new URLSearchParams({ name: searchTerm });

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + searchTerm
  );

  const res = await response.json();

  const poke: Pokemon = {
    height: res.height,
    id: res.id,
    name: res.name,
    sprites: res.other["official-artwork"].front_default,
    stats: {
      hp: res.stats[0].base_stat,
      attack: res.stats[1].base_stat,
      defense: res.stats[2].base_stat,
      special_attack: res.stats[3].base_stat,
      special_defense: res.stats[4].base_stat,
      speed: res.stats[5].base_stat,
    },
    types: [res.types[0].type.name, res.types[1].type.name || ""],
    weight: res.weight,
  };

  return poke;
}
