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


// Map 

console.log(calculate(listOfNumbers2, double));
console.log(calculate(listOfNumbers, triple));



const people = [
    { name: 'Joe', age: 30, gender: 'male'},
    { name: 'Gustav', age: 43, gender: 'male'},
    { name: 'Jane', age: 18, gender: 'female'},
    { name: 'Billy', age: 42, gender: 'male'},
    { name: 'Eva', age: 6, gender: 'female'},
    { name: 'Victoria', age: 53, gender: 'female'},
];

const words = ['asap', 'byob', 'rsvp', 'diy'];

const olderPeople = people.map(person => {
    return{
        name: person.name,
        age: person.age + 10,
        gender: person.gender,
        isOlderThan50: person.age + 10 > 50
    };
});

console.log(people);
console.log(olderPeople);

const peopleAgesList = olderPeople.map(person => person.age)
console.log(peopleAgesList);

const wordsCapitalize = words.map(word => {
    return word.toLocaleUpperCase().split('').join('.');
});

console.log(wordsCapitalize);

// FOREACH

console.log('--- foreach ---');

// const politePeople = people.forEach(person => (person.name = 'Hi I am ' + person.name));   forEach ciklusnál nem hozunk létre változót

const politePeople = people.forEach(person => (person.name = 'Hi I am ' + person.name));

console.log(politePeople); // undefined
console.log(people);


listOfNumbers.forEach((num, index) => console.log(index, num));

// FILTER

console.log('--- filter ---');

const peopleOver40 = olderPeople.filter(person => person.age > 40);
console.log(peopleOver40);

const nameOfPeopleOver40 = olderPeople
    .filter(person => person.age > 40)
    .map(person => person.name);

console.log(nameOfPeopleOver40);

// SORT





