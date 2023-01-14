import { removerTexto } from "./complementos.js";
import { propiedadesPoke } from "../listados/listadoPokes.js";

/*
export function completarCuadros(pokeData) {
    const $cuadros = document.querySelectorAll('.col');
    removerTexto($cuadros);
    pokeData.forEach((el, i) => {
      $cuadros[i].textContent = `${pokeData[i].name}`;
      $cuadros[i].setAttribute('link', `${pokeData[i].url}`);
    });
}*/


export function asignarPropiedadesPokes(dataPoke) {

  const poke=propiedadesPoke(dataPoke);

  const $nombre = document.querySelector('.card-title');
  const $altura = document.querySelector('.altura');
  const $peso = document.querySelector('.peso');
  const $tipo = document.querySelector('.tipo');
  const $imagen = document.querySelector('.card img');

  if (poke.primerImagen !== null) {
    $imagen.removeAttribute('style');
    $imagen.setAttribute('src', `${poke.primerImagen}`);
  } else if (poke.segundaImagen !== null) {
    $imagen.removeAttribute('style');
    $imagen.setAttribute('src', `${poke.segundaImagen}`);
  } else {
    $imagen.setAttribute('src', '/poke-default.png');
    $imagen.setAttribute('style', 'opacity:0.5');
  }

  $nombre.textContent = `${(poke.nombre)}`;
  $altura.textContent = `${`${poke.altura}mm`}`;
  $peso.textContent = `${`${poke.peso / 10}kg`}`;
  $tipo.textContent = `${poke.tipos}`;
}
