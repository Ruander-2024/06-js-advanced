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

//2. FELADAT
//Hozz létre egy listát, amelyben az employee-kat tárolod
//for ciklussal írd ki a console-ra az összes dolgozó teljes nevét


//3.FELADAT
//Menj végig a listán és adj az összes dolgozónak 10% fizetésemelést
//Majd írd ki az aktuális fizetésüket



// 1. lépés: Hozz létre egy üres Employee osztályt
class Employee {
    // 2. lépés: Konstruktor firstName paraméterrel
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary) {
        // 3. lépés: További paraméterek hozzáadása
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._city = city;
        this._job = job;
        this._department = department;
        this._remainingVacationDays = remainingVacationDays;
        this._salary = salary;
    }

    // 6. lépés: Getters hozzáadása a field-ekhez
    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get age() {
        return this._age;
    }

    get city() {
        return this._city;
    }

    get job() {
        return this._job;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    get salary() {
        return this._salary;
    }

    // 7. lépés: Függvény a teljes név visszaadására
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }

    // 8. lépés: Függvény a születési év visszaadására
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this._age;
    }

    // 10. lépés: takeVacationDays függvény
    takeVacationDays(daysOff) {
        if (daysOff <= this._remainingVacationDays) {
            this._remainingVacationDays -= daysOff;
        } else {
            console.log("Nincs elegendő szabadságnap!");
        }
    }

    // 11. lépés: Salary increase function ( 10% fizetés emelés )
    giveRaise() {
        this._salary *= 1.1;
    }
}

// 4. lépés: Létrehozunk 3 példányt: Harry, Kriszta és Daniel
const harry = new Employee("Harry", "Smith", 30, "New York", "Engineer", "IT", 20, 50000);
const kriszta = new Employee("Kriszta", "Johnson", 25, "Los Angeles", "Manager", "Sales", 25, 60000);
const daniel = new Employee("Daniel", "Brown", 28, "Chicago", "Designer", "Marketing", 15, 55000);

// 6. lépés: Kiírjuk a teljes neveket
console.log(harry.getFullName(), kriszta.getFullName(), daniel.getFullName());

// 7. lépés: Kiírjuk a születési évüket
console.log(harry.getBirthYear(), kriszta.getBirthYear(), daniel.getBirthYear());

// 11. lépés: Fizetésemelés Harrynek, és az előtte-utána állapot kiírása
console.log("Harry fizetés (emelés előtt):", harry.salary);
harry.giveRaise();
console.log("Harry fizetés (emelés után):", harry.salary);

// 10. lépés: 5 nap szabadság Krisztának, és az előtte-utána állapot kiírása
console.log("Kriszta szabadnapok (szabadság előtt):", kriszta.remainingVacationDays);
kriszta.takeVacationDays(5);
console.log("Kriszta szabadnapok (szabadság után):", kriszta.remainingVacationDays);

// 2. FELADAT: Lista létrehozása és az összes dolgozó teljes nevének kiírása
const employees = [harry, kriszta, daniel];
for (const employee of employees) {
    console.log(employee.getFullName());
}

// 3. FELADAT: Fizetésemelés az összes dolgozónak és az aktuális fizetésük kiírása
employees.forEach(employee => {
    employee.giveRaise();
    console.log(employee.getFullName(), "aktuális fizetés:", employee.salary);
});


//9.lépés Hozz létre a konstruktorban egy remainingVacationDays fieldet, ami a paraméterből kapja az értékét
//        Eszerint módosítsd harryt, krisztát és danielt 






// Márké: 

// Peter Kohlrusz
// peterkohlrusz_71265
// Online

