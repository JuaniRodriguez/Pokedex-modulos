/**
 * @jest-environment jsdom
 */

import iniciarPokedex from "../pokedex.js"
import '../index.js';

jest.mock("../pokedex.js");

test("testea que se llame a la funcion",()=> {
  expect(iniciarPokedex)
    .toHaveBeenCalledTimes(1)

})

