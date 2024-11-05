const currentDate = new Date();

console.log(currentDate);

const eventDate = new Date('January 2, 1999 03:23:45:457');  // GMT +0100
console.log(eventDate);

const eventDate2 = new Date('2000-01-02T03:23:45');  // ajánlott formátum
console.log(eventDate2);

const eventDate3 = new Date(2010, 1);  // a hónapok indexelése 0-ról indul // GMT +0100
console.log(eventDate3);

const eventDate4 = new Date(2020, 3, 10, 11, 34, 32, 20);  // GMT +0200
console.log(eventDate4);

console.log('----------------');


// Date metódusok

console.log(currentDate);

console.log(currentDate.toDateString());   // Tue Nov 05 2004

console.log(currentDate.toTimeString());  // 19:12:20 GMT +0100 ( közép európai téli idő )

console.log(currentDate.toLocaleString('en'));   // így angol formátum   11/5/2024, 7:14:30 PM
console.log(currentDate.toLocaleString('hu'));   // így magyar formátum   2024. 11. 05. 19:14:56

console.log(currentDate.toLocaleDateString('en'));   //  11/5/2024
console.log(currentDate.toLocaleDateString('hu'));    //  2024. 11. 05.

console.log(currentDate.toLocaleTimeString('en'));   //   7:17:54 PM
console.log(currentDate.toLocaleTimeString('hu'));  //   19:17:54

// Timestamp

// 1970.01.01. 00:00 óta eltelt ezredmásodpercek száma
console.log(Date.now());  // 1730831229623

console.log(Date.now() / 1000 / 60 / 60 /24 / 365);

console.log(currentDate.toJSON());

console.log(currentDate.getFullYear());  // 2024

console.log(currentDate.getMonth());   // 10. indexű hónap

console.log(currentDate.getDate());  // 5      a hónapnak a napja

console.log(currentDate.getDay());  // 2       a hétnek a napja

console.log(currentDate.getHours());  // 19    óra

console.log(currentDate.getMinutes());  //  43    perc

console.log(currentDate.getSeconds());   // 0    másodperc

console.log(currentDate.getMilliseconds());  // 681 milliszekundum







