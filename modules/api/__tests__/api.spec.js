import { mostrarPokes,llamarPropiedadPoke } from "../api";

beforeEach(()=> {

    global.fetch=jest.fn();
})

test("testea que se cargue lista de pokes",()=> {
     global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
    const jsonPromise = new Promise((r) => {
      r([]);
    });
    resolve({ json: () => jsonPromise });
  }));

  mostrarPokes("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0");
    expect(global.fetch)
        .toHaveBeenCalledTimes(1)

})

test("testea que se carguen las propiedades del poke",()=> {
    global.fetch.mockImplementationOnce(() => new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      }));
    

      llamarPropiedadPoke("https://pokeapi.co/api/v2/pokemon/1/")
        expect(global.fetch)
            .toHaveBeenCalledTimes(1)

})
