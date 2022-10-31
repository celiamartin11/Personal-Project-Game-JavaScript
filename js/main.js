'use strict'

const select = document.querySelector('.js-select');
const button2= document.querySelector('.js-button2');

button.addEventListener('click', () => {
    if (nameInput.value) {
    generatedGreet.innerHTML =`¡Hola ${nameInput.value}!`; 
      }
    else{
      generatedGreet.innerHTML = 'Dime tu nombre'
    }
  });


/*function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }