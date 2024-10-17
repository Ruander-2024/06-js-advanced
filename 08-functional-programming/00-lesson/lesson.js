function add (a, b){
    return a + b;
}


function applyOperation(a, b, operation){
    return operation(a, b);
}

applyOperation(3, 4, add)

console.log(applyOperation(3, 4, add));


const listOfNumbers = [23, 2, 3, 45, 67];  //számok listája
const listOfNumbers2 = [231, 24, 35, 453, 617];  //számok listája

const doubleElement = function(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * 2)
    }
    return result;
}

const tripleElement = function(array) {
    let result = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i] * 3)
    }
    return result;
}

console.log(doubleElement(listOfNumbers));
console.log(tripleElement(listOfNumbers));


const double = function (num) {
    return num * 2;
}

const triple = function (num) {
    return num * 3;
}

const calculate = function (array, operation){
    let result = [];
    for(const num of array){
        result.push(operation(num));
    }
    return result;
}

console.log(calculate(listOfNumbers2, double));
console.log(calculate(listOfNumbers, triple));
