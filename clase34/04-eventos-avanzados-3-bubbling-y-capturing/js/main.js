const uno = document.querySelector('.box--1');
const dos = document.querySelector('.box--2');
const tres = document.querySelector('.box--3');

tres.addEventListener('click', e => {
    console.log('*** CLICK EN TRES ***');
});

dos.addEventListener('click', e => {
    console.log('** CLICK EN DOS **');
});

uno.addEventListener('click', e => {
    console.log('* CLICK EN UNO *');
});
