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



console.log();
console.log();
console.log();

//Filter

// const newArray = array.filter(callback(element, index, array));
// callback - Arrow function
// element - A tömb aktuális eleme
// index - (opcionális) - Az aktuális elem indexe
// array - (opcionális) - maga a tömb, amelyen lefut


console.log('Filter metódus:');





//2024.10.17

const numbers = [1, 2, 3, 4, 5, 6];     //számok

const evenNumbers = numbers.filter(number => number % 2 === 0);     //Páros számok

console.log(evenNumbers);

const people = [            // emberek
    {name: 'John', age:25},
    {name: 'Jane', age:17},
    {name: 'Mike', age:21},
    {name: 'Sarah', age:30},
];

const adults = people.filter(person => person.age >= 21);   //felnőttek 

console.log(adults);

const words = ['apple', 'banana', 'cat', 'dog', 'elephant' ];    // szavak

const longWords = words.filter(words => words.length > 4);      // hosszú szavak

console.log(longWords);

const numbers2 = [1, 2, 3, 4, 3, 2, 5];

const uniqueNumbers = 
    numbers2.filter((value, index, self) => 
        self.indexOf(value) === index);

console.log(uniqueNumbers);

console.log();
console.log();
console.log();

// indexOf

// Array.indexOf(searchElement, fromIndex);
// searchElement - A keresett elem, amelynek az indexét szeretnénk megtalálni
// fromIndex - (opcionális) Az index, ahonnan kezdődik a keresés, Alapértelmezetten 0

console.log('indexOf metódus:');

const numbers3 = [10, 20, 30, 40, 50, 30];

const index = numbers3.indexOf(30);

console.log(index);


// function add(a, b){
//         return a + b;
// }

const index2 = numbers3.indexOf(60);

console.log(index2);

const index3 = numbers3.indexOf(30, 3);

console.log(index3);

const index4 = numbers3.indexOf(30);

console.log(index4);

console.log();

const string = 'Hello World';

const srtIndex = string.indexOf('o');

console.log(srtIndex);

const strIndex2 = string.indexOf('O');  // Kis nagybetű érzékeny

console.log(strIndex2);

const strIndex3 = string.indexOf('ld');  // Hello World ben az ld előfordulása (9.karakter)

console.log(strIndex3);
