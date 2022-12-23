/**
 * @jest-environment jsdom
 */
import pokedexFixture from "../../../__tests__/pokedex.fixture.js";
import { asignarPropiedadesPokes, completarCuadros } from "../pokeprops.js";
import bulbasaur from "./Fixture/bulbasaur.json"
import stunfisk from "./Fixture/stunfisk.json";
import kommo from "./Fixture/kommo.json";

test("testea que se completen cuadros",()=> {
    const poke= [
        {name:"bulbasaur",url:"link"},
        {name:"ivysaur",url:"link"},
        {name:"venusaur",url:"link"}
    ];

    document.body.innerHTML=pokedexFixture;
    completarCuadros(poke);
    expect(document.querySelectorAll(".col")[0].textContent).toBe("bulbasaur");
    expect(document.querySelectorAll(".col")[0].getAttribute("link")).toBe("link");

});

describe("testea que se rellene la carta de pokes",()=> {
    document.body.innerHTML=pokedexFixture;

    test("asignacion de propiedades al pokemon",()=> {
        asignarPropiedadesPokes(bulbasaur)
            expect(document.querySelector('.card-title').textContent).toBe("bulbasaur");
            expect(document.querySelector('.altura').textContent).toBe("7mm");
            expect(document.querySelector('.peso').textContent).toBe("6.9kg");
            expect(document.querySelector('.tipo').textContent).toBe("grass,poison");
            expect(document.querySelector('.card img').getAttribute("src")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg")
    
    })
    
    test("testea que a stunfisk le asigne la imagen correspondiente",()=> {
        asignarPropiedadesPokes(stunfisk)
        expect(document.querySelector('.card img').getAttribute("src")).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png")
    
    })
    
    test("testea que a kommo se le asigne imagen default",()=> {
        asignarPropiedadesPokes(kommo)
        expect(document.querySelector('.card img').getAttribute("src")).toBe("./poke-default.png")
    
    })
    
})