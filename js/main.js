/*
//login con alert
const go = () => { 
  if (document.form.password.value ==='12345678' &&  document.form.login.value ==='hola@gmail.com'){ 
    window.open('index2.html') //abre página index si se pone correcto
    } 
    else{ 
      alert("Porfavor ingrese, correo electrónico y contraseña correctos."); 
    } 
  }
*/

//Perfil

//correo electronico
const user = document.getElementById("exampleInputEmail1").value;
const correo = document.getElementById("correo");
correo.innerHtml = user;

//tarjeta
const boton = document.getElementById('btn');
boton.addEventListener('click' ,() =>{
  let comments = document.getElementById('comment').value;
  document.getElementById('comment'). value = "";
  const cont = document.getElementById('cont');
  const newComments = document.createElement('div');
  let textNewComment =  document.createTextNode(comments);
  const contenedorElemento =  document.createElement('p')
  contenedorElemento.appendChild(textNewComment);
  newComments.appendChild(contenedorElemento);
  cont.appendChild(newComments) ;
});