import { fetchPokes,fetchPoke } from "../api";

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

  fetchPokes(20);
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
    

      fetchPoke(1)
        expect(global.fetch)
            .toHaveBeenCalledTimes(1)

})
