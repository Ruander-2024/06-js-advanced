const firstNameList = [
    'Tom', 'Bill', 'Eve',
    'Kate', 'William', 'John',
    'Adam', 'Susan', 'Eduard',
    'Michael', 'George', 'Sylvia',
    'Jackson'
];

const familyNameList = [
    'Smith', 'Roberts', 'Douglas',
    'Hanks', 'Moore', 'Hayek',
    'Bacon', 'Moonroe', 'Obama',
    'Segal', 'Niro', 'Sandler',
    'Gibson'
];

let users = generateList();
console.log(' ----------------------- FOREACH -----------------------');

// FELADATOK MEGÍRÁSÁHOZ HASZNÁLD FEL AZ ELŐRE LEGENERÁLT "users" LISTÁT.
// ---------------  SOK SIKERT!! ---------------

//  ----------- 1. FELADAT ----------
// Írd ki minden felhasználó keresztnevét (console.log-al minden elemet)
users.forEach(user => {
    let firstName = user.firstName;
    console.log(firstName);
});


// --------------2. FELADAT --------------
// Ird ki minden felhasználó családnevét az alábbi szintaktikában:
// pl: "Family name: Niro"

users.forEach(user => console.log(`Family name: ${user.familyName}`));
// -------------- 3. FELADAT -----------------------
// Ird ki minden user fő adatait (moneyAccount nem kell) alábbi módon történő szintaktikában:
// pl: "Name: Tom Niro,age: 30,activity: true"
// Hint: Próbáld ki a JS String interpolation-t (String Literals) : https://dmitripavlutin.com/string-interpolation-in-javascript/
users.forEach(user => {
    console.log(`Name: ${user.firstName} ${user.familyName}, age: ${user.age}, activity: ${user.isActive}`);
});



console.log(' -------------------- MAP ------------------------');

//  ---------------- 4. FELADAT ------------------
// Gyűjtsd ki egy listába a First Name + Family neveket összevonva az alábbi példa szerint:
// ["Tom Hanks", "Michale Jackson"...]
let fullNames = users.map(user => `${user.firstName} ${user.familyName}`);
console.log(fullNames);



//  ---------------- 5. FELADAT ------------------
// Gyűjts ki egy listába a keresztneveket és aktivitásokat az alábbi módon:
// "Tom activity:true"
let activityList = users.map(user => `${user.firstName} activity:${user.isActive}`);
console.log(activityList);



 console.log("---------------- 6. FELADAT ------------------") 
// Gyűjtsd ki egy külön listába csupa Nagy betűvel a Családneveket:
let capitalizedFamilyNames = users.map(user => user.familyName.toUpperCase());
console.log(capitalizedFamilyNames);



// -------------- BÓNUSZ MAP FELADAT --------------:
// Készíts objektumokat az egyes Kereszt és Családnevekből (property értékek legyenek), majd gyűjtsd ki egy listába
// porperty nevek: firstName, familyName
// Eredmény példa: [{firstName: "Tom", familyName: "Gibson"}, {firstName:"Michael", familyName: "Jackson"}....]
let nameObjects = users.map(user => ({ firstName: user.firstName, familyName: user.familyName }));
console.log(nameObjects);



console.log('---------------------- FILTER ---------------------');

console.log("---------------- 7. FELADAT ------------------") 
// Készíts egy metódust, ami visszaadja a 18 éven aluli felhasználókat
let underageUsers = users.filter(user => user.age < 18);
console.log(underageUsers);



console.log("---------------- 8. FELADAT ------------------") 
// Készíts egy metódust, ami visszaadja azokat az aktiv felhasználókat, aki már betöltötték
// a 18. élet évüket
let activeAdultUsers = users.filter(user => user.isActive && user.age >= 18);
console.log(activeAdultUsers);



console.log("---------------- 9. FELADAT ------------------") 
// Készíts egy olyan metódust ami visszaadja az első felhasználót és onnan kezdve minden 3-ik
// felhasználót, ha azok éppen aktív állapotban vannak
// Hint: a filternek meg lehet adni plusz paramétert, ami az elem indexét tárolhatja
// Elvárt eredmény üres lista! (próbáld ki inaktiv-ra állítod a feltételt, ekkor 9 elemű listát várunk)
let everyThirdActiveUser = users.filter((user, index) => user.isActive && index % 3 === 0);
console.log(everyThirdActiveUser);




console.log('------------------ REDUCE -----------------');

console.log("---------------- 10. FELADAT ------------------") 
// Késztíts a map() metódus segítségével egy listát, ami csak az életkorokat tárolja,
// majd add össze az életkorokat a reduce() segítségével
// Hint: próbáld meg úgy is, hogy összefűzöd a két metódust

let allAges = 0;
let totalAge = users.map(user => user.age).reduce((sum, age) => sum + age, 0);
console.log(totalAge);

console.log(allAges);

console.log("---------------- 11. FELADAT ------------------") 
// Késztíts a map() metódus segítségével egy listát, ami csak a pénzszámla értékeit tárolja,
// majd add össze az egyenlegeket a reduce() segítségével.
// Hint: próbáld meg úgy is, hogy összefűzöd a két metódust

const allMoneyAccount = users.map(user => user.moneyAccount).reduce((acc, curr) => acc + curr, 0);


console.log(allMoneyAccount);

console.log("---------------- 12. FELADAT ------------------") 
// Készíts a funkciónális programozás jegyében  olyan metódusokat összefűzve,
// melyek visszaadják a 20 éves vagy az alatti felhasználók összes pénz számlájukat

const youngCustomerAllAccount = users
    .filter(user => user.age <= 20)
    .map(user => user.moneyAccount)
    .reduce((acc, curr) => acc + curr, 0);

console.log(youngCustomerAllAccount);


// ---------------------- GENERATE LIST -----------------------


function generateList() {
    let userList = []
    let countDownIndex = 13;
    for (let i = 0; i < 26; i++) {
        let firstName = i < 13 ? firstNameList[i] : firstNameList[--countDownIndex];
        let familyName = i < 13 ? familyNameList[i] : familyNameList[countDownIndex];
        let age = i < 13 ? i + 15 : i * 2 + 10;
        let isActive = i % 3 === 0 ? false : true;
        let moneyAccount = i < 13 ? age * 1350 : age * i * 2100;

        let user = {
            firstName: firstName,
            familyName: familyName,
            age: age,
            isActive: isActive,
            moneyAccount: moneyAccount
        }
        userList.push(user);
    }
    return userList;
}