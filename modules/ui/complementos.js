export function removerTexto(elementos) {
    elementos.forEach((elemento) => {
      elemento.textContent = '';
      elemento.removeAttribute('poke-id');
    });
}

export function desmarcarPaginaActiva() {
    const paginas=document.querySelectorAll(".page-item");
    paginas.forEach((pagina) => {
      pagina.classList.remove('active');
    });
}


export function setearActive(pagina) {
    const seleccion=document.querySelector(`[id='${pagina}']`)
    seleccion.classList.add('active');

}
/*
document.query


console.log(document.getAttribute("offset","0"))*/
