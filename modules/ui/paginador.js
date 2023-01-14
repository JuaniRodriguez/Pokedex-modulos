import { propiedadesPoke } from "../listados/listadoPokes.js";

export default function crearPaginador() {
    
    const $paginador=document.querySelector("#paginador");
    for(let i=0;i<58;i++) {
        const offset=(i * 20);
        const li=document.createElement("li");
        li.setAttribute("class","page-item");
        li.setAttribute('link', `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);
        const a=document.createElement("a");
        a.setAttribute("class","page-link");
        a.textContent=`${i+1}`;
        li.appendChild(a);
        $paginador.appendChild(li);
    }

}

// esta la pongo aca porque la necesito en UI, pero tengo que definir que archivos tendre en ui.

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



