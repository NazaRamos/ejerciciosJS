//Ejercicio 1
let numero1 = 30
let numero2 = 20

if (numero1 > numero2){
    console.log("Este numero es mas grande")
}

//Ejercicio 2
if (numero1 == numero2){
    console.log("Estos numeros son iguales")
}else if (numero1 !== numero2){
    console.log("Estos numeros son diferentes")
}

//Ejercicio 3
if (numero1 > numero2){
    console.log(`${numero1} es mas grande que ${numero2}`)
}else if (numero1 < numero2){
    console.log(`${numero1} es mas chico que ${numero2}`)
}else if (numero1 == numero2){
    console.log(`Estos numeros son iguales`)
}

//Ejercicio 4
let numero3 = 100
 if (numero1 < numero2 && numero1 < numero3){
    console.log(`${numero1} es el mas chico`)
}else if (numero2 < numero1 && numero2 < numero3){
    console.log(`${numero2} es el mas chico`)
}else if (numero3 < numero1 && numero3 < numero2){
    console.log(`${numero3} es el mas chico`)
}

//Ejercicio 5
let alumno1 = {
    nombre: "Nazareno",
    edad: 28,
    altura: 173
}

let alumno2 = {
    nombre: "Benjamin",
    edad: 26,
    altura: 180
}

if (alumno1.altura > alumno2.altura){
    console.log(`${alumno1.nombre} es mas alto que ${alumno2.nombre}`)
}else if (alumno2.altura > alumno1.altura){
    console.log(`${alumno2.nombre} es mas alto que ${alumno1.nombre}`)
}

if (alumno1.edad > alumno2.edad){
    console.log(`${alumno1.nombre} es mayor que ${alumno2.nombre}`)
}else if (alumno2.edad > alumno1.edad){
    console.log(`${alumno2.nombre} es mayor que ${alumno1.nombre}`)
}

//Ejercicio 6
let nombreIngresado = prompt("Ingresa tu nombre")
let edadIngresada = Number(prompt("Ingresa tu edad"))
let alturaIngresada = Number(prompt("Ingresa tu altura en centimetros"))
let visionIngresada = Number(prompt("Ingresa tu vision, del 1 al 10"))

if ((edadIngresada > 18) && (alturaIngresada > 150) && (visionIngresada >= 8)){
    console.log(`${nombreIngresado} esta capacitadx para conducir`)
}else {
    console.log(`${nombreIngresado} no esta capacitadx para conducir`)
}

//Ejercicio 7
let nombreCliente = prompt("Ingresa tu nombre")
let tipoDePase = prompt("Ingrese su tipo de pase (vip o normal)")
let poseeEntrada = prompt("Posee entrada? si o no")

if (alumno1.nombre === nombreCliente){
    console.log(`Bienvenido, ${nombreCliente}!`)
}
if (tipoDePase == "vip"){
    console.log("Bienvenidx!")
}

if (poseeEntrada == "si"){
    let deseaUtilizarla = (prompt("Desea utilizarla? si o no"))
    if (deseaUtilizarla == "si"){
        console.log("Bienvenidx!")
    }
}

if (((nombreCliente !== alumno1.nombre) && (tipoDePase !== "vip")) && (poseeEntrada == "no")){
    let deseaComprar = (prompt("Desea comprar? si o no"))
    if (deseaComprar == "no"){
        alert("Entonces este es el adios.")
    }else if (deseaComprar == "si"){
        let dineroDisponible = Number(prompt("Ingrese dinero disponible utilizando solo numeros"))
        if (dineroDisponible >= 1000){
            alert("La venta ha sido un exito! Bienvenidx!")
        }else if (dineroDisponible < 1000){
            alert("La venta ha fracasado")
        }
    }
}

//Ejercicio 8
let numeroIncognita = 4
let numeroIngresado = Number(prompt("Adivine el numero del 1 al 10"))
if (numeroIngresado === numeroIncognita){
    alert("Ganaste, adivinaste el numero")
}else if (numeroIngresado < numeroIncognita){
    numeroIngresado = Number(prompt("El numero ingresado es menor, vuelva a intentarlo"))
    if (numeroIngresado === numeroIncognita){
        alert("Ganaste, adivinaste el numero")
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es menor, vuelva a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Strike 3, se acabaron los intentos")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Strike 3, se acabaron los intentos") 
        }
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelva a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Strike 3, se acabaron los intentos")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Strike 3, se acabaron los intentos") 
        }
    }
}else if (numeroIngresado > numeroIncognita){
     Number(prompt("El numero ingresado es mayor, vuelva a intentarlo"))
     if (numeroIngresado === numeroIncognita){
        alert("Ganaste, adivinaste el numero")
    }else if (numeroIngresado < numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es menor, vuelva a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Strike 3, se acabaron los intentos")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Strike 3, se acabaron los intentos") 
        }
    }else if (numeroIngresado > numeroIncognita){
        numeroIngresado = Number(prompt("El numero ingresado es mayor, vuelva a intentarlo"))
        if (numeroIngresado === numeroIncognita){
            alert("Ganaste, adivinaste el numero")
        }else if(numeroIngresado < numeroIncognita){
            alert("Strike 3, se acabaron los intentos")        
        }else if(numeroIngresado > numeroIncognita){
            alert("Strike 3, se acabaron los intentos") 
        }
    }
}

