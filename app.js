// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
    amigoNombre = document.getElementById('amigo').value;
    if(amigoNombre == 0){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(amigoNombre);
        limpiarCaja()
        console.log(amigos);
    }

    
}

function sortearAmigo(){

}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}