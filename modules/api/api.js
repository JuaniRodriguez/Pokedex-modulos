
/*export default async function fetchPokes(pagina) {
  const response = await fetch(`${pagina}`);
  //const resultado = await response.json();
  //console.log(resultado)
  return response.json();
}*/

export default async function fetchPokes(offset) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`);
  //const resultado = await response.json();
  //console.log(resultado)
  return response.json();
}

//const linkBase='https://pokeapi.co/api/v2/pokemon/';
//
//export async function fetchPoke(offset)

//let probando=await fetchPokes("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20");
//console.log(probando.results)

//fetchPokes("https://pokeapi.co/api/v2/pokemon/1/")

//export async function mostrarPokes(linkPokes)  {
//    let infoPokes = await llamarListaPokes(linkPokes);
//    return infoPokes;
//};
//
//
//export async function llamarPropiedadPoke(url) {
//  const response = await fetch(`${url}`);
//  return response.json()
//}

//yo aprieto una pagina y eso busca el link que esta en los atributos de la pagina, ese link se pasa a mostrarPokes, la cual llama a llamarListaPokes(link), y eso guardarlo dentro de local storage con la key link.

/*
Por ahora:
- cree la funcion guardarPokemon en localStorage
- la llame en en api dentro de llamarListaPokes, porque si nunca estuvo guardada(tengo que chequearlo ahi) la guardo.
*/

//let cadena="https://pokeapi.co/api/v2/pokemon/152/";
//let cadena2=cadena.slice(34).slice(0,-1)
//console.log(cadena2)
