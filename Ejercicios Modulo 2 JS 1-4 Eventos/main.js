/*1° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un botón que diga “Cambiar”, al hacer click sobre el botón, el color de relleno
del cuadrado deberá cambiar a celeste.*/

let cuadradoJS = document.getElementById("cuadrado")
let botonJS = document.getElementById("boton")

botonJS.addEventListener("click", cambiarColor)

function cambiarColor (){
    if (cuadradoJS.style.backgroundColor == ""){
        cuadradoJS.style.backgroundColor = "lightblue"
        cuadradoJS.textContent = "Celeste"
    } else if (cuadradoJS.style.backgroundColor == "lightblue"){
        cuadradoJS.style.backgroundColor = "red"
        cuadradoJS.textContent = "Rojo"
    } else if (cuadradoJS.style.backgroundColor == "red"){
        cuadradoJS.style.backgroundColor = "grey"
        cuadradoJS.textContent = "Gris"
    } else if (cuadradoJS.style.backgroundColor == "grey"){
        cuadradoJS.style.backgroundColor = "lightblue"
        cuadradoJS.textContent = "Celeste"
    }
}

/*2° - Crear una aplicación que muestre un cuadrado de color gris. Debajo deberá
haber un input de texto, al escribir en el input de texto, los que se esté escribiendo
deberá aparecer impreso dentro del cuadrado.*/

let cuadrado2 = document.getElementById("cuadrado2")
let textoCuadradoJS = document.getElementById("textoCuadrado")
let botonResetJS = document.getElementById("botonReset")

textoCuadradoJS.addEventListener("keydown", transmitirTexto)

function transmitirTexto (){
    cuadrado2.textContent = textoCuadradoJS.value
    return transmitirTexto
}

botonResetJS.addEventListener("click", borrarTexto)

function borrarTexto (){
    cuadrado2.textContent = ""
    textoCuadradoJS.value = ""
    return borrarTexto
}

/*3° - Crear una aplicación que calcule el índice de masa corporal, al presionar el
botón “calcular” deberá mostrar el resultado en el input correspondiente.*/

let pesoJS = document.getElementById("peso")
let alturaJS = document.getElementById("altura")
let botonIMCJS = document.getElementById("botonIMC")
let resultadoIMCJS = document.getElementById("resultadoIMC")

botonIMCJS.addEventListener("click", calcular)

function calcular (){
    let calculoIMC = pesoJS.value / (alturaJS.value ** 2)
    resultadoIMCJS.value = calculoIMC
    return calcular
}

/*4° - Crear una aplicación de conversión de divisa. Deberá tener los valores por
defecto, por ejemplo 1 dólar = 500 pesos ( valor de ejemplo ), y al hacer algún cambio
en alguno de los inputs se deberá ver reflejado su correspondiente valor en la
moneda a convertir.*/

let pesoArg = document.getElementById('pesoArg');
let dolarUS = document.getElementById('dolarUS')
let dolares = 1
let pesosArgentinos = 287



pesoArg.addEventListener('keyup', calculoDivisaPesoDolar)

dolarUS.addEventListener('keyup', calculoDivisasDeDolaraPeso)

function calculoDivisasDeDolaraPeso (){

    pesoArg.value=dolarUS.value*pesosArgentinos
}

function calculoDivisaPesoDolar(){

    dolarUS.value=pesoArg.value/pesosArgentinos
}
