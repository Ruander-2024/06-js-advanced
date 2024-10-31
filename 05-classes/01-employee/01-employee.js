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

    // 11. lépés: Salary increase function
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
