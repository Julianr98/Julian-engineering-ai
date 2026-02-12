function Alumno (nombre, apellido, numeroDeDocumento, telefono, email, detalles) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroDeDocumento = numeroDeDocumento;
    this.telefono = telefono;
    this.email = email;
    this.detalles = detalles;
}

document.querySelector('.alumnos-container').addEventListener('click', e => {
    // if (e.target.classList.contains('alumnos-container')) {
    //     return;
    // }
    // if (e.target.tagName !== 'BUTTON') {
    //     return;
    // }
    // if (!e.target.classList.contains('btn-accion')) {
    //     return;
    // }
    const alumnoContainer = e.target.closest('.alumno');
    if (!alumnoContainer) {
        return;
    }
    const numeroDeDocumento = alumnoContainer.dataset.numeroDeDocumento;
    const nombre = alumnoContainer.dataset.nombre;
    const apellido = alumnoContainer.dataset.apellido;
    const telefono = alumnoContainer.dataset.telefono;
    const email = alumnoContainer.dataset.email;
    let alumno = new Alumno(nombre, apellido, numeroDeDocumento, telefono, email, 'detalles');
    if (e.target.classList.contains('btn-eliminar')) {
        eliminarAlumno(alumno);
        return;
    }
    if (e.target.classList.contains('btn-inscribir')) {
        inscribirAlumno(alumno);
        return;
    }
    if (e.target.classList.contains('btn-contactar')) {
        contactarAlumno(alumno);
        return;
    }
});

const eliminarAlumno = alumno => {
    console.log('🚮 Se eliminar al alumno ' + alumno.numeroDeDocumento);
};

const inscribirAlumno = alumno => {
    console.log('✍🏻 Se inscribe al alumno ' + alumno.numeroDeDocumento);
};

const contactarAlumno = alumno => {
    console.log('📞 Se llama al alumno ' + alumno.numeroDeDocumento + ' al teléfono ' + alumno.telefono)
};
