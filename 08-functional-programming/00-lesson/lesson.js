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
      age: person.age + 10,
      gender: person.gender,
      isOlderThan50: person.age + 10 > 50,
  };
}) ;

console.log(people);
console.log(olderPeople);

const peopleAgesList = people.map(person => person.age);

console.log(peopleAgesList);

const wordsCapitalize = words.map(word =>{            // wordsCapitalize = a szavak nagybetűvel íródnak
      return word.toUpperCase().split('').join('.');
});

console.log(wordsCapitalize);

// FOREACH

console.log('---foreach---');

//   const politePeople = people.forEach(person => (person.name = 'Hi I am' + person.name));        //ez feleseleges

//   console.log(politePeople);
console.log(people);

people.forEach(person => (person.name = ' Hi I am ' + person.name));      // ez a jó megoldás

console.log(people);



//   const listOfNumbers = [23, 2, 3, 45, 67];   // new feladat

listOfNumbers.forEach((num, index) => console.log(index, num));



// FILTER

console.log('---filter---');

const peopleOver40 = olderPeople.filter(person => person.age > 40);

console.log(peopleOver40);

const nameOfPeopleOver40 = olderPeople
  .filter(person => person.age > 40)
  .map(person => person.name);

  console.log(nameOfPeopleOver40);
  

  // SORT
  
  console.log('---sort---');

//   const listOfNumbers = [23, 2, 3, 45, 67];   // new feladat 2.

  const namesList = ['Eva', 'Bob', 'Vicky', 'Karl'];

  listOfNumbers.sort();
  console.log(listOfNumbers);
  namesList.sort();
  console.log(namesList);

  listOfNumbers.sort((a, b) => a - b);
  console.log(listOfNumbers);

  listOfNumbers.sort((a, b) => b - a);
  console.log(listOfNumbers);

  olderPeople.sort((a) => a.gender === 'female' ? 1 : -1);
  console.log(olderPeople);


  // SOME, EVERY 

  console.log('---some, every---');

  // const people = [
  //     { name: 'Joe', age: 30, gender: 'male' },
  //     { name: 'Gustav', age: 43, gender: 'male' },
  //     { name: 'Jane', age: 18, gender: 'female' },
  //     { name: 'Billy', age: 42, gender: 'male' },
  //     { name: 'Eva', age: 6, gender: 'female' },
  //     { name: 'Victoria', age: 53, gender: 'female' },
  //   ];

  console.log(people.some(person => person.age < 18));

  console.log(people.every(person => person.age < 18));
