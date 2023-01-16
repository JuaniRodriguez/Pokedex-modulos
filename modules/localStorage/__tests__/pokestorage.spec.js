import offsetceroresults from './fixtures/offsetceroresults.json';
import bulbasaur from './fixtures/bulbasaur.json';
import { guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage,guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from '../pokestorage';
import { TestEnvironment } from 'jest-environment-jsdom';

test("testea que se agregue  y se llame data de local storage",()=> {
    guardarListaPokesEnLocalStorage(0,offsetceroresults);
        expect(obtenerListaPokesDeLocalStorage(0)).toEqual(offsetceroresults)

})

test("testea que se guarde y se llame poke de local storage",()=> {
    guardarPokeEnLocalStorage("1/",bulbasaur);
        expect(obtenerPokeDeLocalStorage("1/")).toEqual(bulbasaur);

})

//test("testea que al buscar lista en local  devuelva error si es null",()=> {
//    expect(obtenerListaPokesDeLocalStorage(null)).toThrowError("se necesita un valor para buscar el listado de pokemones")
//        //.rejects
//        //.toThrow()/*new Error("se necesita un valor para buscar el listado de pokemones"))*/
//
//})




/*
npm run test -t pokestorage.spec.js
*/