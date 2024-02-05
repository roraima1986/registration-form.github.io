document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar el formulario y agregar un listener para el evento submit
    const form = document.querySelector('.form')

    form.addEventListener('submit', (event) => {
        // Prevenir que el formulario se envie por defecto
        event.preventDefault()

        // Seleccionar todos los inputs del formulario
        let formInput = document.querySelectorAll('.form__input')

        formInput.forEach((input) => {         
            
            const formValidate = input.nextElementSibling; // Seleccionar el mensaje de error directamente

            if (input.value === "") {  
                input.classList.add('invalid')
                formValidate.style.display = 'block'
            } else {
                input.classList.remove('invalid');
                formValidate.style.display = 'none' // Ocultar el mensaje de error
            }
        })

        // Validacion de correo
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const email = document.querySelector('#email-address').value
        const validateEmail = document.querySelector('.form__validate--email')

        if(!emailRegex.test(email)) {            
            validateEmail.style.display = "block"
        } else {
            validateEmail.style.display = "none"
        }
    })
})

