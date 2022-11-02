'use strict'

const ejercito_mal_puntos = [2,2,2,3,5];
const gameButton = document.querySelector(".battle");
const userTeam = document.querySelector(".select");
const start = document.querySelector(".start");

gameButton.addEventListener("click", () => {
  let numRandom = getRandomNumber(5);
  if(ejercito_mal_puntos[numRandom-1] > userTeam.value) {
	  start.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
  } else if(ejercito_mal_puntos[numRandom-1] < userTeam.value) {
    start.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
  } else {
    start.innerHTML = "Empate.";
	}
});

function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
} 