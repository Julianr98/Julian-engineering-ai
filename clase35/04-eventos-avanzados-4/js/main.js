
// Alternativa 1:
// let botonYaCreado = false;
// 
// const _estatico = document.getElementById('estatico');
// _estatico.addEventListener('click', () => {
//     console.log('Click en estático');
//     
//     if (!botonYaCreado) {
// 
//         const _dinamico = document.createElement('button');
//         _dinamico.innerHTML = 'Dinámico';
//         console.log(_dinamico);
//         
//         _dinamico.addEventListener('click', () => {
//             console.log('Botón dinámico!');
//         });
//         
//         // document.querySelector('body').insertAdjacentElement('beforeend', _dinamico);
//         // document.querySelector('body').appendChild(_dinamico);
//         document.body.appendChild(_dinamico);
// 
//         botonYaCreado = true;
//     }
// 
// });



// Alternativa 2:
// let botonYaCreado = false;
// 
// const _estatico = document.getElementById('estatico');
// _estatico.addEventListener('click', () => {
//     console.log('Click en estático');
//     
//     if (botonYaCreado) {
//         return;
//     }
//     
//     const _dinamico = document.createElement('button');
//     _dinamico.innerHTML = 'Dinámico';
//     console.log(_dinamico);
//     
//     _dinamico.addEventListener('click', () => {
//         console.log('Botón dinámico!');
//     });
//     
//     // document.querySelector('body').insertAdjacentElement('beforeend', _dinamico);
//     // document.querySelector('body').appendChild(_dinamico);
//     document.body.appendChild(_dinamico);
// 
//     botonYaCreado = true;
// 
// });



// Alternativa 3:

// const _estatico = document.getElementById('estatico');
// 
// _estatico.addEventListener('click', () => {
//     // debugger;
//     console.log('Click en estático');
// 
//     _estatico.disabled = true;
// 
//     const _dinamico = document.createElement('button');
//     _dinamico.innerHTML = 'Dinámico';
//     
//     _dinamico.addEventListener('click', () => {
//         console.log('Botón dinámico!');
//     });
//     
//     document.body.appendChild(_dinamico);
// });


// Alternativa 4:

document.addEventListener('click', function (e) {
    // console.log('Click en document');
    // console.log('Id:', e.target.id);

    if (e.target.id === 'estatico') {
        console.warn('Click en botón estático!');

        const _dinamico = document.createElement('button');
        _dinamico.innerHTML = 'Dinámico';
        _dinamico.id = 'dinamico';

        document.body.appendChild(_dinamico);

        e.target.disabled = true;
        return;
    } 
    
    if (e.target.id === 'encabezado') {
        console.log('Click en el encabezado...........');
        return;
    }

    if (e.target.id === 'dinamico') {
        console.log('Click en botón dinámico!!!!');
        // return
    }

});
