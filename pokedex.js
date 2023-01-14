const $cuadros = document.querySelectorAll('.col');
import crearPaginador from "./modules/ui/paginador.js";
import {desmarcarPaginaActiva} from "./modules/ui/complementos.js";
//import {mostrarPokes,llamarPropiedadPoke}  from "./modules/api/api.js";
import llamarListaPokes from "./modules/api/api.js";
import { llamarListadoPokes,llamarPropiedadesPoke } from "./modules/servicios/servicios.js";
import { listarPokes } from "./modules/listados/listadoPokes.js";
import {guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage} from "./modules/localStorage/pokestorage.js";
import { asignarPropiedadesPokes } from "./modules/ui/paginador.js";
import { guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "./modules/localStorage/pokestorage.js";

function pokedex() {

  crearPaginador();

  document.querySelectorAll(".page-item").forEach((elemento) => {
    elemento.onclick = async function clickPaginado() {
      desmarcarPaginaActiva(document.querySelectorAll(".page-item"));
      elemento.classList.add('active');
      let prueba= await llamarListadoPokes(elemento.getAttribute('link'));
      //listarPokes(llamarListadoPokes(elemento.getAttribute('link')),document.querySelectorAll(".col"));
      listarPokes(prueba,document.querySelectorAll(".col"));
   
      
    };
  });

  $cuadros.forEach((cuadro) => {
    cuadro.onclick = async function clickCuadro() {
    let  link = cuadro.getAttribute('link');
      if (link !== null) {
    
        let pruebados=await llamarPropiedadesPoke(link);
        asignarPropiedadesPokes(pruebados);

      }

    };
  });

}

export default function iniciarPokedex() {
  
    return pokedex()
  //document.querySelectorAll(".page-item")[0].click();
  //document.querySelectorAll(".page-item")[0].classList.add('active');

}


