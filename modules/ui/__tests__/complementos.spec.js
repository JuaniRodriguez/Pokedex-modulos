/**
 * @jest-environment jsdom
 */

import {removerTexto,desmarcarPaginaActiva} from '../complementos.js';
import pokedexFixture from './Fixture/pokedex.fixture.js';
import crearPaginador from '../paginador.js';

test("testea que se eliminen textos y link",()=> {
    document.body.innerHTML=`
        <div>
            <div class="col" link>Texto</div>
            <div class="col" link>Texto2</div>
        </div>
    `;
    removerTexto(document.querySelectorAll(".col"));
        expect(document.querySelectorAll(".col")[0].textContent).toBe('');
        expect(document.querySelectorAll(".col")[0].getAttribute("link")).toBeNull();
        expect(document.querySelectorAll(".col")[1].textContent).toBe('');
        expect(document.querySelectorAll(".col")[1].getAttribute("link")).toBeNull();

})

test("que se desmarquen paginas",()=> {
    document.body.innerHTML=pokedexFixture;
    crearPaginador();
    const paginas=document.querySelectorAll(".page-item");
    paginas[0].click();
    desmarcarPaginaActiva(paginas);
    expect(paginas[0].className).toEqual("page-item");

})