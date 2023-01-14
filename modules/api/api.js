const url="https://pokeapi.co/api/v2/pokemon/"

export async function fetchPokes(offset) {
  const response = await fetch(`${url}?limit=20&offset=${offset}`);
  return response.json();
}

export async function fetchPoke(id) {
  const response = await fetch(`${url}${id}`);
  return response.json();

}


