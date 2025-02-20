let precios = [10, 20, 30, 40]; //Se declara un array precios con valores [10, 20, 30, 40].

let total = precios.reduce((acumulador, precio) => acumulador + precio, 0); 
//Usamos .reduce(), que recorre el array y acumula valores.
//La función (acumulador, precio) => acumulador + precio suma cada número al acumulador.
//El 0 al final es el valor inicial del acumulador.
console.log(total); 
