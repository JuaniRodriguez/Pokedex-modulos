export default function crearPaginador() {
    
    const $paginador=document.querySelector("#paginador");
    for(let i=0;i<58;i++) {
        const offset=(i * 20);
        const li=document.createElement("li");
        li.setAttribute("class","page-item");
        li.setAttribute("offset",`${offset}`)
        const a=document.createElement("a");
        a.setAttribute("class","page-link");
        a.textContent=`${i+1}`;
        li.appendChild(a);
        $paginador.appendChild(li);
    }
}




