const btnClick = document.querySelector('.btn-click');

const uno = () => console.log('### Función UNO ###');
const dos = function () { console.log('### Función DOS ###'); };

///////////////////////////////////////////////////////////////////////////////
//      Ejemplos que no funcionan, porque la propiedad/evento "onclick"      //
//      necesita que se le asigne un callback.                               //
///////////////////////////////////////////////////////////////////////////////
/*
console.log(btnClick.onclick);  // null

btnClick.onclick = `console.log('Hola');`;
console.log(btnClick.onclick);  // null

btnClick.onclick = 444;
console.log(btnClick.onclick);  // null

btnClick.onclick = 'Texto';
console.log(btnClick.onclick);  // null

btnClick.onclick = console.log('Hola');
console.log(btnClick.onclick);  // null

// btnClick.onclick();          // Uncaught TypeError: btnClick.onclick is not a function
*/
////////////////////////////////////////////////////////////////////////////////
//         Asignación de un callback a la propiedad/evento "onclick":         //
////////////////////////////////////////////////////////////////////////////////
/*
// console.log(typeof btnClick.onclick);   // object (null)

btnClick.onclick = function () { console.log('Hiciste click!'); };
console.log(btnClick.onclick);  // ƒ () { console.log('Hiciste click!'); }

// console.log(typeof btnClick.onclick);   // function

if (typeof btnClick.onclick === 'function') {
    btnClick.onclick();
}

// Si se le asigna otro callback a la propiedad/evento onclick,
// se pisa el anterior.
btnClick.onclick = () => console.warn('✨✨✨ Me clickeaste... ✨✨✨');

if (typeof btnClick.onclick === 'function') {
    btnClick.onclick();
}

// btnClick.onclick = uno();   // No se le está asignando un callback!
btnClick.onclick = uno;
if (typeof btnClick.onclick === 'function') {
    btnClick.onclick();
}

// btnClick.onclick = dos();   // No se le está asignando un callback!
btnClick.onclick = dos;
if (typeof btnClick.onclick === 'function') {
    btnClick.onclick();
}
*/

///////////////////////////////////////////////////////////////////////////////
//                     Asignación de callbacks múltiples                     //
///////////////////////////////////////////////////////////////////////////////

// Intento de asignarle 2 callbacks: (en realidad, sigue siendo uno solo)
/*
btnClick.onclick = () => {
    uno();
    dos();
};
*/

// Registro de múltiples callbacks al evento click:
/*
btnClick.addEventListener('click', uno);
btnClick.addEventListener('click', dos);
btnClick.addEventListener('click', () => { console.log('Tres!'); });
btnClick.addEventListener('click', () => console.log('Cuatro!'));
btnClick.addEventListener('click', function () { console.log('Cinco!'); });
*/


////////////////////////////////////////////////////////////////////////////////
//                                Objeto Event                                //
////////////////////////////////////////////////////////////////////////////////

// btnClick.addEventListener('click', (superman) => { console.log(superman); });
// btnClick.addEventListener('click', (event) => { console.log(event); });
// btnClick.addEventListener('click', (e) => { console.log(e); });
// btnClick.addEventListener('click', e => { console.log(e); });
// btnClick.addEventListener('click', function (e) { console.log(e); });

// btnClick.addEventListener('click', (e) => {
//     console.log('e.pageX x e.pageY:', e.pageX + 'x' + e.pageY);
// });

const mostrarCoordenadasMouse = e => {
    console.log('e.pageX x e.pageY:', e.pageX + 'x' + e.pageY);
};

// btnClick.addEventListener('click', mostrarCoordenadasMouse());  // No se le está pasando un callback!
btnClick.addEventListener('click', mostrarCoordenadasMouse);
