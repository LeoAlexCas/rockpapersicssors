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

cpuSelection();

function winOrLose () {
    if(jugador == "piedra" && rival == "papel"){
        chosenByCpu.innerHTML = "Papel";
        alert("Has perdido! (Piedra vs Papel)");
    } else if(jugador == "piedra" && rival == "tijeras"){
        chosenByCpu.innerHTML = "Tijeras";
        alert("Has ganado! (Piedra vs Tijeras)");
    } else if(jugador == "papel" && rival == "tijeras") {
        chosenByCpu.innerHTML = "Tijeras";
        alert("Has perdido! (Papel vs Tijeras)");
    } else if(jugador == "papel" && rival == "piedra") {
        chosenByCpu.innerHTML = "Piedra";
        alert("Has ganado! (Papel vs Piedra)");
    } else if(jugador == "tijeras" && rival == "papel"){
        chosenByCpu.innerHTML = "Papel";
        alert("Has ganado! (Tijeras vs Papel)");
    } else if(jugador == "tijeras" && rival == "piedra"){
        chosenByCpu.innerHTML = "Piedra";
        alert("Has perdido! (Tijeras vs Piedra)");
    } else {
        chosenByCpu.innerHTML = rival;
        alert("Empate! " + jugador + " " + "vs " + rival);
    }
}