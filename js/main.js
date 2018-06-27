//login con alert
const go = () => { 
  if (document.form.password.value ==='12345678' &&  document.form.login.value ==='hola@gmail.com'){ 
    window.open('index2.html') //abre página index si se pone correcto
    } 
    else{ 
      alert("Porfavor ingrese, correo electrónico y contraseña correctos."); 
    } 
  }

