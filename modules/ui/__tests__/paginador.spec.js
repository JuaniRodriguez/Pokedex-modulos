/**
 * @jest-environment jsdom
 */

import pokedexFixture from '../../../__tests__/pokedex.fixture.js';
import crearPaginador from '../paginador.js';

test("testea creacion de paginador", ()=> {
    document.body.innerHTML=pokedexFixture;
    crearPaginador();
    expect(document.querySelectorAll(".page-item")).toHaveLength(58)
})