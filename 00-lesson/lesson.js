// ISMÉTLÉS
var x = 7;
console.log(x);
var x = 78;
console.log(x);

let y = 8;
y = 15;
console.log(y);

const z = '65';
// z = 34;
// console.log(z);

// HOISTING
// console.log(a);
// console.log(b);
// sayHello();

var a = 5;
let b = 114;

function sayHello(){
    console.log('Hello');
}

// SCOPE (HATÓKÖR)
let f = 'from Veszprém'; // globális scope

{
    let e = 123; // Block scope
    console.log(f); // Globális scope-val rendelkező változót ki tud iratni
    console.log(e);
}

// console.log(e); 
// Nem írja ki az e változó értékét

function logger() {
    let e = 'Hello';
    console.log(e, f);
    function insider() {
        let g = 'Dani';
        console.log(e, g, f);
    }
    insider();
    console.log(e);
}

// console.log(e);
logger();


// SHADOWING

let str = 'Krumpli';

let num = 50;

function logger2(){
    let str = 'Nudli';
    console.log(str + num);
}
logger2();

console.log(str + num);

const book = {
    title: 'Az',
};

const book2 = book;

book.title = 'Ez';

console.log(book);
console.log(book2);

//Filter 
// const newArray = array.filter(callback(element, index, array));
// callback - Arrow function
// element - A tömb aktuális eleme
// index - (opcionális) az aktuális elem indexe
// array - (opcionális) maga a tömb, amelyen lefut

console.log('-----------------Filter------------')

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(number => number % 2 === 0); //páros számok

console.log(evenNumbers)  // kiszürtük a páros számokat

const people = [        // emberek
    {name: 'John', age: 25},
    {name: 'Jane', age: 17},
    {name: 'Mike', age: 20},
    {name: 'Sarah', age: 30}
];

const adults = people.filter(person => person.age >= 21); // felnőttek

console.log(adults);

const words = ['apple', 'banana', 'cat', 'dog', 'elephant'];

const longWords = words.filter(word => word .length > 4);

console.log(longWords);

const numbers2 = [1, 2, 3, 4, 3, 2, 5];
const uniquNumbers = numbers2.filter((value, index, self) => self.indexOf(value) === index);
console.log(uniquNumbers)


//indexof 

// Array.indexOf(searchElement, fromIndex);
// searchElement - Az keresett elem, amelynek az indexét szeretnénk megtalálni
// fromIndex - (opcionális) Az index, ahonnan kezdődik a keresés. Alapértelmezetten 0
console.log('-----------------indexof------------')

const numbers3 = [10, 20, 30, 40, 50, 30]

const index = numbers3.indexOf(30);

const index2 = numbers3.indexOf(60)

console.log(index)
console.log(index2)

const index3 = numbers3.indexOf(30, 3)

console.log(index3)

const index4 = numbers3.indexOf(30);

console.log(index4)

const string = 'Hello World'

const strIndex  = string.indexOf('o')

console.log(strIndex);

const strIndex2  = string.indexOf('O')

console.log(strIndex2); //kis nagybetű érzékeny

const strIndex3  = string.indexOf('Hell')

console.log(strIndex3);