/**
 * @jest-environment jsdom
 */

import {desmarcarPaginaActiva} from '../complementos.js';
import pokedexFixture from '../../../__tests__/pokedex.fixture.js';
import crearPaginador from '../paginador.js';


test("que se desmarquen paginas",()=> {
    document.body.innerHTML=pokedexFixture;
    crearPaginador();
    const paginas=document.querySelectorAll(".page-item");
    paginas[0].click();
    desmarcarPaginaActiva(paginas);
    expect(paginas[0].className).toEqual("page-item");

})