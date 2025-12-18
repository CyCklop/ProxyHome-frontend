function guardarInfo(){
    localStorage.setItem('nombreUsuario', document.getElementById('username').value);
    localStorage.setItem('emailUsuario', document.getElementById('usermail').value);

    window.location.href='/pages/user.html';
}

function mostrarInfo(){
    document.getElementById('mostrarNom').innerText = "Bienvenido " + localStorage.getItem("nombreUsuario");
    document.getElementById('mostrarMail').innerText = "Correo electronico: "+ localStorage.getItem("emailUsuario");
}