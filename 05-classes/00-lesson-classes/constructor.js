const books = [
    {
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy'],
        price: 20,
      },
      {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['nonfiction', 'graphic novel', 'fantasy'],
        price: 40,
      },
]

class Animal{
    constructor(name, numberOfLegs, age) {
        this.name = name;
        this.numberOfLegs = numberOfLegs;
        this.age = age;
    }
    incementAge(){
        this.age = this.age + 1;  // növeljük a kort 1 évvel  ( egyszerűsítve : this.age++; )
    }
}

animal1 = new Animal('Buksi', 4, 6)
console.log(animal1);
console.log(animal1.numberOfLegs);
animal1.incementAge();
console.log(animal1);

animal2 = new Animal('Szimba', 5 ,1);
console.log(animal2);