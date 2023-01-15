import {fetchPokes,fetchPoke} from "../api/api.js";
import { guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage,guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "../localStorage/pokestorage.js";

export async function llamarListadoPokes(offset) {
    try {
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

export async function totalPokes() {
    const totalPokes= await fetchPokes(0);
    return totalPokes.count
}
