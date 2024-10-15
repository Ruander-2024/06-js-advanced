// Constants

console.log(Math.PI);
console.log(Math.SQRT2);   // gyök alatt 2


// Methods

// min, max

const numArray = [1, 2, 3, 4, 5];
console.log(Math.max(1, 2, 3));
console.log(Math.max(...numArray));   //  ... spread operator kibontja a tömb elemeit és külön paraméterként adja át az indexnek (átalakító elem egy converter)
console.log(Math.min(...numArray));
console.log();

// round, floor, ceil, trunc

const numFloat = 3.721;

console.log(Math.round(numFloat)); // 4      -3.721 -> -4       kerekítés
console.log(Math.floor(numFloat)); // 3      -3.721 -> -4       legközelebbi kisebb egész szám
console.log(Math.ceil(numFloat)); // 4       -3.721 -> -3       legközelebbi nagyobb egész szám
console.log(Math.trunc(numFloat)); // 3      -3.721 -> -3       levágja a tört részt és visszaadja a számot

// random

console.log(Math.random());  // 0 - 0.999999...   számokat generál

// 0-9 közötti egész szám generálás
console.log(Math.floor(Math.random() * 10));

// 1-10 közötti egész számok generálása
console.log(Math.floor(Math.random() * 10) + 1);

// 100-200 egész szám generálás
console.log(Math.floor(MAth.random() * 100) + 100);
