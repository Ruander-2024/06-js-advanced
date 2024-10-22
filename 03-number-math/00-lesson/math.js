// Constants

console.log(Math.PI);
console.log(Math.SQRT2);

// Methods

// min, max

const numArray = [1, 2, 3, 4, 5];
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.max(numArray)); // NaN
console.log(Math.max(...numArray)); // 5
console.log(Math.min(...numArray)); // 1
console.log();

// round, floor, ceil, trunc

const numFloat = -3.721;

console.log(Math.round(numFloat)); // 4     -3.721 -> -4
console.log(Math.floor(numFloat)); // 3     -3.721 -> -4
console.log(Math.ceil(numFloat)); // 4      -3.721 -> -3
console.log(Math.trunc(numFloat)); // 3     -3.721 -> -3
// round - kerekítés
// floor - legközelebbi kisebb egész szám
// ceil - legközelebbi nagyobb egész szám
// trunc - levágja a törtrészt

//Random

console.log(Math.random())