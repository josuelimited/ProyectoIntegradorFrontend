/**
 * Componente dinámico para armar las filas de la tabla de tareas
 * @param {HTMLElement} tabla - El tbody donde se insertarán las filas
 * @param {Array} listaTareas - Los datos que vienen del fetch
 */
export const armarTablaTareas = (tabla, listaTareas) => {
    const fragmento = document.createDocumentFragment(); //

    listaTareas.forEach(tarea => {
        // 1. Creamos el contenedor de la fila
        const tr = document.createElement('tr');

        // 2. Creamos la celda del Título
        const tdTitulo = document.createElement('td');
        const boldTitulo = document.createElement('strong');
        boldTitulo.textContent = tarea.titulo;
        tdTitulo.appendChild(boldTitulo);

        // 3. Creamos la celda de la Descripción
        const tdDesc = document.createElement('td');
        tdDesc.textContent = tarea.descripcion;

        // 4. Creamos la celda de la Prioridad con su respectivo Tag
        const tdPrioridad = document.createElement('td');
        const spanPrioridad = document.createElement('span');
        spanPrioridad.textContent = tarea.prioridad;
        
        // Agregamos las clases para el estilo CSS
        spanPrioridad.classList.add('priority-tag');
        spanPrioridad.classList.add(tarea.prioridad.toLowerCase());
        tdPrioridad.appendChild(spanPrioridad);

        // 5. Creamos la celda del Estado
        const tdEstado = document.createElement('td');
        tdEstado.textContent = tarea.estado;

        // 6. Armamos la fila agregando cada celda en orden
        tr.appendChild(tdTitulo);
        tr.appendChild(tdDesc);
        tr.appendChild(tdPrioridad);
        tr.appendChild(tdEstado);

        // 7. Agregamos la fila completa al fragmento
        fragmento.appendChild(tr);
    });

    // Limpieza e inserción final en el DOM
    tabla.innerHTML = ""; 
    tabla.appendChild(fragmento); //
}