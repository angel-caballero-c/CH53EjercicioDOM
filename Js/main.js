let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");
let listas = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");

let otroElemento = document.querySelector("ul>li");
let otrosElemento = document.querySelectorAll("ul>li");

let btnMostrar = document.getElementById("btnMostrar");

let txtRFC = document.getElementById("txtRFC");
let txtCurp = document.getElementById("txtCurp");
let txtTelefono = document.getElementById("txtTelefono");

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

    listas.item(1).insertAdjacentHTML("beforebegin",
        `<li class="list-group-item">beforebegin item</li>`);
    listas.item(1).insertAdjacentHTML("afterbegin",
        `<li class="list-group-item">afterbegin item</li>`);
    listas.item(1).insertAdjacentHTML("beforeend",
        `<li class="list-group-item">beforeend item</li>`);
    listas.item(1).insertAdjacentHTML("afterend",
        `<li class="list-group-item">afterend item</li>`);
});


function txtToUpper(event) {
    event.preventDefault();
    event.target.value = event.target.value.trim().toUpperCase();
}

txtRFC.addEventListener("blur", txtToUpper);
txtCurp.addEventListener("blur", txtToUpper);

txtRFC.addEventListener("blur", function(event){
    event.preventDefault();
    txtTelefono.value = txtTelefono.value.trim().slice(0,10);
});
