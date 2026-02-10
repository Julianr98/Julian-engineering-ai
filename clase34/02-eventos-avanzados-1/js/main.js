const btnClick = document.querySelector('.btn-click');

const uno = () => console.log('### Función UNO ###');
const dos = function () { console.log('### Función DOS ###'); };

///////////////////////////////////////////////////////////////////////////////
//      Ejemplos que no funcionan, porque la propiedad/evento "onclick"      //
//      necesita que se le asigne un callback.                               //
///////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////
//         Asignación de un callback a la propiedad/evento "onclick":         //
////////////////////////////////////////////////////////////////////////////////

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

