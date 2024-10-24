// normál működés

function test() {
    let test = 0;
    ++test;
    console.log(test);
}

console.log('---normál működés---');

test(); // 1
test(); // 1

// closure

function outerFunction() { // külső funkció
    let outerVariable = 0; // külső változó

    function innerFunction() { // belső funkció
        console.log(++outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction(); // Az outerFunction() hívása visszaadja az innerFunction-t
console.log('---closure---');
closureFunction();
closureFunction();
closureFunction();
closureFunction();

// IIFE

console.log('---IIFE---');

(function () {
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    console.log('Az összeg: ', sum);
})();
