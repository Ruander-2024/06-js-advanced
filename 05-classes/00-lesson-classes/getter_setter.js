class Dog{
    constructor(name, color, age, breed){
        this._name = name;
        this._color = color;
        this._age = age;
        this._breed = breed;
    }

    get name(){
        return this._name;
    }

    get breed() {
        return this._breed;
    }

    set age(num){
        if(num > 0 && num < 20){
            this._age = num;
        }
        else{
            console.log('0-20 közötti számot kérek!');
        }
    }

    // setAge(num) {
    //     if(num > 0 && num < 20){
    //         this._age = num;
    //     }
    //     else{
    //         console.log('0-20 közötti számot kérek!');
    //     }
    // }

    set name(dogName){
        if(dogName.length > 10){
            this._name = dogName;
        }
        else{
            console.log('Túl rövid név!');
        }
    }

    incrementAge(){
        this.age = this._age + 1;
    }
}

dog1 = new Dog('John Doe', 'black', 10, 'faluvégi');
console.log(dog1.breed);
console.log(dog1.name);

console.log(dog1);
// dog1.age = 11 // setter-nek tudok feltételt megadni, míg a törzs változó értéke érzékeny adat és nem szeretnénk kívülről hozzányúlni
// console.log(dog1);
// dog1._age = 21
// console.log(dog1);

dog1.name = 'Berci';
console.log(dog1);

// dog1.setAge(30);
// console.log(dog1);

dog2 = new Dog('Rover', 'brown', 7, 'németjuhász');

family = [dog1, dog2];
family2 = [new Dog('Kokain', 'white', 6, 'westie'), new Dog('Büdösállat', 'tarka', 14, 'támadó kóbor')];

console.log(family);
console.log(family2);

for(let i = 0; i < family.length; i++){
    family[i].incrementAge();
}
console.log(family);