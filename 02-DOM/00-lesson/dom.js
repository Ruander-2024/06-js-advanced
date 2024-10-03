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


console.log('--innerHTML--');
console.log(firstParInDesc.innerHTML);
console.log('--innerText--');
console.log(firstParInDesc.innerText);
console.log('--textContent--');
console.log(firstParInDesc.textContent);

for (let i = 0 ; i < buttons.length; i++){
    if (i % 2 === 0) {
        buttons[i].style.fontFamily =  'sans-serif'
    }
};



// EVENTS
//function clickMeFunc(){
 //   alert('hello u clicket me')
//};

//buttons[1].onclick = function (){ 
    /*alert('Pin-Pom')   //páromtól kértem egy random szót
};

buttons[2].addEventListener('click', () =>{
    alert('Ne nekem kelljen már gondolkodni, jó?') // ez is tőle van
});*/

for (const button of buttons){
    button.addEventListener('click', (event) => {
    alert(`Hello from ${event.target.innerText}, you clicked me`)
    })
}; 

// ELEMENT MODIFICATION
let londonBtn = document.createElement('button'); // Egy tag létrehozása       LondonGomb
londonBtn.innerText = 'London';
londonBtn.className = 'button';

// Megfelelő helyre beillesztés

document.querySelector('.buttons').appendChild(londonBtn);

for (const button of buttonClassElements){
    button.addEventListener('click', (event) =>{
        // console.log(event);
        alert(`Hello from ${event.target.innerText}, you clicked me!`);
    });
}

console.log('--htmlCollection--');
console.log(buttonClassElements);
console.log('--nodeList--');
console.log(buttonClassElementsWithQuery);

console.log('--childNodes--');
console.log(document.querySelector('.buttons').children);
console.log(document.querySelector('.buttons').childNodes);