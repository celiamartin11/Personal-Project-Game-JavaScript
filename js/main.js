'use strict'

const ejercito_mal_fuerza = [2,2,2,3,5];
const gameButton = document.querySelector(".battle");
const userTeam = document.querySelector(".select");
const start = document.querySelector(".start");
const playerPoints = document.querySelector(".player-points");
const pcPoints = document.querySelector(".pc-points");

gameButton.addEventListener("click", (event) => {
  clickLogic(event);
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
  if(ejercito_mal_fuerza[numRandom-1] > userTeam.value) {
    printResult("Ha ganado el Ejército del Mal! Vuelve a Intentarlo.");
  } else if(ejercito_mal_fuerza[numRandom-1] < userTeam.value) {
    printResult("Ha ganado el Ejército del Bien! Enhorabuena.");
  } else {
    printResult("Empate.");
	}
}

