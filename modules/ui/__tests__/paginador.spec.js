/**
 * @jest-environment jsdom
 */

import pokedexFixture from './Fixture/pokedex.fixture.js';
import crearPaginador from '../paginador.js';

const mockCallback=jest.fn();

test("testea creacion de paginador", ()=> {
    document.body.innerHTML=pokedexFixture;
    crearPaginador(1279,mockCallback)
        expect(document.querySelectorAll(".page-item")).toHaveLength(64)
        expect(document.querySelectorAll(".page-link")).toHaveLength(64)
})