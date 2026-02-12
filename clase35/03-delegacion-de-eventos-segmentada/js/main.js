
const cardsContainer = document.querySelector('.cards-container');
// console.log(cardsContainer)

cardsContainer.addEventListener('click', e => {
    // console.dir(e.target);
    // console.dir(e.target.tagName);
    if (e.target.tagName === 'BUTTON') {
        e.target.innerHTML = 'Comprado!';
        e.target.disabled = true;
        const article = e.target.closest('article.card');
        article.classList.add('comprado');
        article.querySelector('h3').innerHTML += ' (comprado)';
    }

});
