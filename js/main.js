'use strict'

const select = document.querySelector('.js-select');
const raza1= document.querySelector('.js-raza1');
const raza2= document.querySelector('.js-raza2');
const raza3= document.querySelector('.js-raza3');
const raza4= document.querySelector('.js-raza4');
const raza5= document.querySelector('.js-raza5');
const button2= document.querySelector('.js-button2');



select.addEventListener('click', () => {
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