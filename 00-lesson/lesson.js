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
    let e = 123;  // block scope
    console.log(f);  // Globális scope-val rendelkező változót ki tud iratni
    console.log(e);
    
}

//console.log(e);
// nem írja ki az e változó értékét 

function logger(){
    let e = 'Hello';
    console.log(e, f);
    function insider (){
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


