let cantidadDeVeces = 0;
const medidasInner = document.querySelector('.medidas-inner');
const medidasOuter = document.querySelector('.medidas-outer');

window.addEventListener('resize', () => {
    console.log('Cantidad de veces:', ++cantidadDeVeces);
    console.log('Se cambió el tamaño del navegador');
    medidasInner.innerHTML = `${innerWidth} x ${innerHeight}`;
    medidasOuter.innerHTML = `${outerWidth} x ${outerHeight}`;
});