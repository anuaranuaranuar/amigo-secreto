// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//declaro array
let participantes = [];


function agregarAmigo() {
    //verifico el input
    if (document.getElementById("amigo").value == "") {
        alert("ingrese el nombre de su amigo por favor");
    }

    else {
        //agrego valor al array
        participantes.push(document.getElementById("amigo").value);
        console.log(participantes);
        console.log(participantes.length);
        //limpio el input
        document.getElementById("amigo").value = "";
        //procedo a imprimir la lisa en pantalla
        listarParticipantes();
    }
    return;
}


var lista = document.querySelector("#listaAmigos"); 
function listarParticipantes() {
    
    lista.innerHTML = "<li>" + participantes[participantes.length - 1] + "</li>" + lista.innerHTML;
    /* Segun el ejercicio debia recorrer el array con un for pero se me hizo mucho mas practico y 
    optimizado una funcion sin embarg dejo el for comentado
    lista.innerHTML ="";
   for (let i = 0; i< participantes.length; i++) {
       lista.innerHTML = "<li>"+ participantes[i]+"</li>"+lista.innerHTML;
       }
    */
    return;
}



let boton = document.getElementById('botonAgregar');
//función para simular el clic del botón
function activarBotonConEnter(event) {
    //verifico si la tecla presionada es "Enter"
    if (event.key === 'Enter') {
        //activa el clic en el botón
        boton.click();
    }
}
// Escuchar el evento de tecla presionada en todo el documento
document.addEventListener('keydown', activarBotonConEnter);




function sortearAmigo() {
    //verificar array 
    if (participantes.length < 0) {
        alert("debe ingresar los nombres de sus amigos primero")
    }
    else {
        lista.innerHTML="";
        //generando numero random
        let Nrandom = Math.floor(Math.random()*participantes.length);
        //usar numero random para seleccionar participante del array y mostrarlo en pantalla
        let resultado = document.querySelector("#resultado");
        resultado.innerHTML = "El amigo secreto sorteado es: " +participantes[Nrandom];
    }
}

