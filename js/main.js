'use strict'

const ejercito_mal_fuerza = [2,2,2,3,5];
const gameButton = document.querySelector(".js-battle");
const userTeam = document.querySelector(".select");
const start = document.querySelector(".start");
const playerPoints = document.querySelector(".player-points");
const pcPoints = document.querySelector(".pc-points");
const rounds = document.querySelector(".rounds");
const reset = document.querySelector(".js-reset");
let countPlayerPoints = 0;
let countPcPoints = 0;
let gameCount = 0;

gameButton.addEventListener("click", (event) => {
  clickLogic(event);
});

reset.addEventListener("click", (event) =>  {
  event.preventDefault();
  countPlayerPoints = 0;
  countPcPoints = 0;
  gameCount = 0;
  playerPoints.innerHTML = "Puntos de la jugadora = " + countPlayerPoints;
  rounds.innerHTML = "Número de partidas: " + gameCount;
  pcPoints.innerHTML = "Puntos del ordenador = " + countPcPoints;
  start.innerHTML = "¡Comienza la batalla!";
  userTeam.value = "default";
  gameButton.disabled = false;
});

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
} 

function printResult (textResult) {
  start.innerHTML =  textResult;
}

function clickLogic (event) {
  event.preventDefault();
  let numRandom = getRandomNumber(5);
  gameCount += 1;
  rounds.innerHTML = "Número de partidas: " + gameCount;
  if(ejercito_mal_fuerza[numRandom-1] > userTeam.value) {
    printResult("Ha ganado el Ejército del Mal! Vuelve a Intentarlo.");
    countPcPoints += 1; 
    pcPoints.innerHTML = "Puntos del ordenador =" + countPcPoints;
  } else if(ejercito_mal_fuerza[numRandom-1] < userTeam.value) {
    printResult("Ha ganado el Ejército del Bien! Enhorabuena.");
    countPlayerPoints += 1;
    playerPoints.innerHTML = "Puntos de la jugadora =" +countPlayerPoints;
  } else {
    printResult("Empate.");
	}
  checkGameCount();
}

function checkGameCount() {
  if(gameCount == 10) {
    gameButton.disabled = true;
  }
}
