// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
const listahtml = document.getElementById("listaAmigos");

// Funcion para agregar un amigo a la lista desde el elemento input
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


// Funcion para seleccionar la lista del html, luego limpia el contenido antes de agregar los valores que existen dentro de la lista amigos
function listaDeAmigos(amigosLista) {
    
    console.log(amigosLista.length);
    listahtml.innerHTML = "";   
    
    for(let i = 0; i < amigosLista.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `${amigos[i]}`;
        listahtml.appendChild(li);
    } 
    
}


// Funcion para sortear al amigo ganador, tomando en cuenta la longitud de la lista, luego elije uno al azar y finalmente lo muestra en el html con diferente color
function sortearAmigo(){
    const longitudLista = amigos.length;
    let numeroGenerado = Math.floor(Math.random()*longitudLista);
    let li = document.createElement("li"); 

    if(longitudLista > 1){

        listahtml.innerHTML = "";
        li.innerHTML = `El amigo secreto es: ${amigos[numeroGenerado]}`;
        li.style.color = "green";
        listahtml.appendChild(li);

    }else{
        alert("Debe haber al menos dos nombres en la lista");
    }

}


// FUncion para limpiar la caja del input
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}