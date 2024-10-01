// SELECTION
const headerTitle = document.getElementById('header-title') // ID alapján kiválasztott header title
console.log(headerTitle);

const liTag = document.getElementsByTagName('li'); // Tag alapján kiválasztott li
console.log(liTag);

const buttonClassElements = document.getElementsByClassName('button'); // Class alapján kiválasztott button
console.log(buttonClassElements);

const buttonClassElementsWithQuery = document.querySelectorAll('.button'); //  Query módszerrel kiválasztott button class-ok
console.log(buttonClassElementsWithQuery);

console.log(buttonClassElements[0]); // 0. indexű button
console.log(buttonClassElementsWithQuery[0]); // 0. indexű button

console.log(buttonClassElements.namedItem('rome-btn')); // A kiválasztott gombokon belüli rome-btn-el ellátott gomb

const firstParInDesc = document.querySelector('.description p'); // Description class belüli első p tag
console.log(firstParInDesc);

const allParInDesc = document.querySelectorAll('.description p'); // Description class-on belüli összes p tag
console.log(allParInDesc);

const nthParInDesc = document.querySelectorAll('.description p')[1]; // Description class-on belüli 1. indexű p tag
console.log(nthParInDesc);
// ATTRIBUTES
buttonClassElements.namedItem('rome-btn').style.color = 'red'; // A rome-btn ID-val ellátott gomb szinét piros-ra szinezzük

buttonClassElements.namedItem('rome-btn').style.background = 'blue'; // A hátterét meg kékre állitjuk

buttonClassElementsWithQuery[0].id ='bt-btn';

console.log(firstParInDesc.innerHTML);


for(let i = 0; i < buttonClassElements.length; i++){
    if(i % 2 === 0){
        buttonClassElements[i].style.fontFamily = 'sans-serif';
    }
}

// EVENTS


// ELEMENT MODIFICATION
