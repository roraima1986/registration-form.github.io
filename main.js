document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionar el formulario y agregar un listener para el evento submit
    const form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
      // Prevenir que el formulario se envíe por defecto
      event.preventDefault();
  
      // Resetear los mensajes de error y estilos en cada envío
      resetFormErrors();
  
      // Obtener los valores de los campos del formulario
      const firstName = document.querySelector('#first-name').value;
      const lastName = document.querySelector('#last-name').value;
      const emailAddress = document.querySelector('#email-address').value;
      const password = document.querySelector('#password').value;
  
      // Validación para cada campo
      if (!firstName.trim()) {
        displayError('first-name', 'First Name cannot be empty');
      }
  
      if (!lastName.trim()) {
        displayError('last-name', 'Last Name cannot be empty');
      }
  
      if (!validateEmail(emailAddress)) {
        displayError('email-address', 'Looks like this is not an email');
      }
  
      if (!password.trim()) {
        displayError('password', 'Password cannot be empty');
      }  
      
      if (!formHasErrors()) {
        console.log('Formulario enviado exitosamente!');
        // Aquí podrías enviar el formulario a través de AJAX u otras operaciones
      }
    });
  
    // Función para resetear los mensajes de error y estilos
    function resetFormErrors() {
      const errorMessages = document.querySelectorAll('.form__error');
      const errorIcons = document.querySelectorAll('.form__icon-error');
  
      errorMessages.forEach((message) => (message.style.display = 'none'));
      errorIcons.forEach((icon) => (icon.style.display = 'none'));
    }
  
    // Función para mostrar mensajes de error
    function displayError(fieldName, errorMessage) {
      const errorElement = document.querySelector(`#${fieldName} + .form__error`);
      const errorIcon = document.querySelector(`#${fieldName} + .form__icon-error`);
  
      errorElement.textContent = errorMessage;
      errorElement.style.display = 'block';
      errorIcon.style.display = 'block';
    }
  
    // Función para validar el formato de correo electrónico
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
    // Función para verificar si hay errores en el formulario
    function formHasErrors() {
      const errorMessages = document.querySelectorAll('.form__error');
      return Array.from(errorMessages).some((message) => message.style.display === 'block');
    }
  });