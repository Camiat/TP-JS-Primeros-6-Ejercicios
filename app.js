//TP-JavaScript

//1-Escribe una función que determine si un número es primo o no

//Un número primo debe ser entero, diferente de 1 
//y divisible en uno y en si mismo.

//Función parámetro
function soyPrimo(numero) {
    if (numero <= 1) {
        return false;//menor o igual a 1 no es primo
    } else {//uso bucle para evaluar divisibilidad
        for (let i = 2; i < numero; i++) {
            if (numero % i === 0) {//si es divisible en algún número entre 2 
                //y el mismo no es primo
                return false;
            }
        } 
        return true;//si no hay otros divisores, es true
    }
}

//Ahora puedo expresarlo asi porque la función está definida
let numero = 23;
if (soyPrimo(numero)) {
    console.log(" es número primo");
} else {
    console.log(" no es número primo");
};


//------------------------------------------------------------------

//2-Operaciones de matriz: Implementa una función que realice operaciones de matriz,
//como suma, resta o multiplicación, en dos matrices dadas.


   
let matrizA = [
    [1, 2],
    [3, 4]
];

let matrizB = [
    [5, 6],
    [7, 8]
];

function sumaMatrices(matriz1, matriz2) {
    // Verifica si las matrices tienen las mismas dimensiones de filas y columnas
    //si las filas de ambas matrices no son iguales y si las columnas de ambas tampoco
    //entonces no se pueden sumar. Si una es true y/o la otra false tampoco
    // no puedo tener una false por eso no se usa OR
    if (matriz1.length !== matriz2.length && matriz1[0].length !== matriz2[0].length) {
        return "Las matrices no tienen las mismas dimensiones y no se pueden sumar.";
    }

    let resultado = []; // Array para almacenar la suma de las matrices

    for (let i = 0; i < matriz1.length; i++) {//itero en filas
        resultado[i] = [];

        for (let j = 0; j < matriz1[i].length; j++) {//itero en columnas
            resultado[i][j] = matriz1[i][j] + matriz2[i][j];
        }
    }

    return resultado;//me devuelve matriz resultante
}  



let resultado = sumaMatrices(matrizA, matrizB);
console.log(resultado); // matriz resultante en consola

//---------------------------------------------------------------

//3-Suma de números en un rango: Escribe una función que calcule la suma de todos
//los números en un rango dado (por ejemplo, de a a b).


function sumaRango(a, b) {
    let suma = 0;

    for (let i = a; i <= b; i++) {
        suma += i;
    }

    return suma;
}


let resultado = sumaRango(20, 55);
console.log(`La suma de los números en el rango es: ${resultado}`);//1350

//---------------------------------------------------------------

//4-Contar vocales: Crea una función que cuente el número de vocales en una cadena
//de texto.

function contarVocales(cadenaConMayuscula) {
    // Convierto la cadena a minúsculas  con METODOS DE STRING sino no me toma las vocales que están con mayúsculas
    let cadenaConMinuscula = cadenaConMayuscula.toLowerCase();

     
    let contadorVocales = 0;

    // Itero sobre la cadena y compruebo las vocales
    for (i = 0; i < cadenaConMinuscula.length; i++) {
        //necesito a ó e ó i ó o ó u por eso uso el operador logico OR.
        if (cadenaConMinuscula[i] === 'a' || cadenaConMinuscula[i] === 'e' || cadenaConMinuscula[i] === 'i' || cadenaConMinuscula[i] === 'o' || cadenaConMinuscula[i] === 'u') {
            contadorVocales++; // Incrementa el contador si encontra una vocal
        }
    }

    // Devuelve el número total de vocales encontradas
    return contadorVocales;
}



let cadenaConMayuscula = "Estoy Aprendiendo JavaScript";
let numeroVocales = contarVocales(cadenaConMayuscula);
console.log (`El número de vocales en mi string es:  ${numeroVocales}`); //10


//--------------------------------------------------------------------------------------------------------------------

//5-De una matriz devuelve una matriz con elementos únicos.(sin duplicados).
//Por ejemplo: [“Sofia”, “Maria”, “Pedro, “Sofia”] → [“Sofia”, “Maria”, “Pedro”]


function obtenerElementosUnicos(matriz) {
    // Set almacena valores únicos, elimina duplicados
    let valoresUnicos = new Set(matriz);

    // Array.from convierte el Set de valores únicos en una matriz unica
    let matrizUnica = Array.from(valoresUnicos);

    // Retorna la matriz con elementos únicos
    return matrizUnica;
}

let matrizDada = ["Sofia", "Maria", "Pedro", "Sofia"];
let matrizUnica = obtenerElementosUnicos(matrizDada);
console.log(matrizUnica); // ["Sofia", "Maria", "Pedro"]

//------------------------------------------------------------------------------------------------------------------

//6-Crea una función que invierta una cadena de texto sin usar reverse()

function cadenaInvertida(texto) {
    let textoInvertido = ' '; // Almacenará el texto invertido
    
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    
    return textoInvertido;
  }
  

  let textoSinInvertir = "¡Hola!";
  let textoInvertido = cadenaInvertida(textoSinInvertir);
  console.log(`(Texto sin invertir: ${textoSinInvertir})`);//Muestra "Texto sin invertir:¡Hola!"
  console.log(`(Texto invertido: ${textoInvertido})`); // Muestra "Texto invertido: ¡aloH¡"

  //Interacción con el DOM en otro repositorio
  