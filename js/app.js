const regExEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const validarLogin = (evnt) => {
  const email = document.getElementById('email');
  const pass = document.getElementById('pass');
  evnt.preventDefault();
  if(!email.value || !pass.value){
    alert('Debe ingresar ambos campos.');
    return;
  }
  const emailLocal = localStorage.getItem('correo');
  const passLocal = localStorage.getItem('password');
  if(email.value !== emailLocal || pass.value !== passLocal){
    alert('Email o contraseña incorrecta.');
    return;
  }
  window.location.href = '/main.html';
}

const validarRegistro = (e) => {
  const email = document.getElementById('email');
  const nombre = document.getElementById('nombre');
  const user = document.getElementById('usuario');
  const pass = document.getElementById('password');
  const passCtrl = document.getElementById('pass-repeat');
  e.preventDefault();
  if(!email.value || !nombre.value || !user.value || !pass.value || !passCtrl.value){
  //   alert('Todos los campos son obligatorios');
    return;
  }
  console.log('AQUI1');
  if(!regExEmail.test(email.value)){
    //alert('El email ingresado no es válido');
    return;
  }
  if(pass.value !== passCtrl.value){
    //alert('Ambras contraseñas deben ser iguales');
    return;
  }
  if(!regExPass.test(pass.value)){
    //alert('La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.');
    return;
  }
  localStorage.setItem('correo', email.value);
  localStorage.setItem('usuario', user.value);
  localStorage.setItem('password', pass.value);
  window.location.href = '/index.html';
}

// boton de cerrar sesion para limpiar local storage
// validacion de usuario existente

//
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()