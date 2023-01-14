export function guardarListaPokesEnLocalStorage(link,pokesData) {
    localStorage.setItem(link,JSON.stringify(pokesData))

}

export function obtenerListaPokesDeLocalStorage(link) {
    const pokemones=localStorage.getItem(`${link}`);
    if(pokemones===null) {
        throw new Error("no se encontro el listado de pokemones")
    }

    return JSON.parse(pokemones)
}


export function guardarPokeEnLocalStorage(link,pokeData) {
    localStorage.setItem(link,JSON.stringify(pokeData))
}

export function obtenerPokeDeLocalStorage(link) {
    const pokemon=localStorage.getItem(`${link}`);
    if(pokemon===null) {
        throw new Error("no se encontro el poke")
    }

    return JSON.parse(pokemon)
}

