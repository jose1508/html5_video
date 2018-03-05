
$(document).on('click','.active', function (event) {
    var opcion = $(this);
    var type = opcion.data('type');

    if(type == 1){
        $("#video").attr("src","primerVideo.mp4");
    }
    if(type == 2){
        $("#video").attr("src","segundoVideo.mp4");
    }
    if(type == 3){
        $("#video").attr("src","tercerVideo.mp4");
    }
});
function local() {
    var usuario = prompt("¿Nombre de usuario?", "");
    if (usuario != null){
        localStorage.setItem("Nombre", usuario);
    
    }
    else {
    alert("Nombre de usuario no valido");
    }
    }
function login(){
    var usuario = prompt("Nombre de usuario", "");
   
    if(localStorage.getItem(usuario) === null){
        window.location.href='login.html'
    }else{
             var pass = localStorage.getItem(usuario);
           alert("Usuario: " + usuario + " existe y tiene el pass: " + pass);
           document.getElementById("title").innerText = "Hola: " + usuario ;

    }

}

