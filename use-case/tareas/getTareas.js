/**
 * Obtiene las tareas de un usuario específico desde el servidor
 * @param {string} userId - El ID (documento) del usuario
 * @returns {Promise<Array>} - Lista de tareas encontradas
 */
export async function getTareas(userId) {
    // Definimos la base de la URL (ajusta el puerto si es necesario)
    const api_url = "http://localhost:3001";
    
    try {
        // Usamos el endpoint /tasks y filtramos por el campo userId
        // Esto busca todas las tareas donde "userId" coincida con el ID del usuario
        const response = await fetch(`${api_url}/tasks?userId=${userId}`);
        
        // Si la respuesta no es exitosa, lanzamos un error
        if (!response.ok) {
            throw new Error("Error al conectar con el servidor de tareas");
        }
        
        // Convertimos la respuesta a JSON
        const tareas = await response.json();
        
        // Retornamos el array de tareas
        return tareas;

    } catch (error) {
        // En caso de error, lo mostramos en consola y retornamos un array vacío
        console.error("Error en getTareas:", error);
        return [];
    }
}