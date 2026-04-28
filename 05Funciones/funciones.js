//Ahora vamos a hacer un viaje en el tiempo y ahora vamos a programar todo bajo un esquema E6
/*
Para javascript ya conocemos el concepto de variable

var

Se sustituye por las nuevas variables:

let-->Es una variable de tipo "protegida", ya que, solo funciona dentro de un mismo bloque de código (entre llaves), es decir, que no se puede acceder a ella desde fuera de ese bloque, y se puede modificar su valor
const--> Significa que es una variable constante, es decir, que no se puede modificar su valor, es como una variable de solo lectura, y se tiene que inicializar al momento de declararla

//Para declarar en js las funciones, hay que hacer de una forma efectiva para declarar funciones y apartir de una funcion flecha
//Una funcion flecha en JS a diferencia de una funcion normal, no genera su propio contexto de ejecución, es decir, que no tiene su propio "this", sino que hereda el "this" del contexto en el que se encuentra, lo que puede ser útil para evitar problemas de contexto en funciones anidadas o callbacks
//function cosa(String hola){this.hola = hola} esto hace que se cree un objeto con una propiedad "hola" y un valor igual al argumento pasado a la función, pero no es una función flecha, es una función normal
//Haremos una función que sume dos numeros se vería así:
function sumarnumeros(a, b){
    return a + b;
}
console.log(`La suma de dos numeros es: ${sumarnumeros(2, 3)}`); //Esto nos devuelve 5

const sumarnumeros2 = (v, x) => {
    return v + x;
}
console.log(`La suma de dos numeros es: ${sumarnumeros2(6, 5)}`); //Esto nos devuelve 5

//Para armar mi funcion fleche se debe seguir la siguiente nomeclatura:
//const nombreFuncion = (parametros) => {cuerpo de la funcion}
const razaperros = [
    "Gran Danes",
    "Doverman",
    "Chihuahua",
    "Pastor Aleman",
    "Pitbull",
    "San Bernardo",
]

//Ahoravamos a recorrer el arreglo de razas de perros con un ciclo for of, que es una forma de recorrer los elementos de un arreglo de una manera mas sencilla y legible, sin tener que preocuparnos por el indice del arreglo, ya que el ciclo for of nos devuelve directamente el valor de cada elemento del arreglo en cada iteracion
console.log("1- Recorriendo el arreglo de razas de perros con un ciclo for of:");
for(const raza of razaperros){
    console.log(raza);
}

//Este de aqui es un ciclo for in, que es una forma de recorrer las propiedades de un objeto, en este caso, el arreglo de razas de perros, pero en este caso, el ciclo for in nos devuelve el indice de cada elemento del arreglo en cada iteracion, por lo que tenemos que acceder al valor del elemento del arreglo utilizando el indice que nos devuelve el ciclo for in, es decir, que tenemos que hacer razaperros[raza] para acceder al valor del elemento del arreglo, ya que el ciclo for in nos devuelve el indice de cada elemento del arreglo en cada iteracion
console.log("2- Recorriendo el arreglo de razas de perros con un ciclo for in:");
for(const raza in razaperros){
    console.log(razaperros[raza]);
}

//En resumen este de aqui es un ciclo forEach, que es una forma de recorrer los elementos de un arreglo de una manera mas sencilla y legible, sin tener que preocuparnos por el indice del arreglo, ya que el ciclo forEach nos devuelve directamente el valor de cada elemento del arreglo en cada iteracion, y ademas, el ciclo forEach nos permite ejecutar una funcion para cada elemento del arreglo, lo que puede ser muy util para realizar operaciones con cada elemento del arreglo, como por ejemplo, imprimir cada elemento del arreglo en la consola, o realizar alguna operacion con cada elemento del arreglo, como por ejemplo, sumar un numero a cada elemento del arreglo, etc.
console.log("3- Recorriendo el arreglo de razas de perros con un ciclo forEach");
razaperros.forEach(element => {
    console.log(element);
});

//Usaremos cada for en situaciones diferentes, por ejemplo, el ciclo for of es ideal para recorrer los elementos de un arreglo, el ciclo for in es ideal para recorrer las propiedades de un objeto, y el ciclo forEach es ideal para ejecutar una funcion para cada elemento de un arreglo, por lo que cada uno de estos ciclos tiene su propia utilidad y se debe usar en situaciones diferentes dependiendo del contexto en el que nos encontremos.
*/
//Necesitamos una funcion para ubicar la raza Chihuahua y si no existe, poder agregarla
const razaperros = [
    "Gran Danes",
    "Doverman",
    "Pastor Aleman",
    "Pitbull",
    "San Bernardo",
]

if (razaperros.find(raza => raza === "Chihuahua")) {
    console.log("La raza Chihuahua ya existe en el arreglo de razas de perros");
} else {
    razaperros.push("Chihuahua");
    console.log("La raza Chihuahua ha sido agregada al arreglo de razas de perros");
}