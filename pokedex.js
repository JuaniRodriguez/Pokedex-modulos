const $cuadros = document.querySelectorAll('.col');
import crearPaginador from "./modules/ui/paginador.js";
import {desmarcarPaginaActiva} from "./modules/ui/complementos.js";
import {mostrarPokes,llamarPropiedadPoke}  from "./modules/api/api.js";
import { completarCuadros } from "./modules/ui/pokeprops.js";
import {guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage} from "./modules/localStorage/pokestorage.js";
import { asignarPropiedadesPokes } from "./modules/ui/pokeprops.js";
import { guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "./modules/localStorage/pokestorage.js";

function pokedex() {

  crearPaginador();

  document.querySelectorAll(".page-item").forEach((elemento) => {
    elemento.onclick = async function clickPaginado() {
      desmarcarPaginaActiva(document.querySelectorAll(".page-item"));
      elemento.classList.add('active');
      let pokemones;
      try {
        pokemones=obtenerListaPokesDeLocalStorage(elemento.getAttribute('link'))
        completarCuadros(pokemones);
      } catch(e) {
      let infoPokes= await mostrarPokes(elemento.getAttribute('link'));
      completarCuadros(infoPokes);
      guardarListaPokesEnLocalStorage(elemento.getAttribute('link'),infoPokes);
      }
      
    };
  });

  $cuadros.forEach((cuadro) => {
    cuadro.onclick = async function clickCuadro() {
    let  link = cuadro.getAttribute('link');
      if (link !== null) {
        let pokemon;
        try {
          pokemon=obtenerPokeDeLocalStorage(link);
          asignarPropiedadesPokes(pokemon)
        } catch(e) {
          let infoPoke=await llamarPropiedadPoke(link);
          asignarPropiedadesPokes(infoPoke);
          guardarPokeEnLocalStorage(link,infoPoke);
        }

      }
    };
  });

}

export default function iniciarPokedex() {

  pokedex();
  document.querySelectorAll(".page-item")[0].click();
  document.querySelectorAll(".page-item")[0].classList.add('active');

}


