// Készitsd egy arrow function-t ami összead két számot

const sumNumbers = (num1, num2) => num1 + num2;

console.log(sumNumbers(32, 10))    //Output 42
console.log(sumNumbers(32, -10))   //Output 22

// ----------------------------------------------------------------------

// Készitsd egy arrow function-t ami kivon egymásból két számot

const subNumbers = (num1, num2) => num1 - num2;

console.log(subNumbers(-10, -42.3)); //Output: 32.3
console.log(subNumbers(62, 22)); //Output: 40

// -----------------------------------------------------------------

// Készitsd egy arrow function-t ami négyzetre emel egy számot

const squareNumbers  = (num) => num * num; 

console.log(squareNumbers(23)); //Output: 529

//  --------------------------------------------------------------

// Készitsd egy arrow function-t ami eloszt két számot

const divideNumbers = (num1, num2) => num1 / num2;

console.log(divideNumbers(49, 7)); //  Output: 7;
console.log(divideNumbers(25, -5)) // Output: -5;

//  --------------------------------------------------------------

//Készíts egy arrow function-t ami paraméterként kap két számot és a nagyobbikból vonja ki a 
// kisebb számot. Majd adja vissza a különbségüket.


const differenceOfNumber = (num1, num2) => 
    num1 > num2 ? num1 - num2 : num2 - num1;

console.log(differenceOfNumber(23, 30)); // Output: 7;
console.log(differenceOfNumber(-32, -20)) // Output 12;

//  --------------------------------------------------------------------

//Készíts egy arrow function-t, ami paraméterként kap két stringet és egy számot, majd visszadja őket
// összefonva egy stringként. (Pl: 'Tom', 'Tailor', 1980   => Output 'Tom Tailor 1980')

const joinData = (str1, str2, num) => `${str1} ${str2} ${num}`;

console.log(joinData('Tom', 'Tailor', 1980)); //  Output: 'Tom Tailor 1980'


//  -------------------------------------------------------------------------

//Készíts egy arrow function-t, ami paraméterként egy számokat tartalmazó tömböt kap, és visszaadja,
// az a számok összegét. (legalább két elemű tömbbel számolhatsz)

const sumArrayNumbers = (arr) => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArrayNumbers([55, 10, 25])); // Output: 90;
console.log(sumArrayNumbers([-22, 5, 5])); //  Output: -12;


//  ---------------------------------------------------------------------------

//Készíts olyan arrow function-t ami kap paraméterként egy számot és egy tömböt, majd megvizsgálja,
//hogy a tömb tartalmazza e a számot? Ha igen adjon vissza true, ha nem akkor false-t.

const chekArrayIncludeNumber = (num, arr) => arr.includes(num);

console.log(chekArrayIncludeNumber(23, [4, 5, 66, 7, 8])); // Output: false
console.log(chekArrayIncludeNumber(23, [5, 6, 77, 8, 23, 5])); //  Output: true;

//  ---------------------------------------------------------------------------

//Készits egy arrowFunction-t ami kap egy mondatot és feldarabolja szavakra, és visszaadja tömbként
//a szavakat


const splitSentence = (sentence) => sentence.split(' ');

console.log(splitSentence('Indul a görög aludni')); // Output ['Indul', 'a', 'görög', 'aludni']

//  ---------------------------------------------------------------------------

//Készíts egy arrowFunction-t ami kap stringként egy felhasználó nevet (szóközzel elválasztva név részeket)
//meg vizsgálja, hogy minden név legalább 3 betű, és nagybetűvel kezdődik, nem lehet csak szám
//Ha érvényes, adjon vissza true értéket, ha nem akkor false-t.

const checkUserName = str => str.split(' ').every((word) => word.length >= 3 && word[0] === word[0].toUpperCase() && isNaN(word)
    ? true
    : false
);

console.log(checkUserName('Luc Gizi 345')); // Output false;
console.log(checkUserName('tom Tailor')); // Output: false;
console.log(checkUserName('Tom Tailor K23f')); // Output: true;
console.log(checkUserName('Té Boj')); // Output: false;


// ----------------------- Bónusz Haladó szintű feladat ----------------
// Adott az alábbi function. Ami nem túl beszédesen lett megírva. Refaktoráld úgy, hogy
// csak Arrow functions használsz. Bármennyi function-t használhatsz, de legyenek minél
// beszédesebb soraid és változóid, függvény neveid. Akkor végzed el most tökéletesen 
// ezt a feladatot, ha nincs 7 sornál hosszabb függvény "body". Segítségül megadjuk
// az induló arrow function-t. (Refaktorálás utáni példa meghívások)
// 

// console.log(checkInput(['Boby', 'James'], [32,55])) // Output true;
// console.log(checkInput(['Bob', 'James'], [32,55])) // Output false;
// console.log(checkInput(['Bob23', 'James'], [32,55])) // Output false;
// console.log(checkInput(['Boby', 'James'], [32,-55])) // Output false;
// console.log(checkInput(['Boby', 'James'], [32,'55f'])) // Output false;

function checkInput(string, num) {
    for (let i = 0; i < string.length; i++) {
        if (string[i].length < 4) {
            return false;
        } else if (string[i][0] !== string[i][0].toUpperCase()) {
            console.log(string[i]);
            return false;
        }
        for (let y = 0; y < string[i].length; y++) {
            console.log(string[i][y])
            if (Number.isInteger(+string[i][y])) {
                return false;
            }
        }
    }
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            return false;
        } else if (num[i] < 0) {
            return false;
        }
    }
    return true;
}


// --------------------- Refaktorálás után ---------------------


// console.log(checkUserNamesAndScoresAreValid(['Boby', 'James'], [32, 55])); // Output true;
// console.log(checkUserNamesAndScoresAreValid(['Bob', 'James'], [32, 55])); // Output false;
// console.log(checkUserNamesAndScoresAreValid(['Bob23', 'James'], [32, 55])); // Output false;
// console.log(checkUserNamesAndScoresAreValid(['Boby', 'James'], [32, -55])); // Output false;
// console.log(checkUserNamesAndScoresAreValid(['Boby', 'James'], [32, '55f'])); // Output false;