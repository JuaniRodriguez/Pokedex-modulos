/**
 * @jest-environment jsdom
 */

import {removerTexto,desmarcarPaginaActiva,setearActive} from '../complementos.js';
import pokedexFixture from './Fixture/pokedex.fixture.js';
import crearPaginador from '../paginador.js';

test("testea que se eliminen textos y id",()=> {
    document.body.innerHTML=`
        <div>
            <div class="col" poke-id>Texto</div>
            <div class="col" poke-id>Texto2</div>
        </div>
    `;
    removerTexto(document.querySelectorAll(".col"));
        expect(document.querySelectorAll(".col")[0].textContent).toBe('');
        expect(document.querySelectorAll(".col")[0].getAttribute("poke-id")).toBeNull();
        expect(document.querySelectorAll(".col")[1].textContent).toBe('');
        expect(document.querySelectorAll(".col")[1].getAttribute("poke-id")).toBeNull();

})

test("testea que se agregue clase active",()=> {
    const mockCallback=jest.fn();
    document.body.innerHTML=pokedexFixture;
    crearPaginador(1279,mockCallback);
    const paginas=document.querySelectorAll(".page-item");
    setearActive(0)
        expect(paginas[0].className).toEqual("page-item active")

})

test("que se desmarquen paginas",()=> {
    const mock=jest.fn();
    document.body.innerHTML=pokedexFixture;
    crearPaginador(1279,mock);
    const paginas=document.querySelectorAll(".page-item");
    setearActive(0);
    desmarcarPaginaActiva()
        expect(paginas[0].className).toEqual("page-item");
    

})

