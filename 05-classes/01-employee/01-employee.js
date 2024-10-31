//Az első feladatban létre kell hoznod egy Employee osztályt a megadott fieldekkel és metódusokkal
//1.lépés Hozz létre egy üres Employee osztályt
//2.lépés Hozz létre egy kontruktort egy firstName paraméterrel, ami beállítja a this.firstName értékét
//3.lépés Adj hozzá még paramétereket: lastName, age, city, job, department
//4.lépés Hozz létre 3 példányt harry, kriszta és daniel néven
//5.lépés Módosítsd úgy a konstruktortban az értékeket, hogy ne lehessen közvetlenül hozzáférni
//6.lépés Hozz létre mindegyik fieldhez gettert és írd ki a neveiket
//7.lépés Adj hozzá egy függvényt, amely visszaadja a dolgozó teljes nevét
//8.lépés Adj hozzá egy függvényt, amely visszaadja a dolgozó születési évét (idei év: new Date().getFullYear())
//9.lépés Hozz létre a konstruktorban egy remainingVacationDays fieldet, ami a paraméterből kapja az értékét
//        Eszerint módosítsd harryt, krisztát és danielt 
//10.lépés Írj egy takeVacationDays függvényt, amely fogad egy daysOff paramétert, majd ezt az értéket 
//         kivonva az eredeti szabadnapok számából új értéket ad a fieldnek 
//11.lépés Adj hozzá az osztályhoz egy salary fieldet, és írj egy függvényt, amely 10% fizetéstemelést ad
//Írd ki a három employee teljes nevét, majd a születési évüket
//Adj 10%-os fizetésemelést az egyik dolgozónak, írd ki az előtte-utána állapotot
//Egy másik dolgozó menjen el 5 napra szabadságra, írt ki az előtte-utána állapotot

class Employee{
    #firstName;
    #lastName;
    #age;
    #city;
    #job;
    #department;
    #remainingVacationDays;
    #salary;
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary){
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#city = city;
        this.#job = job;
        this.#department = department;
        this.#remainingVacationDays = remainingVacationDays;
        this.#salary = salary;
    }

    get firstName(){
        return this.#firstName;
    }

    get lastName() {
      return this.#lastName;
    }

    get age() {
      return this.#age;
    }

    get city() {
      return this.#city;
    }

    get job() {
      return this.#job;
    }

    get department() {
      return this.#department;
    }

    get remainingVacationDays() {
        return this.#remainingVacationDays;
      }

    set remainingVacationDays(num) {
      this.#remainingVacationDays = num;
    }

    get salary() {
      return this.#salary;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }

    getYearOfBirth(){
        return new Date().getFullYear() - this.age;
    }
}

harry = new Employee("Harry", "Potter", 30, "London", "Auror", "Magic Law Enforcement", 10, 6000);
kriszta = new Employee("Kriszta", "Nagy", 25, "Budapest", "Frontend Developer", "IT", 5, 5000);
daniel = new Employee("Daniel", "Smith", 28, "New York", "Product Manager", "Product Development", 2, 4000);

console.log(harry.remainingVacationDays);
harry.remainingVacationDays = 15;
console.log(harry.remainingVacationDays);

//2. FELADAT
//Hozz létre egy listát, amelyben az employee-kat tárolod
//for ciklussal írd ki a console-ra az összes dolgozó teljes nevét


//3.FELADAT
//Menj végig a listán és adj az összes dolgozónak 10% fizetésemelést
//Majd írd ki az aktuális fizetésüket

