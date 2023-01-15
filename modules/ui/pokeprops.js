import { removerTexto } from "./complementos.js";
import { propiedadesPoke } from "../entidades/pokemon.js";

export function listarPokes(pokes,cuadroSeleccionado=()=>{}) {
  const $cuadros=document.querySelectorAll(".col");
  removerTexto($cuadros);
  pokes.forEach((poke, i) => {
      const {name,url}=poke;
      //slice para no tener que trabajar con la url completa de cada poke.
      const pokeId=poke.url.slice(34);
      $cuadros[i].textContent = `${poke.name}`;
      $cuadros[i].setAttribute("poke-id",`${pokeId}`);
      $cuadros[i].onclick=()=>cuadroSeleccionado(pokeId)
  });
}

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
