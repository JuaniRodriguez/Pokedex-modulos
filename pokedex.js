const $cuadros = document.querySelectorAll('.col');
import crearPaginador from "./modules/ui/paginador.js";
import {desmarcarPaginaActiva} from "./modules/ui/complementos.js";
import {mostrarPokes,llamarPropiedadPoke}  from "./modules/api/api.js";

function pokedex() {

  crearPaginador();
  mostrarPokes('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0');
  document.querySelectorAll(".page-item")[0].classList.add('active');

  document.querySelectorAll(".page-item").forEach((elemento) => {
    elemento.onclick = function clickPaginado() {
      desmarcarPaginaActiva(document.querySelectorAll(".page-item"));
      elemento.classList.add('active');
      mostrarPokes(elemento.getAttribute('link'));
    };
  });

  $cuadros.forEach((cuadro) => {
    cuadro.onclick = function clickCuadro() {
    let  link = cuadro.getAttribute('link');
      if (link !== null) {
        llamarPropiedadPoke(link);
      }
    };
  });

}

export default function iniciarPokedex() {

  pokedex();

}