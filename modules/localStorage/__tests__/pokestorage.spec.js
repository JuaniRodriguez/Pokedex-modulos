import offsetceroresults from './fixtures/offsetceroresults.json';
import bulbasaur from './fixtures/bulbasaur.json';
import { guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage,guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from '../pokestorage';
import { TestEnvironment } from 'jest-environment-jsdom';

test("testea que se agregue data en local storage",()=> {
    guardarListaPokesEnLocalStorage(0,offsetceroresults);
        expect(obtenerListaPokesDeLocalStorage(0)).toEqual(offsetceroresults)

})

test("testea que se guarde poke en local storage",()=> {
    guardarPokeEnLocalStorage("1/",bulbasaur);
        expect(obtenerPokeDeLocalStorage("1/")).toEqual(bulbasaur);

})

test("testea que al buscar lista en local  devuelva error si es null",()=> {
    expect(obtenerListaPokesDeLocalStorage(null))
        .rejects
        .toEqual(new Error("se necesita un valor para buscar el listado de pokemones"))

})




/*
npm run test -t pokestorage.spec.js
*/