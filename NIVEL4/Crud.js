let tareas = [];

// Agregar una tarea
function agregarTarea(id, descripcion) {
    tareas.push({ id, descripcion, completado: false });
}

// Eliminar una tarea por ID
function eliminarTarea(id) {
    tareas = tareas.filter(tarea => tarea.id !== id);
}

// Marcar tarea como completada
function completarTarea(id) {
    let tarea = tareas.find(t => t.id === id);
    if (tarea) tarea.completado = true;
}

// Pruebas
agregarTarea(1, "Aprender JavaScript");
agregarTarea(2, "Practicar ejercicios");

console.log(tareas); 

eliminarTarea(1);
console.log(tareas); 

completarTarea(2);
console.log(tareas);

/*agregarTarea() añade una nueva tarea al array tareas.
eliminarTarea(id) filtra el array eliminando la tarea con el id dado.
completarTarea(id) encuentra la tarea por id y cambia completado a true.*/