const $cuadros = document.querySelectorAll('.col');
import crearPaginador from "./modules/ui/paginador.js";
import {desmarcarPaginaActiva,setearActive} from "./modules/ui/complementos.js";
//import {mostrarPokes,llamarPropiedadPoke}  from "./modules/api/api.js";
//import llamarListaPokes from "./modules/api/api.js";
import { llamarListadoPokes,llamarPropiedadesPoke } from "./modules/servicios/servicios.js";
import { listarPokes } from "./modules/ui/pokeprops.js";
import {guardarListaPokesEnLocalStorage,obtenerListaPokesDeLocalStorage} from "./modules/localStorage/pokestorage.js";
import { asignarPropiedadesPokes } from "./modules/ui/pokeprops.js";
import { guardarPokeEnLocalStorage,obtenerPokeDeLocalStorage } from "./modules/localStorage/pokestorage.js";



function iniciarConPaginador() {
  crearPaginador(async(offset)=> {
    desmarcarPaginaActiva();
    setearActive(offset);
    const lista=await llamarListadoPokes(offset);
    console.log(lista)
    listarPokes(lista,async(id) => {
      if(id !== null) {
        const props=await llamarPropiedadesPoke(id);
        asignarPropiedadesPokes(props)
      }
    })
  })
}
/*
function pokedex() {
  //document.querySelectorAll(".page-item").forEach((elemento) => {
  //  elemento.onclick = async function clickPaginado() {
  //    desmarcarPaginaActiva(document.querySelectorAll(".page-item"));
  //    elemento.classList.add('active');
  //    let lista= await llamarListadoPokes(elemento.getAttribute('id'));
  //    console.log(elemento.getAttribute("id"))
  //    listarPokes(lista,document.querySelectorAll(".col"));
  //    
  //    //listarPokes(llamarListadoPokes(elemento.getAttribute('link')),document.     querySelectorAll(".col"));
  //    
  //    
  //  };
  //});

  $cuadros.forEach((cuadro) => {
    cuadro.onclick = async function clickCuadro() {
    let id = cuadro.getAttribute('poke-id');
      if (id !== null) {
        let props=await llamarPropiedadesPoke(id);
        asignarPropiedadesPokes(props);
      }
    };
  });
}*/

/*
export default function iniciarPokedex() {
  
    return pokedex()
  //document.querySelectorAll(".page-item")[0].click();
  //document.querySelectorAll(".page-item")[0].classList.add('active');

}*/
export {iniciarConPaginador}


//a mostrarListado le pasa como segundo parametro una funcion con lo que quiero que se ejecute cuando pasa algo. En este caso, lo usa para mostrar un pokemon cuando se hace click. Pero mostrarListado es importada, entonces voy a donde se arma la misma, y en segundo parametro paso una callback vacia que va hacia el click. Basicamente, yo lo que hago siempre es decidir en otra pagina que hace la funcion que importo aca en pokedex. Pero aca no, aca defino en pokedex que quiero que haga tal funcion. Entonces donde se arma la funcion, pongo que al click se ejecute el callback, y el callback lo armo aca. 