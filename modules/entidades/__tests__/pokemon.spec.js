import { propiedadesPoke } from "../pokemon.js";
import bulbasaur from "./fixtures/bulbasaur.json"

test("testea que se asignen propiedades",()=> {
        const propiedades=propiedadesPoke(bulbasaur);
            expect(propiedades.nombre).toBe("bulbasaur");
            expect(propiedades.altura).toBe(7);
            expect(propiedades.peso).toBe(69);
            expect(propiedades.tipos).toHaveLength(2);
            expect(propiedades.primerImagen).not.toBe(null);
            expect(propiedades.segundaImagen).not.toBe(null);

})