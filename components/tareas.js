/**
 * Componente dinámico que crea una card con los datos de una tarea
 * @param {Object} tarea - Objeto con los datos de la tarea
 * @returns {HTMLElement} - El elemento card listo para insertar en el DOM
 */
export const crearCardTarea = (tarea) => {
    // 1. Contenedor principal de la card
    const card = document.createElement('div');
    card.classList.add('card', 'task-card');

    // 2. Fila: Título
    card.appendChild(crearFila('Título', tarea.titulo));

    // 3. Fila: Descripción
    card.appendChild(crearFila('Descripción', tarea.descripcion));

    // 4. Fila: Prioridad (con badge de color)
    const badgePrioridad = document.createElement('span');
    badgePrioridad.classList.add('priority-tag', tarea.prioridad.toLowerCase());
    badgePrioridad.textContent = tarea.prioridad.toUpperCase();
    card.appendChild(crearFilaConElemento('Importancia', badgePrioridad));

    // 5. Fila: Estado
    card.appendChild(crearFila('Estado', tarea.estado));

    // 6. Fila: Fecha
    card.appendChild(crearFila('Fecha', tarea.fecha_registro));

    return card;
}

/**
 * Crea una fila label + valor de texto
 */
function crearFila(label, valor) {
    const fila = document.createElement('div');
    fila.classList.add('task-card__row');

    const labelEl = document.createElement('span');
    labelEl.classList.add('task-card__label');
    labelEl.textContent = label;

    const valorEl = document.createElement('span');
    valorEl.classList.add('task-card__value');
    valorEl.textContent = valor;

    fila.appendChild(labelEl);
    fila.appendChild(valorEl);
    return fila;
}

/**
 * Crea una fila label + elemento HTML personalizado (por ejemplo, un badge)
 */
function crearFilaConElemento(label, elemento) {
    const fila = document.createElement('div');
    fila.classList.add('task-card__row');

    const labelEl = document.createElement('span');
    labelEl.classList.add('task-card__label');
    labelEl.textContent = label;

    fila.appendChild(labelEl);
    fila.appendChild(elemento);
    return fila;
}