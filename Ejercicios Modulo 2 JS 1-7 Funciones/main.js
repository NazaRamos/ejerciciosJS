function saludar (nombre){
    console.log(`Hola, ${nombre}`)
}

saludar("Naza")

function multiplicar (uno, diez){
    console.log( uno * diez )
}

multiplicar(5, 10)

function areaTriangulo (base, altura){
    let area = (base * altura / 2)
    return area
}

console.log(areaTriangulo(5,3))

function perimetroTriangulo (lado1, lado2, lado3){
    let perimetro = (lado1 + lado2 + lado3)
    return perimetro
}

console.log(perimetroTriangulo(4,5,6))

function calcularPrecio (precio, cantidad){
    if (cantidad >= 10 && cantidad < 20){
        precio = precio - (precio * 10 / 100)
    } else if (cantidad >= 20){
        precio = precio - (precio * 20 / 100)
    }
    return precio
}

console.log(calcularPrecio(100,15))
console.log(calcularPrecio(50,25))

function esMayorDeEdad (edad){
    if (edad >= 18){
        console.log("Eres mayor de edad")
    } else if (edad < 18){
        console.log("Eres menor de edad")
    }
    return edad
}

esMayorDeEdad(25)
esMayorDeEdad(16)
esMayorDeEdad(74)

function calcularImpuesto (ingresoAnual){
    if (ingresoAnual <= 10000){
        impuesto = ingresoAnual - (ingresoAnual * 10 / 100)
    } else if ((ingresoAnual => 10000) && (ingresoAnual <= 20000)){
        impuesto = ingresoAnual - (ingresoAnual * 15 / 100)
    } else if (ingresoAnual > 20000){
        impuesto = ingresoAnual - (ingresoAnual * 20 / 100)
    }
    return impuesto
}

console.log(calcularImpuesto(5000))
console.log(calcularImpuesto(15000))
console.log(calcularImpuesto(30000))

function verificarDia (dia){
    switch (dia){
        case 1:
            console.log("Es un dia laboral")
        break;
        case 2:
            console.log("Es un dia laboral")
        break;
        case 3:
            console.log("Es un dia laboral")
        break;
        case 4:
            console.log("Es un dia laboral")
        break;
        case 5:
            console.log("Es un dia laboral")
        break;
        case 6:
            console.log("Es fin de semana")
        break;
        case 7:
            console.log("Es fin de semana")
        break;
    }
    return dia
}

console.log(verificarDia(1))
console.log(verificarDia(4))
console.log(verificarDia(7))

