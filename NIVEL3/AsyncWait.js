function promesaTiempo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
}

async function ejecutarPromesa() {
    let resultado = await promesaTiempo();
    console.log(resultado);
}

ejecutarPromesa();
/* Explicación:
promesaTiempo() sigue devolviendo una promesa que se resuelve en 2 segundos.
ejecutarPromesa() es una función async que usa await para esperar la resolución de la promesa antes de imprimir el resultado.*/
