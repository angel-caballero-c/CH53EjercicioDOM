let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");

let otrosElemento = document.querySelectorAll("ul>li");

let btnMostrar = document.getElementById("btnMostrar");

console.log(listas.length);
console.log(listas.item(1));

console.log(elementos.length);
console.log(elementos.item(2));

console.log("otroElemento", otroElemento);
console.log(otrosElemento.length);

function modifica() {
    encabezado1.innerText = "Ejercicio DOM";
    console.log(encabezado1.innerText);

    encabezado2.innerHTML = "DOM <em>Exercise</em>";
    console.log(encabezado2.innerText);
}

btnMostrar.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Botón btnMostrar presionado");
    let element = document.createElement("li");
    element.innerText = "Otro item";
    element.classList.add("list-group-item");

    // let element2 = element.cloneNode(true);
    // let element3 = element.cloneNode(true);
    // let element4 = element.cloneNode(true);

    // listas.item(0).before(element);
    // listas.item(0).prepend(element2);
    // listas.item(0).append(element3);
    // listas.item(0).after(element4);

    // let element5 = element.cloneNode(true);
    // let element6 = element.cloneNode(true);
    // listas.item(1).insertAdjacentElement("afterbegin", element5);
    // listas.item(1).insertAdjacentElement("beforeend", element6);

    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">beforebegin item</li>`);

    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">afterbegin item</li>`);

    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">beforeend item</li>`);

    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">afterend item</li>`);
});
