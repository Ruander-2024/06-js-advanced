// SELECTION
const headerTitle = document.getElementById('header-title');
console.log(headerTitle);

const liTags = document.getElementsByTagName('li');
console.log(liTags);

const buttons = document.getElementsByClassName('button');
console.log(buttons);

const buttonClassElementsWithQuery = document.querySelectorAll('.button');
console.log(buttonClassElementsWithQuery);

console.log(buttons[0]);
console.log(buttons.namedItem('rome-btn'));

const firstParInDesc = document.querySelector('.description p');
console.log(firstParInDesc);

const allParInDesc = document.querySelectorAll('.description p');
console.log(allParInDesc);

const nthParInDesc = document.querySelectorAll('.description p')[1];
console.log(nthParInDesc);

// ATTRIBUTES
buttons.namedItem('rome-btn').style.color = 'red';
buttons.namedItem('rome-btn').style.backgroundColor = 'blue';

buttonClassElementsWithQuery[0].id = 'bp-btn'

buttons.namedItem('bp-btn').style.color = 'pink';

for (let i = 0 ; i < buttons.length; i++){
    if (i % 2 === 0) {
        buttons[i].style.fontFamily =  'sans-serif'
    }
};



// EVENTS


// ELEMENT MODIFICATION
