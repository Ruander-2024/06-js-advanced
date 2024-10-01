// ISMÉTLÉS
var x = 7;
console.log(x);

var x = 78;
console.log(x);

let y = 8;
y = 15;
console.log(y);

const z = 65;
// z = 34;
// console.log(z);

// HOISTING

console.log(a);
console.log(b);

sayHello();

var a = 15;
var b = 114;

function sayHello(){
    console.log('Hello');
}

// SCOPE (HATÓKÖR)
let f = 45; // globális scope

{
    let e = 123; // Block scope
    console.log(f); // Globális scope-val rendelkező változót ki tud iratni
    console.log(e);
}

// console.log(e); 
// Nem írja ki az e változó értékét

 function logger(){
    let e ='Hello';
    console.log(f, e);
    function inside(){
        let g = 'Dani';
        console.log(e, g, f);
    }
    inside();
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