///////////////////////////////////////// FELADATOK ///////////////////////////////////////


//1. FELADAT
//Írj egy függvényt, ami visszaadja a paraméterben kapott év és hónap alapján
//az adott hónap napszámát

function getDays(year, month) {
    const date = new Date(year, month, 0);
    return date.getDate();
}

console.log(getDays(2000, 11));
console.log(getDays(1965, 2));
console.log(getDays(2016, 2));
console.log(getDays(1600, 7));


//2. FELADAT
//Írj egy függvényt, amely a paraméterben kapott dátum alapján visszaadja a hónap nevét
// A hónapok nevét egy listában tárold el: 
//["January", "February", "March", "April", "May", "June", "July",
//    "August", "September", "October", "November", "December"]

const monthNames = {
    0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 
    5: "June", 6: "July", 7: "August", 8: "September", 9: "October", 
    10: "November", 11: "December"
};

function getMonth(date) {
    return monthNames[date.getMonth()];
}

console.log(getMonth(new Date()));
console.log(getMonth(new Date('2016-06-19')));
console.log(getMonth(new Date('1945-09-9')));
console.log(getMonth(new Date('2000-05-22')));


//3.FELADAT
//Hozz létre egy változót a mai dátummal
const today = new Date();
//Hozz létre egy változót 2018.03.20-i dátummal
const pastDate = new Date('2018-03-20');
//Számold ki, hogy hány nap telt el a két dátum között
const differenceInDays = Math.abs((today - pastDate) / (1000 * 60 * 60 * 24));
console.log(Math.floor(differenceInDays));