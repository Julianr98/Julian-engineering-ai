// Delegación de eventos
console.log(document.title + '\n---------------------------')

document.addEventListener('click', e => {
    // console.log(e);
    // const elementoClickeado = e.target;
    // console.dir(elementoClickeado);
    // console.dir(elementoClickeado.id);
    console.log(e.target);

    if (e.target.id === 'item-2') {
        console.warn('Click en item 2');
        return;
    } 
    
    if (e.target.id === 'item-5') {
        console.warn('Click en item 5');
        return;
    } 
    
    if (e.target.id === 'parrafo-a') {
        console.warn('Click en párrafo A');
        return;
    } 
    
    if (e.target.id === 'parrafo-d') {
        console.warn('Click en párrafo D');
    }

    // console.log(e.target);
});

// document.querySelector('h1').addEventListener('click', function () {
//     console.log('Click en encabezado principal')
// })

// // document.querySelectorAll('li')[0].innerHTML = 'CERO';
// // document.querySelector('li').innerHTML = 'CERO';

// document.getElementById('item-2').addEventListener('click', function () {
//     console.log('Click en item 2')
// })

// document.getElementById('item-5').addEventListener('click', function () {
//     console.log('Click en item 5')
// })

// document.getElementById('parrafo-a').addEventListener('click', function () {
//     console.log('Click en párrafo A')
// })

// document.getElementById('parrafo-d').addEventListener('click', function () {
//     console.log('Click en párrafo D')
// })

// document.querySelectorAll('li').forEach(unLi => {
//     unLi.addEventListener('click', e => {
//         // console.log('Click en un <li>');
//         e.target.innerHTML += ' - Clickeado!';
//     });
// });


// const lis = document.querySelectorAll('li')
// lis[0].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[1].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[2].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[3].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[4].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[5].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });
// lis[6].addEventListener('click', e => { e.target.innerHTML += ' - Clickeado!'; });