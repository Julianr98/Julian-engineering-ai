const saludar = () => {
    console.log('Estoy por saludar');
    let saludo = 'Hola ';
    saludo += getNombreCompleto() + '!';
    console.log(saludo);
    console.log('Ya saludé');
};

const getNombreCompleto = () => {
    let nombre = 'Andrés';
    let apellido = 'Gutiérrez';
    let nombreCompleto = nombre + ' ' + apellido;
    return nombreCompleto;
};

console.log('Archivo externo - A');
console.log('Archivo externo - B');
console.log('Archivo externo - C');
let a = 10;
console.log('a:', a);
// debugger;
a = 50;
console.log('a:', a);
a = 3;
console.log('a:', a);
console.log('Archivo externo - D');
saludar();
console.log('Archivo externo - E');


const dividir = (a, b) => {
    if (b === 0) {
        debugger;
    }
    const total = a / b;
    return total;
};

// for (let i = 20; i >= -5; i--) {
//     console.log(`Siguiente valor: ${dividir(100, i)}.`);
// }


if (Math.round(Math.random() * 10) < 3) {
    dividir(3, 0);
}

const eContainer = document.getElementById('container');
// const eContainer = document.getElementById('conta🐾iner');  // id inválido
// console.log(eContainer);
console.log(typeof eContainer);
eContainer.innerHTML = 'Nuevo contenido';


let x = 'A';
let y = 'B';
let z = 'C';

const pruebasScope = () => {
    let x = 'equis';            // Nueva variable local
    let y = 'ye';               // Nueva variable local
    let pruebaLocal = 12345;
    console.log('Texto...');
    console.log('Texto...');
    console.log('Texto...');
    X = 1000;   // Atención! En mayúsculas, se crea una propiedad "X" en window (window.X)
    console.log('x:', x);       // 'equis'  (local)
    console.log('y:', y);       // 'ye'     (local)
    console.log('z:', z);       // 'C'      (global)
    console.log('X:', X);       // 1000
};

console.log('window.X:', window.X);      // undefined
pruebasScope();
console.log('window.X:', window.X);      // 1000

console.warn('window.nombre', window.nombre); // undefined
console.warn('window.apellido', window.apellido); // undefined

let nommmbre = 'Javier';  // error de tipeo
let apellido = 'Gutiérrez';
nombre = 'Damián'; // Crea, implícitamente, una propiedad en el objeto window, como si se crease la variable con "var"

console.warn('window.nombre', window.nombre); // Damián <-- atención!
console.warn('window.apellido', window.apellido); // undefined

console.log(pruebaLocal);
alert('eso no se ejecuta');