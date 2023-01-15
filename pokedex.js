import crearPaginador from "./modules/ui/paginador.js";
import {desmarcarPaginaActiva,setearActive} from "./modules/ui/complementos.js";
import { llamarListadoPokes,llamarPropiedadesPoke,totalPokes } from "./modules/servicios/servicios.js";
import { listarPokes } from "./modules/ui/pokeprops.js";
import { asignarPropiedadesPokes } from "./modules/ui/pokeprops.js";

async function pokedex() {
  
  crearPaginador(await totalPokes(),async(offset)=> {
    desmarcarPaginaActiva();
    setearActive(offset);
    const lista=await llamarListadoPokes(offset);
    listarPokes(lista,async(id) => {
      if(id !== null) {
        const props=await llamarPropiedadesPoke(id);
        asignarPropiedadesPokes(props)
      }
    })
  })
}

export {pokedex}


