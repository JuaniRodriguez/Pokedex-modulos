import { removerTexto } from "../ui/complementos.js";
import { completarCuadros,asignarPropiedadesPokes } from "../ui/pokeprops.js";

async function llamarListaPokes(pagina) {
  const response = await fetch(`${pagina}`);
  const resultado = await response.json();
  return resultado.results;
}

export async function mostrarPokes(linkPokes)  {
    const $cuadros = document.querySelectorAll('.col');
    removerTexto($cuadros);
    const infoPokes = await llamarListaPokes(linkPokes);
     return completarCuadros(infoPokes);
};


export async function llamarPropiedadPoke(url) {
  const response = await fetch(`${url}`);
  const resultado = await response.json();
  return asignarPropiedadesPokes(resultado);
}