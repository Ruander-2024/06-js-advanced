//1. feladat Kiindulásnak megfelel az előző feladatban létrehozott Employee class, 
//ennek a tartalmát másold át ide
//az employee_inheritance kép szerint kell létrehoznod még osztályokat, melyek öröklik az employeet



//2. feladat Hozz létre egy manager classt két új fielddel: numberOfMeetings(number), teamleader(boolean)
//Írj hozzá egy függvényt, amely növeli a meetingek számát, illetve egy promoteToTeamleader 
//függvényt, amely a kinevezésére felel
//Hozz létre egy John elnevezésű managert, majd hívd meg az összes függvényét sorban, 
//és írd ki a fieldek értékét


//3. feladat Hozz létre egy developer classt, ami szintén örököl az employee-től
//Legyen plusz két fieldje: numberOfMonitors(number), worksRemote(boolean) - kezdőértéke true
//Írj egy függvényt, amely módosítja a beérkező paraméter alapján a numberOfMonitors értékét.
//Ebben írj egy vizsgálatot, ha a beérkező szám negatív akkor eggyel csökkenti, ha pozitív akkor növeli
//a monitorok számát. Ha az illetőnek nincs monitora, akkor írj egy üzenetet a console-ra
//Írj egy másik függvényt is, amely irodai munkára fogja a fejlesztőt (worksRemote).
//Ha elkészültél, akkor hozz létre egy Jane nevű fejlesztőt, majd a getterek meghívásával írd ki a 
//console-ra, minden fildjének az értékét.
//Hívd meg mindekét függvényét és írd ki az előtt-utána értékeket is






// Kiinduló Employee osztály:

class Employee {
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
        this._city = city;
        this._job = job;
        this._department = department;
        this._remainingVacationDays = remainingVacationDays;
        this._salary = salary;
    }

    get fullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

// 2. feladat - Manager osztály, amely örökli az Employee-t
class Manager extends Employee {
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary, numberOfMeetings, teamleader = false) {
        super(firstName, lastName, age, city, job, department, remainingVacationDays, salary);
        this._numberOfMeetings = numberOfMeetings;
        this._teamleader = teamleader;
    }

    increaseMeetings() {
        this._numberOfMeetings++;
    }

    promoteToTeamleader() {
        this._teamleader = true;
    }

    get details() {
        return {
            fullName: this.fullName,
            numberOfMeetings: this._numberOfMeetings,
            teamleader: this._teamleader
        };
    }
}

// John példány létrehozása és függvények meghívása
const john = new Manager('John', 'Doe', 35, 'New York', 'Manager', 'HR', 20, 50000, 5);
john.increaseMeetings();
john.promoteToTeamleader();
console.log(john.details);

// 3. feladat - Developer osztály, amely szintén örökli az Employee-t
class Developer extends Employee {
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary, numberOfMonitors, worksRemote = true) {
        super(firstName, lastName, age, city, job, department, remainingVacationDays, salary);
        this._numberOfMonitors = numberOfMonitors;
        this._worksRemote = worksRemote;
    }

    adjustMonitors(count) {
        if (count < 0) {
            this._numberOfMonitors--;
            if (this._numberOfMonitors <= 0) {
                console.log('Nincs monitora a fejlesztőnek!');
                this._numberOfMonitors = 0; // Biztosítjuk, hogy ne legyen negatív
            }
        } else {
            this._numberOfMonitors++;
        }
    }

    switchToOffice() {
        this._worksRemote = false;
    }

    get details() {
        return {
            fullName: this.fullName,
            numberOfMonitors: this._numberOfMonitors,
            worksRemote: this._worksRemote
        };
    }
}

// Jane példány létrehozása és függvények meghívása
const jane = new Developer('Jane', 'Smith', 28, 'San Francisco', 'Developer', 'IT', 15, 70000, 2);
console.log('Kezdeti állapot:', jane.details);
jane.adjustMonitors(-1);
console.log('Egy monitor csökkentés után:', jane.details);
jane.switchToOffice();
console.log('Irodai munka után:', jane.details);
