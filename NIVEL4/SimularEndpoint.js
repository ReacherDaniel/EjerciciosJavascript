fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));

/*fetch() solicita datos a la URL.
.then(response => response.json()) convierte la respuesta en JSON.
Se imprime la información obtenida.
Se maneja cualquier error con .catch().*/