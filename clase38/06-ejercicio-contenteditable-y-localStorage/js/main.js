const values = document.querySelectorAll('.value');
const btnEdit = document.getElementById('btn-edit');
const btnSave = document.getElementById('btn-save');

btnEdit.addEventListener('click', () => {
    btnEdit.disabled = true;
    btnSave.disabled = false;
    values.forEach(element => element.contentEditable = true );
    values[0].focus();
});

btnSave.addEventListener('click', () => {
    btnSave.disabled = true;
    btnEdit.disabled = false;
    values.forEach(element => element.contentEditable = false );
});

document.querySelector('.customer-container').addEventListener('input', e => {
    console.log(e.target.innerHTML);
});