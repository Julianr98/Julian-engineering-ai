document.querySelector('.alumnos-container').addEventListener('click', e => {
    if (e.target.classList.contains('btn-eliminar')) {
        const alumnoContainer = e.target.closest('.alumno');
        console.log('Se elimina al alumno ' + alumnoContainer.dataset.numeroDeDocumento);
    }
});
