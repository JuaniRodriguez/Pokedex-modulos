import { completarCuadros,asignarPropiedadesPokes } from "../ui/pokeprops.js";

async function llamarListaPokes(pagina) {
  const response = await fetch(`${pagina}`);
  const resultado = await response.json();
  return resultado.results;
}

export async function mostrarPokes(linkPokes)  {
    let infoPokes = await llamarListaPokes(linkPokes);
    return infoPokes;
};


export async function llamarPropiedadPoke(url) {
  const response = await fetch(`${url}`);
  const resultado = await response.json();
  console.log(resultado)
  return resultado;
}

//yo aprieto una pagina y eso busca el link que esta en los atributos de la pagina, ese link se pasa a mostrarPokes, la cual llama a llamarListaPokes(link), y eso guardarlo dentro de local storage con la key link.

/*
Por ahora:
- cree la funcion guardarPokemon en localStorage
- la llame en en api dentro de llamarListaPokes, porque si nunca estuvo guardada(tengo que chequearlo ahi) la guardo.
*/