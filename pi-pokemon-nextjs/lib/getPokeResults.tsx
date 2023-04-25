export default async function getPokeResults(searchTerm: string) {
  //   const searchParams = new URLSearchParams({ name: searchTerm });

  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + searchTerm
  );

  return response.json();
}
