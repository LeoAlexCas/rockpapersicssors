var randomNumber = Math.random()*10;
var random = Math.floor(randomNumber);
var rival;

var botonPiedra = document.getElementById("piedra");
var botonPapel = document.getElementById("papel");
var botonTijeras = document.getElementById("tijeras");

var jugador;

botonPiedra.addEventListener("click", seleccionPiedra);
botonPapel.addEventListener("click", seleccionPapel);
botonTijeras.addEventListener("click", seleccionTijeras);

function seleccionPiedra(){
    jugador = "piedra";
}

function seleccionPapel(){
    jugador = "papel";
}

function seleccionTijeras(){
    jugador = "tijeras";
}


function cpuSelection(){
    if(random == 1 || random == 3 || random == 5){
        rival = "piedra";
    } else if ( random == 2 || random == 7 || random == 8){
        rival = "papel";
    } else if (random == 4 || random == 6 || random == 9) {
        rival = "tijeras"
    } else {
        return false;
    }
}

