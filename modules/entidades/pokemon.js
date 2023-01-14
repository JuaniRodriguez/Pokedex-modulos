/*class Pokemon {
    constructor(objeto) {
      this.nombre=objeto.species.name;
      this.altura=objeto.height;
      this.peso=objeto.weight;
      this.types=objeto.types;
      this.firstImage=objeto.sprites.other.dream_world.front_default;
      this.secondImage=objeto.sprites.front_default;
    }
}*/

export default class Pokemon {

    constructor (
        nombre,
        altura,
        peso,
        tipos=[],
        primerImagen,
        segundaImagen,
    )
    {
    this.nombre=nombre,
    this.altura=altura,
    this.peso=peso,
    this.tipos=tipos,
    this.primerImagen=primerImagen,
    this.segundaImagen=segundaImagen
    }

}

