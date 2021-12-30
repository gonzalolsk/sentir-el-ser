const form = document.querySelector('.login-form');
const email = form.email;
const password = form.password;

const isEmpty = (field) => {
    return field.value.trim().length === 0;
}
const shortPass = (pass) => {
    return pass.value.length<6
}
const invalidEmail = (email) => {
emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   return !emailRegex.test(email)
    }

const generateError = (field, msg) => {
    const span = field.nextElementSibling;
    span.innerHTML = msg
    field.classList.add('is-invalid')
}
const removeError = (field) => {
    const span = field.nextElementSibling;
    span.innerHTML = ""
    field.classList.remove('is-invalid')
}


password.addEventListener('input', (event) => {
    if(isEmpty(password)){
        event.target.style.background = 'pink';
        generateError(password, 'Debes escribir una <b>Contraseña</b>')
    }
    else if(!isEmpty(password) && shortPass(password)) {
        event.target.style.background = 'pink';
        generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
    }
    else {
        event.target.style.background = '';
        removeError(password)
    }
    ;})

    email.addEventListener('input', (event) => {
        if(isEmpty(email)){
            event.target.style.background = 'pink';
            generateError(email, 'Debes escribir un <b>E-mail</b>')
        }
        else if(!isEmpty(email) && invalidEmail(email.value)) {
            console.log("email invalido");
            event.target.style.background = 'pink';
            generateError(email, 'Tu <b>E-mail</b> debe ser válido')
        }
        else {
            event.target.style.background = '';
            removeError(email)
        }
        ;})



        // VALIDATION ON SUBMIT
form.addEventListener('submit', function(event){
event.preventDefault();

    if (isEmpty(email)) {
        generateError(email, 'Debes completar tu <b>Usuario</b>')
    };

    if (!isEmpty(email) && invalidEmail(email.value)){
        generateError(email, 'Tu <b>Usuario</b> debe tener un mínimo de 2 caracteres')
    };

    if (!isEmpty(email) && !invalidEmail(email.value)){
        removeError(email)};

    if (isEmpty(password)) {
        generateError(password, 'Debes completar tu <b>Contraseña</b>')
    };

    if (!isEmpty(password) && shortPass(password)){
        generateError(password, 'Tu <b>Contraseña</b> debe tener un mínimo de 6 caracteres')
    };

    if(!isEmpty(password) && !shortPass(password)){
        removeError(password)
    }
    if(!isEmpty(email) && !invalidEmail(email.value) && !isEmpty(password) && !shortPass(password)){

        event.target.submit();

    }
})
