import { fetchPokes,fetchPoke } from "../../api/api.js";
import { guardarListaPokesEnLocalStorage,guardarPokeEnLocalStorage, obtenerListaPokesDeLocalStorage } from "../../localStorage/pokestorage.js";
import { llamarListadoPokes,llamarPropiedadesPoke,totalPokes } from "../servicios.js";
import offsetceroresults from "./fixtures/offsetceroresults.json"


//const mock=jest.fn();
//
//test("testea que se obtenga listado de Pokes desde localStorage",()=> {
//    guardarListaPokesEnLocalStorage(0,offsetceroresults);
//        llamarListadoPokes(0)
//            expect(mock).toHaveBeenCalledTimes(1)
//})

beforeEach(() => {
    global.fetch = jest.fn();
  });

test("testea que se busque poke en la api",()=> {

    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }));

    llamarPropiedadesPoke("58/")
      expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/58/");

})


test("testea que se busque el total de pokes",()=> {

    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }));

      totalPokes()
        expect(global.fetch).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0")


})




/*
npm run test -t servicios.spec.js
*/