let btnMostrar = document.getElementById("btnMostrar");
let encabezado1 = document.getElementById("encabezado1");
let encabezado2 = document.getElementById("encabezado2");

let lista = document.getElementsByTagName("ul");
let elementos = document.getElementsByClassName("list-group-item");
let otroElemento = document.querySelector("ul>li");
let otrosElementos = document.querySelectorAll("ul>li");

console.log(otrosElementos.length);
console.log("otro elemento", otroElemento);
console.log(lista.length);
console.log(lista.item(1));
console.log(elementos.item(2));
console.log(elementos.length);

encabezado1.innerText = "Ejercicio DOM"
encabezado1.innerHTML = "<em>Ejercicio</em> DOM";
encabezado2.innerText = "DOM Exercise";

btnMostrar.addEventListener("click", function(event){
  event.preventDefault();
  let element = document.createElement("li");
  element.innerText="Another item";
  element.classList.add("list-group-item");
  
  let element2 = element.cloneNode(true);
  lista.item(0).before(element);
  lista.item(0).prepend(element2);
  lista.item(0).append(element);
  lista.item(0).after(element2);
});