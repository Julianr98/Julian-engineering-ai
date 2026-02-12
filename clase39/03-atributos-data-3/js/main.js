document.querySelector('.alumnos-container').addEventListener('click', e => {
    const alumnoContainer = e.target.closest('.alumno');
    const numeroDeDocumento = alumnoContainer.dataset.numeroDeDocumento;
    if (e.target.classList.contains('btn-eliminar')) {
        eliminarAlumno(numeroDeDocumento);
        return;
    }
    if (e.target.classList.contains('btn-inscribir')) {
        inscribirAlumno(numeroDeDocumento);
        return;
    }
    if (e.target.classList.contains('btn-contactar')) {
        contactarAlumno(numeroDeDocumento);
        return;
    }
});

const eliminarAlumno = numeroDeDocumento => {
    console.log('🚮 Se eliminar al alumno ' + numeroDeDocumento);
};

const inscribirAlumno = numeroDeDocumento => {
    console.log('✍🏻 Se inscribe al alumno ' + numeroDeDocumento);
};

const contactarAlumno = numeroDeDocumento => {
    console.log('📞 Se contacta al alumno ' + numeroDeDocumento);
};
