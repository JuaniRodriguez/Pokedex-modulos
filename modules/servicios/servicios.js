//de pokedex.js, deberia sacar el try catch de local storage, y hacerlo aca.
import fetchPokes from "../api/api.js";
import { guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage,guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "../localStorage/pokestorage.js";

export async function llamarListadoPokes(link) {
    try {
        console.log("local");
        return obtenerListaPokesDeLocalStorage(link);
    } catch(e) {
        const fetchPokemones= await fetchPokes(link);
        guardarListaPokesEnLocalStorage(link,fetchPokemones.results);
        return fetchPokemones.results;
    }
}

export async function llamarPropiedadesPoke(link) {
    if(link===null) {
        throw new Error("se requiere un link para cargar")
    }
    try {
        return obtenerPokeDeLocalStorage(link);
    } catch(e) {
        const fetchProps=await fetchPokes(link);
        guardarPokeEnLocalStorage(link,fetchProps);
        return fetchProps;
    }
    
}

//esta pasando que al hacer un solo fetch, yo devuelvo resultado.results, pero eso me sirve para el listado de pokes, para cada poke en particular al hacer el fetch no uso .results