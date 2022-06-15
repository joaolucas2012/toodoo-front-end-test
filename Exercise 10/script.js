'use strict';

/********** Refactoring button variables **********/
const btnFirstOne = document.querySelector('#firstOne');
const btnSecondOne = document.querySelector('#secondOne');
/*******************************************/

/********** Defining variables **********/
const firstOne = 'sorvete de chocolate';
const secondOne = 'sorvete de flocos';
/*******************************************/

/********** Functions **********/
const checkFirstOne = () => {
    firstOne === 'sorvete de chocolate' ?
    alert('Amo sorvete de chocolate') :
    alert('Prefiro outros sabores');
}

const checkSecondOne = () => {
    secondOne === 'sorvete de chocolate' ?
    alert('Amo sorvete de chocolate') :
    alert('Prefiro outros sabores');
}
/*******************************************/

btnFirstOne.addEventListener('click', checkFirstOne);
btnSecondOne.addEventListener('click', checkSecondOne);
