/*Ejercicio 1: Generar una función que reciba como parámetro un array de cervezas y devuelva un
nuevo array con las 10 cervezas más alcohólicas */

function top10MasAlcoholicas (array){
    let arrayEnteroModificable = array.map ( elemento => elemento )
    arrayEnteroModificable.sort( (a,b) => b.abv - a.abv )
    let porcionArrayMayorGraduacionAlcoholica = arrayEnteroModificable.slice(0,10)
    return porcionArrayMayorGraduacionAlcoholica
}

let resultadoTop10MasAlcoholicas = top10MasAlcoholicas(beers)
console.log(resultadoTop10MasAlcoholicas)

/*Ejercicio 2: Generar una función que reciba como parámetro un array de cervezas y devuelva un nuevo
array con las 10 cervezas menos amargas.*/

function top10MenosAmargas (array){
    let arrayEnteroModificable = array.map ( elemento => elemento)
    arrayEnteroModificable.sort( (a,b) => a.ibu - b.ibu )
    let porcionArrayMenosAmarga = arrayEnteroModificable.slice(1,11)
    return porcionArrayMenosAmarga
}

let resultadoTop10MenosAmargas = top10MenosAmargas(beers)
console.log(resultadoTop10MenosAmargas)

/*Ejercicio 3: Generar una función que reciba como parámetro el array de cervezas y un valor de
alcohol. La función debe devolver un nuevo array con las cervezas que no excedan el
nivel etílico. Cada elemento del nuevo array debe ser un objeto que tenga la
propiedades nombre, alcohol (abv) y "amargor" (ibu)*/

function cervezasPorNivelEtilico(array, valor){
    const cervezasFiltradas = array.filter (array => array.abv <= valor)
    return cervezasFiltradas 
} 
const cervezasFiltradas = cervezasPorNivelEtilico(beers, 9)
console.log(cervezasFiltradas)

let arrayMapeadoDeCerverzas = cervezasFiltradas.map(objeto =>{
    return {
    nombre: objeto.name,
    alcohol: objeto.abv,
    amargor: objeto.ibu
    }
})

console.log(arrayMapeadoDeCerverzas)

/*Ejercicio 4: Generar una función que reciba como parámetro un array de cervezas, un nombre de
propiedad y un valor booleano. Debe devolver un nuevo array con 10 cervezas
ordenadas por la propiedad ingresada como segundo argumento, de manera
ascendente si el tercero es true o descendente si es false.*/

function arrayNombreValor (array, propiedad, booleano){
    let array10cervezas = array.slice(0,10)
    if (booleano === true){
        array10cervezas.sort( (a, b) => a[propiedad] - b[propiedad])
    } else if (booleano === false){
        array10cervezas.sort( (a, b) => b[propiedad] - a[propiedad])
    }
    return array10cervezas
}

let birraNV = arrayNombreValor(beers, "ph", false)

console.log(birraNV)


/*Ejercicio 5: Generar una función que reciba como parámetro un array de cervezas y un id. La
función debe renderizar (renderizar, dibujar, pintar, llenar, etc) en un archivo html una
tabla que contenga las columnas "Name", "ABV", "IBU", y una fila por cada elemento del
array. Cada fila debe tener los datos que se piden de cada una de las cervezas.*/

function renderizarTabla (array, idElementoHTML){
    let cuerpoTabla = document.getElementById(idElementoHTML)
    let infoCervezasTabla = array.map(elementoActual=>{
        return{
            name: elementoActual.name,
            abv: elementoActual.abv,
            ibu: elementoActual.ibu
        }
    })
    let tablaParaHTML = infoCervezasTabla.reduce ((acc, elemAc) => {
        return acc + `<tr>
                        <td>${elemAc.name}</td>
                        <td>${elemAc.abv}</td>
                        <td>${elemAc.ibu}</td>
                    </tr>
                    `
    }, "")
    cuerpoTabla.innerHTML = tablaParaHTML
}

renderizarTabla(beers, "tableBody")