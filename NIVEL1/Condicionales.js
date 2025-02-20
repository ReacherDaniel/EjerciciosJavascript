const readline = require('readline');

const res = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

res.question("Ingresa tu edad: ", function(edad){
    edad = parseInt(edad);

if (edad >= 18) {
    console.log("Es mayor de Edad")
}else{
    console.log("No es mayor de Edad")
}
res.close(); 
});