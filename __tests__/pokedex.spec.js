import { desmarcarPaginaActiva } from "../modules/ui/complementos";
import crearPaginador from "../modules/ui/paginador";
import pokedexFixture from "../modules/ui/__tests__/Fixture/pokedex.fixture";
import { pokedex } from "../pokedex.js";

beforeEach(() => {
    global.fetch = jest.fn();
  });

test("testea comienzo de pokedex",()=> {
    document.body.innerHTML = pokedexFixture;


    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r([]);
      });
      resolve({ json: () => jsonPromise });
    }));

    pokedex()
        .then(()=> {
            expect(global.fetch).toHaveBeenCalledTimes(1)
        })

})



/*
npm run test -t pokedex.spec.js
*/