function mostrarMensaje() { 
    setTimeout(() => {
        console.log("Hola después de 3 segundos");
    }, 3000);
}

mostrarMensaje();

/*Definimos la función mostrarMensaje().
Usamos setTimeout(), que retrasa la ejecución de una función.
Después de 3000 milisegundos (3 segundos), se ejecuta la función interna.
Se imprime "Hola después de 3 segundos" en la consola.*/
