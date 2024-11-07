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

class Employee {
   
    constructor(firstName, lastName, age, city, job, department, remainingVacationDays, salary) {
   
      let _firstName = firstName;
      let _lastName = lastName;
      let _age = age;
      let _city = city;
      let _job = job;
      let _department = department;
      let _remainingVacationDays = remainingVacationDays;
      let _salary = salary;
  
      //6
      this.getFirstName = () => _firstName;
      this.getLastName = () => _lastName;
      this.getAge = () => _age;
      this.getCity = () => _city;
      this.getJob = () => _job;
      this.getDepartment = () => _department;
      this.getRemainingVacationDays = () => _remainingVacationDays;
      this.getSalary = () => _salary;
  
      //8
      this.getFullName = function() {
        return `${_firstName} ${_lastName}`;
      };
  
      //9
      this.getBirthYear = function() {
        return new Date().getFullYear() - _age;
      };
  
      //10
      this.takeVacationDays = function(daysOff) {
        _remainingVacationDays -= daysOff;
      };
  
      //11
      this.giveRaise = function() {
        _salary *= 1.1;
      };
    }
  }
  
  //4
  const harry = new Employee("Harry", "Potter", 35, "London", "Auror", "Security", 20, 50000);
  const kriszta = new Employee("Kriszta", "Nagy", 30, "Budapest", "Designer", "Marketing", 15, 40000);
  const daniel = new Employee("Daniel", "Smith", 25, "New York", "Developer", "IT", 25, 60000);
  
  //7
  console.log(harry.getFullName());
  console.log(kriszta.getFullName());
  console.log(daniel.getFullName());
  
  //8
  console.log(harry.getBirthYear());
  console.log(kriszta.getBirthYear());
  console.log(daniel.getBirthYear());
  
  //11
  console.log("Harry fizetés emelés előtt:", harry.getSalary());
  harry.giveRaise();
  console.log("Harry fizetés emelés után:", harry.getSalary());
  
  
  console.log("Kriszta szabadság előtt:", kriszta.getRemainingVacationDays());
  kriszta.takeVacationDays(5);
  console.log("Kriszta szabadság után:", kriszta.getRemainingVacationDays());
  
  //2. FELADAT: Employee lista létrehozása és teljes nevek kiírása for ciklussal
  const employeeList = [harry, kriszta, daniel];
  for (const employee of employeeList) {
    console.log(employee.getFullName());
  }
  
  //3. FELADAT: Minden dolgozó fizetésemelése és az aktuális fizetések kiíratása
  for (const employee of employeeList) {
    employee.giveRaise();
    console.log(employee.getFullName(), "aktuális fizetése:", employee.getSalary());
  }
  