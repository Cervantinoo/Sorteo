//Script para cargar participantes y luego hacer un sorteo


let btn_sortear = document.querySelector(".sortear")

let resaltar_li = document.querySelectorAll("li")
var arr_participantes = []
var arr_participantes = new Array()


var input_cargar = document.querySelector("input")
var btn_cargar = document.querySelector(".cargar")
let i = 0

let borrar_li = document.getElementById("borrar")
let element_ul = document.querySelector("ul")

if (borrar_li) {
    element_ul.removeChild(borrar_li)
}

btn_cargar.addEventListener('click', cargar)

function cargar() {
    arr_participantes[i] = input_cargar.value
    i++
    var node = document.createElement('li');

    for (let j = 0; j <= arr_participantes.length; j++) {
        resaltar_li[j].textContent = input_cargar.value
        node.appendChild(document.createTextNode(resaltar_li[j].textContent));
        document.querySelector('ul').appendChild(node)
    }
}


btn_sortear.addEventListener('click', sortear)

//Funcion
function sortear() {
    let pintar_li = document.getElementsByTagName("li")
    var ran = Math.floor(Math.random() * arr_participantes.length)
   
    for (var k = 0; k <= arr_participantes.length; k++) {
        if (arr_participantes[k] == arr_participantes[ran]) {
            pintar_li[k].style.background = "rgb(44, 150, 84)"
        } else {
            pintar_li[k].style.background = "lightblue"
        }
    }
}




