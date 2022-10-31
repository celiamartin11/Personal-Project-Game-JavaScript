const ejercito_mal_punto = [1,2,3,4,5];
const gameButton = document.querySelector(".js-start-game");
const userTeam = document.querySelector(".js-select");
const messageBanner = document.querySelector(".js-game-info");

gameButton.addEventListener("click", () => {
  
  let numRandom = getRandomNumber(5);

  if(ejercito_mal_punto[numRandom-1] > userTeam.value) {
    messageBanner.innerHTML = "Ha ganado el Ejército del Mal! Vuelve a Intentarlo.";
  } else if(ejercito_mal_punto[numRandom-1] < userTeam.value) {
    messageBanner.innerHTML = "Ha ganado el Ejército del Bien! Enhorabuena.";
  } else {
    messageBanner.innerHTML = "Empate.";
  }

});

function getRandomNumber(max) { 
	return Math.ceil(Math.random() * max); 
} 