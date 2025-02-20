let numeros = [1, 2, 3, 4, 5]; //Se declara un array numeros con valores del 1 al 5.

let cuadrados = numeros.map(num => num ** 2); //Usamos el método .map(), que recorre cada elemento y aplica una función.
                                              //La función num => num ** 2 eleva al cuadrado cada número del array original.

console.log(cuadrados);
