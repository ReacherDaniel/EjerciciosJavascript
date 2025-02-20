//Crea una función que valide si una cadena de texto es un correo electrónico válido.

function validarCorreo(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

console.log(validarCorreo("ejemplo@gmail.com")); // true
console.log(validarCorreo("correo-invalido.com")); // false
