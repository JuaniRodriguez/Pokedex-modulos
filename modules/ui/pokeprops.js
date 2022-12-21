export function completarCuadros(pokeData) {
    const $cuadros = document.querySelectorAll('.col');
    pokeData.forEach((el, i) => {
      $cuadros[i].textContent = `${pokeData[i].name}`;
      $cuadros[i].setAttribute('link', `${pokeData[i].url}`);
    });
}


export function asignarPropiedadesPokes(objeto) {
    const tipoPoke = [];
    const $nombre = document.querySelector('.card-title');
    const $altura = document.querySelector('.altura');
    const $peso = document.querySelector('.peso');
    const $tipo = document.querySelector('.tipo');
    const $imagen = document.querySelector('.card img');
  
    if (objeto.sprites.other.dream_world.front_default !== null) {
      $imagen.removeAttribute('style');
      $imagen.setAttribute('src', `${objeto.sprites.other.dream_world.front_default}`);
    } else if (objeto.sprites.front_default !== null) {
      $imagen.removeAttribute('style');
      $imagen.setAttribute('src', `${objeto.sprites.front_default}`);
    } else {
      $imagen.setAttribute('src', './poke-default.png');
      $imagen.setAttribute('style', 'opacity:0.5');
    }
  
    $nombre.textContent = `${(objeto.species.name)}`;
    $altura.textContent = `${`${objeto.height}mm`}`;
    $peso.textContent = `${`${objeto.weight / 10}kg`}`;
    objeto.types.forEach((el) => {
      tipoPoke.push(el.type.name);
    });
    $tipo.textContent = `${tipoPoke}`;
  }