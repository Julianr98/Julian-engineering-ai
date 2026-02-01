const form = document.getElementById('form');
const btnSubmit = document.querySelector('.btn--1');
const inputName = document.getElementById('name');

// (1): Evento click del botón submit:
/*
Con el evento click del botón submit, no se muestran los mensajes de validación de HTML 5
del estilo "Completa este campo" al utilizar el método preventDefault().
Tener presenta también que esto se está programando sobre UN botón.
*/
/*
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

*/

// (2): Evento submit del formulario:
/*
Con el evento submit del formulario, Sí que se muestran los mensajes de validación de HTML 5
del estilo "Completa este campo" al utilizar el método preventDefault().
*/

// Este método no es standard, es agregado por nosotros. 
// inputName.setCustomMessage = message => {
const setCustomMessage = (message, element) => {
    const inputGroup = element.closest('.input-group');
    inputGroup.querySelector('.error-detail').innerHTML = message;
    // if (message) {
    //     inputGroup.classList.add('error');
    // } else {
    //     inputGroup.classList.remove('error');
    // }


    // if (message) {
    //     inputGroup.classList.toggle('error', true);
    // } else {
    //     inputGroup.classList.toggle('error', false);
    // }

    inputGroup.classList.toggle('error', message);
};

const validateName = value => {
    
    let cleanValue = value.trim();

    const valueLength = cleanValue.length;
    const minLength = 3;
    const maxLength = 20;
    let message = '';

    if (valueLength === 0) {
        message = 'El nombre es obligatorio.';
    } else if (valueLength < minLength) {
        message = `El nombre debe contener ${minLength} caracteres como mínimo`;
    } else if (valueLength > maxLength) {
        message = `El nombre debe contener ${maxLength} caracteres como máximo`;
    }

    // inputName.setCustomValidity(message);
    // inputName.setCustomMessage(message);
    setCustomMessage(message, inputName);
    if (message) {
        // console.error(message);
        return null;            // No validó
    }
    
    return encodeURIComponent(cleanValue);               // Validó ok
};

inputName.addEventListener('input', e => {
    console.log(validateName(inputName.value));
    form.reportValidity();
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const nameValue = validateName(inputName.value);
    // console.log('nameValue:', nameValue);

    if (nameValue) {
        console.log('Campo name validado ok');
    }
    
});