class Dog{
    #sex; // private, nem tudjuk átirni és rejtve marad

    constructor(name, age, sex){
        this._name = name;
        this._age = age;
        this.#sex = sex;
    }

    get sex(){
        return this.#sex; // Getter málkül a private értéke marad undefined értéket kapunk
    }

    set sex(str){
        this.#sex = str;
    }

    static logClassName(){
        console.log('Dog');
        
    }

    static breed = 'basic';

    changeBreed(){
        this.breed = 'not basic';
        console.log(this.breed);
        
    }

    // A static breed értékét, nem tudom semmilyen úton kiiratni csak megváltoztatni
    // changeBreed(){
    //     console.log(this.breed);
        
    // }
}

dog1 = new Dog('Pamacs', 4, 'male');
console.log(dog1.sex);
//dog1.sex = 'female'; // Megkapom az értékét, de megváltoztatni nem tudjuk getter-el
console.log(dog1.sex);
dog2 = new Dog('Dogmeat', 6, 'female');

console.log(dog1.logClassName); // A static-ot a class-on kívűl nem éred el
console.log(dog1.breed);
dog1.changeBreed();

