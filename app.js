let listaDeAmigos = [];

function amigosIngresados() {
    let nombre = document.getElementById('amigo');
    let nombreLimpio = nombre.value.trim(); 

 
    if (nombreLimpio === "") {
        alert("El Nombre no debe estar vacío");
        return; 
    }

    listaDeAmigos.push(nombreLimpio);

    let li = document.createElement('li');
    li.textContent = nombreLimpio;
    document.getElementById('listaAmigos').appendChild(li);

  
    nombre.value = '';
}

function sortearAmigos() {
 
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }


    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior
    let li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);
}


document.querySelector(".button-add").addEventListener("click", amigosIngresados);
document.querySelector(".button-draw").addEventListener("click", sortearAmigos);
