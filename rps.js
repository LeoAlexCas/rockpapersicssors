var randomNumber = Math.random()*10;
var random = Math.floor(randomNumber);
var rival;

var botonPiedra = document.getElementById("piedra");
var botonPapel = document.getElementById("papel");
var botonTijeras = document.getElementById("tijeras");

var jugador;

var chosenByCpu = document.getElementById("resultadoPc");
var chosenByPlayer = document.getElementById("tu");

botonPiedra.addEventListener("click", seleccionPiedra);
botonPapel.addEventListener("click", seleccionPapel);
botonTijeras.addEventListener("click", seleccionTijeras);

var play = document.getElementById("jugar");
play.addEventListener("click", winOrLose);

function seleccionPiedra(){
    jugador = "piedra";
    chosenByPlayer.innerHTML = "Piedra";

}

function seleccionPapel(){
    jugador = "papel";
    chosenByPlayer.innerHTML = "Papel";
}

function seleccionTijeras(){
    jugador = "tijeras";
    chosenByPlayer.innerHTML = "Tijeras";
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

function winOrLose () {
    cpuSelection();

    if(jugador == "piedra" && rival == "papel"){
        chosenByCpu.innerHTML = "Papel";
        setTimeout(alert("Has perdido!"),1000); 
    } else if(jugador == "piedra" && rival == "tijeras"){
        chosenByCpu.innerHTML = "Tijeras";
        setTimeout(alert("Has ganado!"),1000);
    } else if(jugador == "papel" && rival == "tijeras") {
        chosenByCpu.innerHTML = "Tijeras";
        setTimeout(alert("Has perdido!"),1000);
    } else if(jugador == "papel" && rival == "piedra") {
        chosenByCpu.innerHTML = "Piedra";
        setTimeout(alert("Has ganado!"),1000);
    } else if(jugador == "tijeras" && rival == "papel"){
        chosenByCpu.innerHTML = "Papel";
        setTimeout(alert("Has ganado!"),1000);
    } else if(jugador == "tijeras" && rival == "piedra"){
        chosenByCpu.innerHTML = "Piedra";
        setTimeout(alert("Has perdido!"),1000);
    } else {
        chosenByCpu.innerHTML = rival;
        alert("Empate! " + jugador + " " + "vs " + rival);
    }
}