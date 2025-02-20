//Dado un string "Hola, cómo estás?", conviértelo a mayúsculas y elimina las comas.

let texto = "Hola, cómo estás?";
let transformado = texto.toUpperCase().replace(/,/g, "");

console.log(transformado); // "HOLA CÓMO ESTÁS?"
