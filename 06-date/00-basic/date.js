///////////////////////////////////////// FELADATOK ///////////////////////////////////////


//1. FELADAT
//Írj egy függvényt, ami visszaadja a paraméterben kapott év és hónap alapján
//az adott hónap napszámát



console.log(getDays(2000, 11));
console.log(getDays(1965, 2));
console.log(getDays(2016, 2));
console.log(getDays(1600, 7));


//2. FELADAT
//Írj egy függvényt, amely a paraméterben kapott dátum alapján visszaadja a hónap nevét
// A hónapok nevét egy listában tárold el: 
//["January", "February", "March", "April", "May", "June", "July",
//    "August", "September", "October", "November", "December"]



console.log(getMonth(new Date()));
console.log(getMonth(new Date('2016-06-19')));
console.log(getMonth(new Date('1945-09-9')));
console.log(getMonth(new Date('2000-05-22')));


//3.FELADAT
//Hozz létre egy változót a mai dátummal

//Hozz létre egy változót 2018.03.20-i dátummal

//Számold ki, hogy hány nap telt el a két dátum között
