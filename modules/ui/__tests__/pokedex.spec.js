/**
 * @jest-environment jsdom
 */

import iniciarPokedex from "../../../pokedex";
import pokedexFixture from './Fixture/pokedex.fixture.js';



test("testea que se ejecute la pokedex",()=> {
    document.body.innerHTML=pokedexFixture;
    iniciarPokedex();
    expect(document.querySelectorAll(".page-item")[0].classList).toContain("active")
})