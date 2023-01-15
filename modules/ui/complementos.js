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
    const paginaActiva=document.querySelector(`[id='${pagina}']`)
    paginaActiva.classList.add('active');

}

