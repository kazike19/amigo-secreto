// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
    amigoNombre = document.getElementById('amigo').value;
    if(amigoNombre == 0){
        alert("Por favor, inserte un nombre");
    }else{
        amigos.push(amigoNombre);
        limpiarCaja();
        console.log(amigos);
        listaDeAmigos(amigos);
    }

    
}

function listaDeAmigos(amigosLista) {
    let listahtml = document.getElementById("listaAmigos");
    console.log(amigosLista.length);
    listahtml.innerHTML = "";   
    for(let i = 0; i < amigosLista.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigosLista[i];
        listahtml.appendChild(li);
        //document.querySelector('#listaAmigos').value = `hola <li>${amigosLista[i]}</li>`;
    } 
    


    //document.querySelector('#listaAmigos').value = `${numeroUsuario}`;
    //document.querySelector.

    
}



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function sortearAmigo(){

}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';

}