'use strict';

/********** Refactoring variables **********/
const btnOpenAlert = document.querySelector('.button');
/*******************************************/

/**************** Functions ****************/
// Function to open the alert
const openAlert = () => {
    alert('Alerta! Resolução concluída! 😁');
}
/*******************************************/

// Add an event listener to the button
btnOpenAlert.addEventListener('click', openAlert);