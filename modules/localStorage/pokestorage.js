export function guardarListaPokesEnLocalStorage(offset,pokesData) {
    localStorage.setItem(offset,JSON.stringify(pokesData))
}

export function obtenerListaPokesDeLocalStorage(offset) {
    const pokemones=localStorage.getItem(`${offset}`);
    if(pokemones===null) {
        throw new Error("se necesita un valor para buscar el listado de pokemones")
    }
    return JSON.parse(pokemones)
}


export function guardarPokeEnLocalStorage(id,pokeData) {
    localStorage.setItem(id,JSON.stringify(pokeData))
}

export function obtenerPokeDeLocalStorage(id) {
    const pokemon=localStorage.getItem(`${id}`);
    if(pokemon===null) {
        throw new Error("no se encontro el poke")
    }
    return JSON.parse(pokemon)
}

//ver lo de null
//agregar removerTexto
