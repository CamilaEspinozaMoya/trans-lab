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
//validar que el textarea tenga un comentario
if(comments.length === 0 || comments === null){
  alert ('Debes ingresar un mensaje');
  return false;
}

//nodos de texto del textarea
let textNewComment = document.createTextNode(comments);

const contenedorElemento = document.createElement ('p');
contenedorElemento.appendChild(textNewComment);
newComments.appendChild(chck);
newComments.appendChild(trash);
newComments.appendChild(heart);
newComments.appendChild(contenedorElemento);

cont.appendChild(newComments);

