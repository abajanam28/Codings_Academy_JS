const btnSearchElement = document.querySelector('.btn-search');
// btnSearchElement.addEventListener('click', () => console.log('Le diste click al boton'))
// btnSearchElement.addEventListener('dblclick', () => console.log('le diste doble click'))
btnSearchElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Enviaste los datos de tu formulario');
})

const formSearchElement = document.getElementById('formularioSearch');
formSearchElement.addEventListener('submit',(event) => {
    event.preventDefault()
    console.log('Enviaste los datos de tu formulario')

})

const seccionNavegation = document.getElementById('navegacion');
seccionNavegation.addEventListener('mousemove', () => console.log('soy el mouse moviendose'));

const inputSearchElement = document.getElementById('inputSearch');
// inputSearchElement.addEventListener('input', () => console.log('estas escribiendo'));
// inputSearchElement.addEventListener('change', () => console.log('estas escribiendo v2'));

inputSearchElement.addEventListener('keyup', (event) => console.log('Soltaste la tecla', event.target.value));

const selecOptionElement = document.getElementById('select-options');
selecOptionElement.addEventListener('change', () => console.log('Hasa selecionado la opcion'));

window.addEventListener('scroll', () => {
    console.log("Estas haciendo scroll");

    if (window.scrollY >= 1000) {
        document.body.style.backgroundColor = '#000';
    } else if (window.scrollY < 1000 ){
        document.body.style.backgroundColor = '#fff'
    }
});

const btnScrolltop = document.querySelector('.btn-scroll-top');
btnScrolltop.addEventListener('click', () => window.scrollTo(0, 0));
