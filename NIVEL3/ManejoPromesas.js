function promesaTiempo() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Promesa resuelta");
        }, 2000);
    });
}

promesaTiempo().then(mensaje => console.log(mensaje));
