function add(a, b){
    return a+ b;
}

function applayOperation(a, b, operation){
    return operation(a, b);
}

applayOperation(3, 4, add);

console.log(applayOperation(3, 4, add));


const listOfNumbers = [23, 2, 3, 45, 67];   // meg akarjuk ezeket a számokat duplázni és triplázni

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


console.log('-----------------------------------------');

// new feladat

const double = function (num) {
    return num * 2
}

const triple = function (num) {
    return num * 3
}

const calculate = function (array, operation) {
    let result = [];
    for(const num of array){
        result.push(operation(num));
    }
    return result;
}

console.log(calculate(listOfNumbers, double)); 
console.log(calculate(listOfNumbers, triple)); 