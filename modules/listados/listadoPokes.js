import Pokemon from "../entidades/pokemon.js";

export function listarPokes(pokes,cuadros) {
    pokes.forEach((poke, i) => {
        const {name,url}=poke;
        const pokeId=poke.url.slice(34).slice(0,-1);
        cuadros[i].textContent = `${poke.name}`;
        cuadros[i].setAttribute("poke-id",`${pokeId}`)
    });
}

export function propiedadesPoke(infoPoke) {

    const pokemon= new Pokemon (
        infoPoke.name,
        infoPoke.height,
        infoPoke.weight,
        infoPoke.types.map((el)=> {
            return `"${el.type.name}"`
        }),
        infoPoke.sprites.other.dream_world.front_default,
        infoPoke.sprites.front_default,
    )
    return pokemon
}
