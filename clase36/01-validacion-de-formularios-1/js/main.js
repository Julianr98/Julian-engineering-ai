const form = document.getElementById('form');
const btnSubmit = document.querySelector('.btn--1');
const inputName = document.getElementById('name');

// (1): Evento click del botón submit:
/*
Con el evento click del botón submit, no se muestran los mensajes de validación de HTML 5
del estilo "Completa este campo" al utilizar el método preventDefault().
Tener presenta también que esto se está programando sobre UN botón.
*/

btnSubmit.addEventListener('click', e => {
    e.preventDefault();
    const nameIsValid = inputName.checkValidity();
    if (nameIsValid) {
        let nameValue = inputName.value;
        console.log('Evento click. Campo validado. Value: ' + nameValue);
    } else {
        console.error('El nombre es obligatorio y debe contener 3 caracteres como mínimo.');
    }
});

