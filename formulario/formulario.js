
let formElement = document.getElementById('formulario');
formElement.addEventListener('submit', event => {
    // previene el efecto de recargar la pagina
    event.preventDefault();

    let inputNameElement = document.getElementById('nombre');
    let valueInputName = inputNameElement.value.trim();
    // validacion campo nombre
    if (!valueInputName){
        alert('el campo nombre es requerido');
        inputNameElement.classList.add('is-invalid')
        return;
    } else {
        inputNameElement.classList.remove('is-invalid')
        inputNameElement.classList.add('is-valid')
    }

    // validacion campo correo
    let valueInputEmail = document.getElementById('correo').value.trim();
    if(!valueInputEmail){
        alert('El campo correo es requerido');
        return;
    } else {
        inputNameElement.classList.remove('is-invalid')
        inputNameElement.classList.add('is-valid')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(valueInputEmail)){
        alert('El correo no es valido')
        return;
    }

    // validacion campo numero de telefono 
    let valueInputPhone = document.getElementById('telefono').value.trim();
        if (!valueInputPhone){
        alert('El campo de telefono no es valido')
        return;
    } else {
        inputNameElement.classList.remove('is-invalid')
        inputNameElement.classList.add('is-valid')
    }

    const phoneNumberRegex = /^\+?\d{1,3}[-\s]?\d{6,12}$/;
    if (!phoneNumberRegex.test(valueInputPhone)){
        alert('El numero de telefono no es valido ❌');
        return;
    } else {
        inputNameElement.classList.remove('is-invalid')
        inputNameElement.classList.add('is-valid')
    }
    // Validacion de select 
    let inputCountryElement = document.getElementById('pais');
    let valueInputCountry = inputCountryElement.value.trim();

    const listCountries = Array.from(inputCountryElement.children).map(option =>option.value).slice(1);
    console.log('listCountries', listCountries);
    if (!listCountries.includes(valueInputCountry)){
        alert('el pais no es valido');
        return;
    } else {
        inputNameElement.classList.remove('is-invalid')
        inputNameElement.classList.add('is-valid')
    }

    // Validacion de radio
    let ValueInputGender = document.querySelector('input[name="genero"]:checked')?.value;
    console.log("ValueInputGender", ValueInputGender);
    if(!ValueInputGender){
        alert('El campo de genero es requerido');
        return;
    }

    // validacion de checkbox
    let ValueInputLeer = document.getElementById('leer');
    if(!ValueInputLeer){
        alert('El campo leer es requerido');
        return;
    }

    // Validar campo comentarios
    let ValueInputCommetns = document.getElementById('comentarios').value.trim();
    if(!ValueInputCommetns){
        alert('El campo de comentarios es requeridos');
        return;
    }
    if (!ValueInputCommetns.length > 100){
        alert('El campo de comentarios debe tener en menos de 100 caracteres');
        return;
    }

    document.getElementById('mensaje-exitoso').innerText ='Enviaste los datos de tu formulario';
    alert('Enviaste los datos de tu formulario')
    formElement.reset();
});

