// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//declaro array
let participantes = [];


function agregarAmigo() {
    //agrego valor al array
    participantes.push(document.getElementById("amigo").value);
    //limpio el input
    document.getElementById("amigo").value="";
    //procedo a imprimir la lisa en pantalla
    listarParticipantes()
    return;
    }

function listarParticipantes(){
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "<li>"+ participantes[participantes.length-1]+"</li>"+lista.innerHTML;
    /* Segun el ejercicio debia recorrer el array con un for pero se me hizo mucho mas practico y 
    optimizado una funcion sin embarg dejo el for comentado
    lista.innerHTML ="";
   for (let i = 0; i< participantes.length; i++) {
       lista.innerHTML = "<li>"+ participantes[i]+"</li>"+lista.innerHTML;
       }
    */
    return;
}


