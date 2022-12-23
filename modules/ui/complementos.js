//export function removerTexto(elementos) {
//    elementos.forEach((elemento) => {
//      elemento.textContent = '';
//      elemento.removeAttribute('link');
//    });
//}

export function desmarcarPaginaActiva(elementos) {
    elementos.forEach((elemento) => {
      elemento.classList.remove('active');
    });
}


