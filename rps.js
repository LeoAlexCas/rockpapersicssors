let playerChoice;
let cpuChoice;

function playerSelection(n) {
    switch(n) {
        case 1: 
            playerChoice = 'piedra';
            document.getElementById("tu").innerHTML = "Piedra";
            break;
        case 2:
            playerChoice = 'papel';
            document.getElementById("tu").innerHTML = "Papel";
            break;
        case 3:
            playerChoice = 'tijera';
            document.getElementById("tu").innerHTML = "Tijeras";
            break;
        default:
            alert('Error');
            location.reload();
    }
}

function results() {
    if( playerChoice == 'piedra' && cpuChoice == 'piedra' ||
        playerChoice == 'papel' && cpuChoice == 'papel'   ||
        playerChoice == 'tijera' && cpuChoice == 'tijera') {
        alert('Has empatado');
    }
    if( playerChoice == 'piedra' && cpuChoice == 'papel' ||
        playerChoice == 'papel' && cpuChoice == 'tijera' ||
        playerChoice == 'tijera' && cpuChoice == 'piedra') {
        alert('has perdido');
    }
    if( playerChoice == 'piedra' && cpuChoice == 'tijera'||
        playerChoice == 'papel' && cpuChoice == 'piedra' ||
        playerChoice == 'tijera' && cpuChoice == 'papel') {
        alert('has ganado');
    }
}

function rps () {
    if(!playerChoice) {
        alert('Debes seleccionar una opcion');   
    } else {
        let cpuSelector = Math.floor(Math.random()*10);
    
        if(cpuSelector < 3) {
            cpuChoice = 'piedra';
        } else if (cpuSelector < 6) {
            cpuChoice = 'papel';
        } else if (cpuSelector < 9) {
            cpuChoice = 'tijera';
        } 

        switch(cpuChoice) {
            case 'piedra':
                document.getElementById("resultadoPc").innerHTML = "Piedra";
                break;
            case 'papel':
                document.getElementById("resultadoPc").innerHTML = "Papel";
                break;
            case 'tijera':
                document.getElementById("resultadoPc").innerHTML = "Tijeras";
                break;
        }

        setTimeout(function() {
            results();
        },1000)
    }
}