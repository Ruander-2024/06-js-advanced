// Constants: 

console.log(Math.PI);
console.log(Math.SQRT2);   // gyök alatt 2 


// Methods: 

// min., max.

const numArray = [1, 2, 3, 4, 5];
console.log(Math.max(1, 2, 3));         // 3
console.log(Math.max(numArray));        // NotaNumber (NaN)
console.log(Math.max(...numArray));     // 5
console.log(Math.min(...numArray));     // 1

// round, floor, ceil, trunc

const numFloat = 3.721;

console.log(Math.round(numFloat));  // 4
console.log(Math.floor(numFloat));  // 3 
console.log(Math.ceil(numFloat));   // 4
console.log(Math.trunc(numFloat));  // 3
// round - kerekítés
// floor - legközelebbi kisebb egész szám
// ceil - legközelebbi nagyobb egész szám
// trunc - levágja a törtrészt


// random

console.log(Math.random()); // 0-0.9999999...

// 0-9 közötti egész szám generálás
console.log(Math.floor(Math.random() * 10));

// 1-10 között egész számok generálás
console.log(Math.floor(Math.random() * 10) + 1);

// 100-200 között egész számok generálás
console.log(Math.floor(Math.random() * 100) + 100);