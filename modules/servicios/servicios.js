//de pokedex.js, deberia sacar el try catch de local storage, y hacerlo aca.
import {fetchPokes,fetchPoke} from "../api/api.js";
import { guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage,guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "../localStorage/pokestorage.js";

export async function llamarListadoPokes(offset) {
    try {
        console.log("local");
        return obtenerListaPokesDeLocalStorage(offset);
    } catch(e) {
        const fetchPokemones= await fetchPokes(offset);
        guardarListaPokesEnLocalStorage(offset,fetchPokemones.results);
        return fetchPokemones.results;
    }
}

export async function llamarPropiedadesPoke(id) {
    if(id===null) {
        throw new Error("se requiere un id para cargar")
    }
    try {
        return obtenerPokeDeLocalStorage(id);
    } catch(e) {
        const fetchProps=await fetchPoke(id);
        guardarPokeEnLocalStorage(id,fetchProps);
        return fetchProps;
    }
    
}

//esta pasando que al hacer un solo fetch, yo devuelvo resultado.results, pero eso me sirve para el listado de pokes, para cada poke en particular al hacer el fetch no uso .results