import Pokemon from "../entidades/pokemon.js";

//aca asigno los pokes a los cuadros
export function listarPokes(pokes,cuadros) {
    pokes.forEach((poke, i) => {
        const {name,url}=poke;
        cuadros[i].textContent = `${poke.name}`;
        cuadros[i].setAttribute('link', `${poke.url}`);
    });
}

export function propiedadesPoke(infoPoke) {

    const pokemon= new Pokemon (
        infoPoke.name,
        infoPoke.height,
        infoPoke.weight,
        infoPoke.types.map((el)=> {
            return `"${el.type.name}"`
        }),
        infoPoke.sprites.other.dream_world.front_default,
        infoPoke.sprites.front_default,
    )

    return pokemon
}
// usare la class Pokemon para completar la info del poke

/*
export function asignarPropiedadesPokes(objeto) {
    const poke=new Pokemon(objeto);

    const tipoPoke = [];
    const $nombre = document.querySelector('.card-title');
    const $altura = document.querySelector('.altura');
    const $peso = document.querySelector('.peso');
    const $tipo = document.querySelector('.tipo');
    const $imagen = document.querySelector('.card img');
  
    if (poke.firstImage !== null) {
      $imagen.removeAttribute('style');
      $imagen.setAttribute('src', `${poke.firstImage}`);
    } else if (poke.secondImage !== null) {
      $imagen.removeAttribute('style');
      $imagen.setAttribute('src', `${poke.secondImage}`);
    } else {
      $imagen.setAttribute('src', './poke-default.png');
      $imagen.setAttribute('style', 'opacity:0.5');
    }
  
    $nombre.textContent = `${(poke.nombre)}`;
    $altura.textContent = `${`${poke.altura}mm`}`;
    $peso.textContent = `${`${poke.peso / 10}kg`}`;
    poke.types.forEach((el) => {
      tipoPoke.push(el.type.name);
    });
    $tipo.textContent = `${tipoPoke}`;
  }
*/

