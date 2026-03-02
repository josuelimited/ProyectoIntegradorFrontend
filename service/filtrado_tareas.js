// service/filtradoTareas.js

/**
 * Filtra el arreglo de tareas por el estado seleccionado.
 * @param {Array} tareas - Lista de tareas cargada.
 * @param {string} estado - Valor del select ('todos', 'Pendiente', etc).
 */
export const filtrarTareasPorEstado = (tareas, estado) => {
    if (estado === 'todos') return tareas;
    
    // Filtramos comparando con la propiedad .estado de tus tareas
    return tareas.filter(tarea => tarea.estado === estado);
};