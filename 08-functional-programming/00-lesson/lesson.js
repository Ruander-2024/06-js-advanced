function add(a, b){
    return a + b;
}

function applyOperation(a, b, operation){
    return operation(a, b);
}

applyOperation(3, 4, add)

console.log(applyOperation(3, 4, add));

const listOfNumbers = [23, 2, 3, 45, 67]; // Számok listája
const listOfNumbers2 = [230, 25, 31, 457, 679]; // Számok listája
const listOfNumbers3 = [228, 281, 346, 4, 6.7]; // Számok listája

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

console.log(doubleElement(listOfNumbers3));
console.log(tripleElement(listOfNumbers3));


// Map 
const people = [
    { name: 'Joe', age: 30, gender: 'male' },
    { name: 'Gustav', age: 43, gender: 'male' },
    { name: 'Jane', age: 18, gender: 'female' },
    { name: 'Billy', age: 42, gender: 'male' },
    { name: 'Eva', age: 6, gender: 'female' },
    { name: 'Victoria', age: 53, gender: 'female' },
  ];
  
  const words = ['asap', 'byob', 'rsvp', 'diy'];

const olderPeople = people.map(person => {
    return{
        name: person.name,
        age: person.age +10,
        gender:person.gender,
        isOlderThan: person.age+10 > 50
    };
});

console.log(olderPeople)



const peopleAgesList = people.map(person => person.age)

console.log(peopleAgesList);

const olderPeopleAgedList = olderPeople.map(person => person.age)
console.log(olderPeopleAgedList);

const wordsCap = words.map(word => {
    return word.toUpperCase().split('').join('.');
}) 

console.log(wordsCap);


//FOREACH

console.log('---foreach---');

//   const politePeople = people.forEach(person => (person.name = 'Hi I am ' + person.name));      // forEach ciklusnál nem hozunk létre változót

 // console.log(politePeople); // undefined
  console.log(people);

  people.forEach(person => (person.name = 'Hi I am ' + person.name));
  console.log(people);

  listOfNumbers.forEach((num, index) => console.log(index, num));

  // FILTER

  console.log('---filter---');

  const peopleOver40 = olderPeople.filter(person => person.age > 40);

  console.log(peopleOver40);

  const nameOfPeopleOver40 = olderPeople
  .filter(person => person.age > 40)
  .map(person => person.name);

  console.log(nameOfPeopleOver40);

  //sort

  console.log('----SORT-----');
  //const listOfNumbers = [23, 2, 3, 45, 67]; // Számok listája
  const namesList = ['Eva', 'Bob', 'Vicky', 'Karl'];

  listOfNumbers.sort();
console.log(listOfNumbers);

olderPeople.sort((a, b) => a.gender.localeCompare(b.gender));


console.log(olderPeople);
