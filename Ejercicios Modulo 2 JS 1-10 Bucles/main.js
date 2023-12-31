//Ejercicio 1
/*Realizar un programa que permita el ingreso de un número y muestre su tabla de
multiplicar (Los primeros 10 múltiplos). */

let numeroIngresado = Number(prompt("Ingrese un numero"))
//Aca le pido un dato a un usuario
let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
//Aca tenemos el array que queremos usar para multiplicar
for (let i = 0; i < multiplicadores.length; i++){
    let resultado = numeroIngresado * multiplicadores[i]
    console.table(resultado)
}
console.log(multiplicadores.length)

//Ejericio 2
/*Realizar un programa que permita el ingreso de números los cuales se tienen que ir
acumulando. El ingreso de datos terminará cuando el usuario ingrese un valor 0.*/

//Aca defino 2 variables
let numeroIngresado1 = 0
let suma = 0
do{
    numeroIngresado1 = Number(prompt("Ingrese un numero"))
    suma += numeroIngresado1
    alert(suma)
}while(numeroIngresado1 !== 0)
console.log(suma)
//Ejercicio 3
/*Guarda el número final del ejercicio N°2 en una variable, el mismo deberá estar en un
rango entre 1 - 100. La persona deberá poder ingresar números hasta adivinar el valor
guardado en dicha variable. Si el valor ingresado es mayor al número secreto, avisarle
al usuario, lo mismo si el valor es menor. Así sucesivamente hasta que el usuario
adivine el número secreto. Por último mostrar un mensaje de felicitaciones y decirle en
cuantos intentos lo ha realizado.*/
let turnos = 0
let intentoAdivinar = 0
do{
    intentoAdivinar = Number(prompt("Adivine el numero secreto entre 1 y 100"))
    if (intentoAdivinar > suma){
        alert("El valor ingresado es mayor, intente de nuevo")
        }else if (intentoAdivinar < suma){
        alert("El valor ingresado es menor, intente de nuevo")
    }
    turnos++
}while ((suma > 0 && suma <= 100) && (intentoAdivinar !== suma))

alert(`Felicidades! Has adivinado en ${turnos} intentos`)

//Ejercicio 4
/*Realizar un programa que reciba un número y muestre de alguna forma todos sus
divisores.*/

let numeroADividir = Number(prompt("Ingrese numero a dividir"))
let divisor = 1
    do{
        if ((numeroADividir % divisor) === 0){
            console.table(divisor)
        }
        divisor++
    }while (divisor <= numeroADividir)

//Ejercicio 5
/*Dado un array de 10 elementos, realizar un programa que recorra ese array y muestre
un mensaje por consola con cada uno de los elementos del array.*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

//Ejercicio 6
/*Dado un array de 10 números, realizar un programa que muestre por consola el doble
de cada uno de los elementos.*/

for (i = 0; i < numeros.length; i++){
    console.log( numeros[i] * 2 )
}

//Ejercicio 7
/*Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa que
muestre un mensaje de presentación por cada elemento del array*/

let familia = [
    {
        nombre: "Naza",
        edad: 28,
        nacionalidad: "argentino",
        estaCansadx: true
    },
    {
        nombre: "Marcela",
        edad: 62,
        nacionalidad: "argentina",
        estaCansadx: true
    },
    {
        nombre: "Carlos",
        edad: 70,
        nacionalidad: "argentino",
        estaCansadx: true
    },
    {
        nombre: "Segundo",
        edad: 35,
        nacionalidad: "argentino",
        estaCansadx: false
    },
    {
        nombre: "Isidro",
        edad: 24,
        nacionalidad: "argentino",
        estaCansadx: false
    }
]

for (const miembro of familia) {
    console.log(`Hola, mi nombre es ${miembro.nombre}, tengo ${miembro.edad} y soy ${miembro.nacionalidad}. Y si la pregunta es "estas cansadx?", la respuesta es ${miembro.estaCansadx}`)
}

//Ejercicio 8
/*Dado un array de 10 números, realizar un programa que recorra el array y solo muestre
los números impares.*/

let numerosEj8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const numero of numerosEj8) {
    if (numero % 2 !== 0)
    console.log(numero)
}

//Ejercicio 9
/*Realizar un programa que permita la entrada de números y calcule la suma de los
números pares por un lado y los impares por otro, el ingreso de dato finaliza cuando el
usuario ingresa un 0.*/

let numeroIngresadoEj9 = 0
let sumaPar = 0
let sumaImpar = 0

do {
    numeroIngresadoEj9 = Number(prompt("Ingrese un numero"))
    if (numeroIngresadoEj9 % 2 === 0){
        sumaPar += numeroIngresadoEj9
        alert(sumaPar)
    } else if (numeroIngresadoEj9 % 2 !== 0){
        sumaImpar += numeroIngresadoEj9
        alert(sumaImpar)
    }
} while (numeroIngresadoEj9 !== 0);

//Ejercicio 10
/*Dado un array de 10 números, realizar un programa que imprima por pantalla el
número más grande.*/

let array10 = [1, 251, 3, 46, 5, 65, 7, 1088, 9, 10]
console.log(array10)

let numeroEj10 = 0

for (let index = 0; index < array10.length; index++) {
    if (array10[index] > numeroEj10){
        numeroEj10 = array10[index]
    }
}
console.log(numeroEj10)