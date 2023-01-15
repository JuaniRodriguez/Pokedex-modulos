class Pokemon {

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

export function propiedadesPoke(infoPoke) {

    const pokemon= new Pokemon (
        infoPoke.name,
        infoPoke.height,
        infoPoke.weight,
        infoPoke.types.map((el)=> {
            return `${el.type.name}`
        }),
        infoPoke.sprites.other.dream_world.front_default,
        infoPoke.sprites.front_default,
    )
    return pokemon
}