import { removerTexto } from "./complementos.js";

export function completarCuadros(pokeData) {
    const $cuadros = document.querySelectorAll('.col');
    removerTexto($cuadros);
    pokeData.forEach((el, i) => {
      $cuadros[i].textContent = `${pokeData[i].name}`;
      $cuadros[i].setAttribute('link', `${pokeData[i].url}`);
    });
}

class Pokemon {

  constructor(objeto) {
    this.nombre=objeto.species.name;
    this.altura=objeto.height;
    this.peso=objeto.weight;
    this.types=objeto.types;
    this.firstImage=objeto.sprites.other.dream_world.front_default;
    this.secondImage=objeto.sprites.front_default;
  }
}

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

