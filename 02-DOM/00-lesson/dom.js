// SELECTION
const headerTitle = document.getElementById('header-title'); // ID alapján kiválasztott header-title
console.log(headerTitle);

const liTags = document.getElementsByTagName('li'); // Tag alapján kiválasztott li
console.log(liTags);

const buttonClassElements = document.getElementsByClassName('button'); // Class alapján kiválasztott button
console.log(buttonClassElements);

const buttonClassElementsWithQuery = document.querySelectorAll('.button'); // Query módszerrel kiválasztott button class-ok
console.log(buttonClassElementsWithQuery);

console.log(buttonClassElements[0]); // 0. indexű button
console.log(buttonClassElementsWithQuery[0]); // 0. indexű button

console.log(buttonClassElements.namedItem('rome-btn')); // A kiválasztott gombokon belüli rome-btn-el ellátott gomb

const firstParInDesc = document.querySelector('.description p'); // Description class-on belüli első p tag , első paragrafus a description osztályban
console.log(firstParInDesc);

const allParInDesc = document.querySelectorAll('.description p'); // Description class-on belüli összes p tag
console.log(allParInDesc);

const nthParInDesc = document.querySelectorAll('.description p')[1]; // Description class-on belüli 1. indexű p tag ,  N. paragrafus a description osztályban
console.log(nthParInDesc);



// ATTRIBUTES

buttonClassElements.namedItem('rome-btn').style.color = 'red'; // A rome-btn ID-val ellátott gomb színét pirosra színezzük

buttonClassElements.namedItem('rome-btn').style.backgroundColor = 'blue'; // A hátterét meg kékre állítjuk

buttonClassElementsWithQuery[0].id = 'bp-btn';


console.log('---innerHTML---');
console.log(firstParInDesc.innerHTML);
console.log('---innerText---');
console.log(firstParInDesc.innerText);
console.log('---textContent---');
console.log(firstParInDesc.textContent);

for(let i = 0; i < buttonClassElements.length; i++){
    if(i % 2 === 0){
        buttonClassElements[i].style.fontFamily = 'sans-serif'
    }
}

// EVENTS

// function clickMeFunc() {                                    // Kattints rám funkció    ,    használjuk
//     alert('Hello from Budapest, you clicked me!');
// };

// buttonClassElements[1].onclick = function(){                // Elavult, már nem használjuk
//     alert('Hello from Rome, you clicked me!');
// };

// buttonClassElements[2].addEventListener('click', () =>{      // használjuk
//     alert('Hello Paris, you clicked me!');
// });


for (const button of buttonClassElements){
    button.addEventListener('click', (event) =>{
        // console.log(event);
        alert(`Hello from ${event.target.innerText}, you clicked me!`);
    });
}

// ELEMENT MODIFICATION

// Létrehozás

let londonBtn = document.createElement('button'); // Egy tag létrehozása       LondonGomb
londonBtn.innerText = 'London';
londonBtn.className = 'button';

// Megfelelő helyre beillesztés

document.querySelector('.buttons').appendChild(londonBtn);

for (const button of buttonClassElements){
    button.addEventListener('click', (event) =>{
        // console.log(event);
        alert(Hello from ${event.target.innerText}, you clicked me!);
    });
}

console.log('--htmlCollection--');
console.log(buttonClassElements);
console.log('--nodeList--');
console.log(buttonClassElementsWithQuery);

console.log('--childNodes--');
console.log(document.querySelector('.buttons').children);
console.log(document.querySelector('.buttons').childNodes)