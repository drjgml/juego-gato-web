//Control de turnos
let matrizTurnos = new Array(3);
matrizTurnos[0] = new Array(3);
matrizTurnos[1] = new Array(3);
matrizTurnos[2] = new Array(3);

let tUsuario = prompt("Introduce la letra con la que deseas jugar, [X - O] ");
let tMaquina = tUsuario == "X" ? "O" : "X";

function turnoUsuario(button){
    //setear imagen
    button.innerHTML = '<img src="./img/'+tUsuario+'.webp">';

    let positionsList = getPoitionsList(button.id.split(""));
    setearTurno(positionsList[0], positionsList[1], tUsuario);

}

function turnoMaquina(){
    let idButton = "22";
    //verificar juego terminado
    //generar tirada PPP
    //generar tirada PPG
    //generar tirada random

    //setear en matriz

    //obtener boton por id
    let buttonMaquina = document.getElementById(idButton);
    //setear imagen
    buttonMaquina.innerHTML = '<img src="./img/'+tMaquina+'.webp">';
}

/*
function getPositions(button){
    return button.id.split("");
}*/

function getPoitionsList(positionsList){    
    positionsList[0] = parseInt(positionsList[0]);
    positionsList[1] = parseInt(positionsList[1]);

    return positionsList;
}

function setearTurno(x, y, turno){
    matrizTurnos[x][y] = turno;
}

//generar tirada con random (x,y)
//generar tirada de acuero con PPG (h,v,d)
//generar tirada de acuerdo con PPP (h,v,d)
//verificar juego terminado