//Ejercicio 9
ingresarEdad = Number(prompt("Ingrese su edad"))
soyInfante = ((ingresarEdad >= 0) && (ingresarEdad <= 12))
soyAdolescente = ((ingresarEdad >= 13) && (ingresarEdad <= 18))
soyMayorJoven = ((ingresarEdad >= 19) && (ingresarEdad <= 45))
soyAnciano = ((ingresarEdad >= 46) && (ingresarEdad <= 100))

if (soyInfante){
    alert("Eres un infante.")
}else if (soyAdolescente){
    alert("Eres un adolescente.")
}else if (soyMayorJoven){
    alert("Eres un mayor joven.")
}else if (soyAnciano){
    alert("Eres un anciano.")
}else if (ingresarEdad > 100){
    prompt("En realidad tienes esa edad?")
}

//Ejercicio 10

let jugador1 = prompt("Ingrese nombre del jugador 1")
let jugador2 = prompt("Ingrese nombre del jugador 2")

let eleccionJugador1 = prompt(`${jugador1}, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS' en mayusculas`)
let eleccionJugador2 = prompt(`${jugador2}, ingresa 'PIEDRA', 'PAPEL' o 'TIJERAS' en mayusculas`)

if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "TIJERAS")){
    alert(`La victoria es de ${jugador1}`)
}else if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "PAPEL")){
    alert(`La victoria es de ${jugador2}`)
}else if ((eleccionJugador1 === "PIEDRA") && (eleccionJugador2 === "PIEDRA")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "TIJERAS")){
    alert(`La victoria es de ${jugador2}`)
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "PAPEL")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "PAPEL") && (eleccionJugador2 === "PIEDRA")){
    alert(`La victoria es de ${jugador1}`)
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "TIJERAS")){
    alert("Es un empate")
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "PAPEL")){
    alert(`La victoria es de ${jugador1}`)
}else if ((eleccionJugador1 === "TIJERAS") && (eleccionJugador2 === "PIEDRA")){
    alert(`La victoria es de ${jugador2}`)
}else {
    alert("Alguno de los jugadores ha hecho trampa")
}

//Ejercicio 11

let colorIngresado = prompt("Ingrese un color en minusculas")

switch(colorIngresado) {
    case 'blanco':
        alert("Falta de color.");
        break;
    case 'negro':
        alert("Falta de color.");
        break;
    case 'verde':
        alert("El color de la naturaleza.");
        break;
    case 'azul':
        alert("El color del agua.");
        break;
    case 'amarillo':
        alert("El color del sol.");
        break;
    case 'rojo':
        alert("El color del fuego.");
        break;
    case 'marron':
        alert("El color de la tierra.");
        break;
    default:
        alert("Excelente eleccion, no lo teniamos pensado.")
}

//Ejercicio 12

let valor1 = Number(prompt("Ingrese un numero"))
let valor2 = Number(prompt("Ingrese otro numero"))
let operacionIngresada = prompt("Seleccione operacion (suma, resta, multiplicacion, division)")

if (operacionIngresada === "suma"){
    alert(`${valor1} + ${valor2} = ${valor1 + valor2}`)    
}else if (operacionIngresada === "resta"){
    alert(`${valor1} - ${valor2} = ${valor1 - valor2}`)
}else if (operacionIngresada === "multiplicacion"){
    alert(`${valor1} * ${valor2} = ${valor1 * valor2}`)
}else if ((operacionIngresada === "division") && (valor1 !== 0) && (valor2 !== 0)){
    alert(`${valor1} / ${valor2} = ${valor1 / valor2}`)
}else if ((operacionIngresada === "division") && ((valor1 === 0) || (valor2 ===0))){
    alert("ERROR")
}

//Ejercicio 13

let apellidoDNI = prompt("Ingrese su apellido")
let nombreDNI = prompt("Ingrese su nombre")
let generoDNI = prompt("Ingrese su genero")
let fechaNacimientoDNI = prompt("Ingrese su fecha de nacimiento dd/mm/aaaa")
let nacionalidadDNI = prompt("Ingrese su nacionalidad")

let casoAfirmativo = prompt(`${apellidoDNI}, ${nombreDNI}, ${generoDNI}, ${fechaNacimientoDNI}, ${nacionalidadDNI}, "Estan correctos sus datos? Ingrese 'si' o 'no'"`)

if (casoAfirmativo === "si"){
    let personaDNI = {
        apellido: apellidoDNI,
        nombre: nombreDNI,
        genero: generoDNI,
        fechaDeNacimiento: fechaNacimientoDNI,
        nacionalidad: nacionalidadDNI
    }
    console.table(personaDNI)
    console.log("Registro exitoso!")
}else if (casoAfirmativo === "no"){
    alert("Vuelva a intentarlo en 1 mes.")
}