export default function guardarPokemon(link,pokeData) {
    localStorage.setItem(link,JSON.stringify(pokeData))


}