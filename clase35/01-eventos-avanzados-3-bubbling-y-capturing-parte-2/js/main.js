const uno = document.querySelector('.box--1');
const dos = document.querySelector('.box--2');
const tres = document.querySelector('.box--3');

tres.addEventListener('click', e => {
    console.log('*** CLICK EN TRES ***');
}, true);  // false: bubbling (por defecto)    | true: capturing

dos.addEventListener('click', e => {
    console.log('** CLICK EN DOS **');
    e.stopPropagation();
}, true);  // false: bubbling (por defecto)    | true: capturing

uno.addEventListener('click', e => {
    console.log('* CLICK EN UNO *');
}, true);  // false: bubbling (por defecto)    | true: capturing
