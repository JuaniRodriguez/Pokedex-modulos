//import pokedexFixture from "../modules/ui/__tests__/Fixture/pokedex.fixture";
//import { pokedex } from "../pokedex.js";

//test("testea comienzo de pokedex",()=> {
//    document.body.innerHTML = pokedexFixture;
//
//    global.fetch = jest.fn()
//    .mockImplementation(() => new Promise((resolve) => {
//      const jsonPromise = new Promise((r) => {
//        r([]);
//      });
//      resolve({ json: () => jsonPromise });
//    }));
//
//    pokedex()
//        .then(()=> {
//            expect(document.querySelectorAll(".page-item")).toHaveLength(64)
//        })
//
//})

/*
npm run test -t pokedex.spec.js
*/