// script.js
const pendientesList = document.getElementById('tareasPendientes');
const hechasList = document.getElementById('tareasHechas');
const nuevaTareaForm = document.getElementById('nuevaTarea');
const nuevaTareaInput = document.getElementById('nuevaTareaInput');

// Agregar una nueva tarea
nuevaTareaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nuevaTarea = nuevaTareaInput.value;
    if (nuevaTarea) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = nuevaTarea;
        pendientesList.appendChild(nuevoItem);
        nuevaTareaInput.value = '';
    }
});

// Mover tareas entre listas
document.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const tarea = event.target;
        if (tarea.classList.contains('completed')) {
            tarea.classList.remove('completed');
            pendientesList.appendChild(tarea);
        } else {
            tarea.classList.add('completed');
            hechasList.appendChild(tarea);
        }
    }
});