// Smiley1144 — 2024.10.18. 17:16
// Na csak, hogy ne maradjatok kis gyakorlás nélkül, a 03-number-math mappának a 02-practice és a 03-practice mappája lenne a gyakorlás. Két nem túl nehéz feladat, bármit használhattok, amit eddig tanultunk, különösebb megkötés nincs, működjön és ennyi. Illetve, ha HTML- CSS témában gyakorolnátok, akkor az eddigi feladatokat, akár a számológépet, akár ezeket szépíthetitek, hogy úgy érzitek. Ezek a mappák tele vannak feladatokkal és bármikor bármit dolgozhattok benne kedvetek szerint
// Smiley1144 — 2024.10.24. 20:25
// Hogy Dániel is lássa, @E.Dani, a házi 2024.10.29-re a 08-functional-programming mappában, a 01-practice almappának a functional.js fájljának a 6-től a 12-ig feladat, illetve a bónuszokat is meg lehet próbálni, nem nehezek
// Smiley1144 — 2024.11.01. 17:54
// A házit el is felejtettem kiírni, tegnap belekezdtünk a 05-classes 01-employee mappában lévő feladatba, így annak a befejezése és az ott lévő inheritance lenne a házi. A utóbbi nehezebb, ezért nem kötelező, a másikat viszont örülnék, ha mindenki valamilyen formában megcsinálná, vagy legalább próbálkozna. Hasonít az előző feladatokhoz, így tud mindenki puskázni
// Smiley1144 — ma 18:15-kor
// //Az első feladatban létre kell hoznod egy Employee osztályt a megadott fieldekkel és metódusokkal
// //1.lépés Hozz létre egy üres Employee osztályt
// //2.lépés Hozz létre egy kontruktort egy firstName paraméterrel, ami beállítja a this.firstName értékét
// //3.lépés Adj hozzá még paramétereket: lastName, age, city, job, department
// //4.lépés Hozz létre 3 példányt harry, kriszta és daniel néven
// //5.lépés Módosítsd úgy a konstruktortban az értékeket, hogy ne lehessen közvetlenül hozzáférni
// Kibontás
// message.txt
// 5 KB
// //Az első feladatban létre kell hoznod egy Employee osztályt a megadott fieldekkel és metódusokkal
// //1.lépés Hozz létre egy üres Employee osztályt
// //2.lépés Hozz létre egy kontruktort egy firstName paraméterrel, ami beállítja a this.firstName értékét
// //3.lépés Adj hozzá még paramétereket: lastName, age, city, job, department
// //4.lépés Hozz létre 3 példányt harry, kriszta és daniel néven
// //5.lépés Módosítsd úgy a konstruktortban az értékeket, hogy ne lehessen közvetlenül hozzáférni
// //6.lépés Hozz létre mindegyik fieldhez gettert és írd ki a neveiket
// //7.lépés Adj hozzá egy függvényt, amely visszaadja a dolgozó teljes nevét
// //8.lépés Adj hozzá egy függvényt, amely visszaadja a dolgozó születési évét (idei év: new Date().getFullYear())
// //9.lépés Hozz létre a konstruktorban egy remainingVacationDays fieldet, ami a paraméterből kapja az értékét
// //        Eszerint módosítsd harryt, krisztát és danielt 
// //10.lépés Írj egy takeVacationDays függvényt, amely fogad egy daysOff paramétert, majd ezt az értéket 
// //         kivonva az eredeti szabadnapok számából új értéket ad a fieldnek 
// //11.lépés Adj hozzá az osztályhoz egy salary fieldet, és írj egy függvényt, amely 10% fizetéstemelést ad
// //Írd ki a három employee teljes nevét, majd a születési évüket
// //Adj 10%-os fizetésemelést az egyik dolgozónak, írd ki az előtte-utána állapotot
// //Egy másik dolgozó menjen el 5 napra szabadságra, írt ki az előtte-utána állapotot

// class Employee{
//     #firstName;
//     #lastName;
//     #age;
//     #city;
//     #job;
//     #department;
//     #remainingVacationDays;
//     #salary;
//     constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary){
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#age = age;
//         this.#city = city;
//         this.#job = job;
//         this.#department = department;
//         this.#remainingVacationDays = remainingVacationDays;
//         this.#salary = salary;
//     }

//     get firstName(){
//         return this.#firstName;
//     }

//     get lastName() {
//       return this.#lastName;
//     }

//     get age() {
//       return this.#age;
//     }

//     get city() {
//       return this.#city;
//     }

//     get job() {
//       return this.#job;
//     }

//     get department() {
//       return this.#department;
//     }

//     get remainingVacationDays() {
//         return this.#remainingVacationDays;
//       }

//     set remainingVacationDays(num) {
//       this.#remainingVacationDays = num;
//     }

//     get salary() {
//       return this.#salary;
//     }

//     getFullName(){
//         return this.firstName + ' ' + this.lastName;
//     }

//     getYearOfBirth(){
//         return new Date().getFullYear() - this.age;
//     }

//     // takeVacationDays(daysOff){
//     //     this.remainingVacationDays -= daysOff;
//     // }

//     takeVacationDays(daysOff) {
//       if (daysOff <= this.#remainingVacationDays) {
//         this.#remainingVacationDays -= daysOff;
//       } else {
//         console.log("Nincs elegendő szabadságnap!");
//       }
//     }

//     increaseSalary() {
//       return this.#salary *= 1.1;
//     }
// }

// harry = new Employee("Harry", "Potter", 30, "London", "Auror", "Magic Law Enforcement", 10, 6000);
// kriszta = new Employee("Kriszta", "Nagy", 25, "Budapest", "Frontend Developer", "IT", 5, 5000);
// daniel = new Employee("Daniel", "Smith", 28, "New York", "Product Manager", "Product Development", 2, 4000);

// console.log(harry.remainingVacationDays);
// harry.remainingVacationDays = 15;
// console.log(harry.remainingVacationDays);

// const EmployeeList = [harry, kriszta, daniel];

// for (let i = 0; i < EmployeeList.length; i++) {
//   console.log(EmployeeList[i].firstName + " " + EmployeeList[i].lastName + " " + EmployeeList[i].getYearOfBirth());
// }

// console.log(daniel.salary);
// console.log(daniel.increaseSalary(daniel.salary));

// console.log(harry.remainingVacationDays);
// harry.takeVacationDays(5);
// console.log(harry.remainingVacationDays);

// // console.log(daniel.firstName,daniel.lastName,daniel.getYearOfBirth(daniel.age));

// //2. FELADAT
// //Hozz létre egy listát, amelyben az employee-kat tárolod
// //for ciklussal írd ki a console-ra az összes dolgozó teljes nevét


// //3.FELADAT
// //Menj végig a listán és adj az összes dolgozónak 10% fizetésemelést
// //Majd írd ki az aktuális fizetésüket

// EmployeeList.forEach(person => {
//   person.increaseSalary();
//   console.log('Emelt fizu: ', person.salary);
// })
