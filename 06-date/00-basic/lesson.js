const currentDate = new Date();

console.log(currentDate);

const eventDate = new Date('January 2, 1999 03:23:45:457');     // GMT 0000

console.log(eventDate);

const eventDate2 = new Date('2000-01-02T03:23:45'); // ajánlott formátum    // GMT 0000
console.log(eventDate2);

const eventDate3 = new Date(2010, 1);   // hónapok indexelése 0-tól indul  // GMT 0000
console.log(eventDate3);

const eventDate4 = new Date(2020, 3, 10, 11, 34, 32, 20);   // GMT +0200
console.log(eventDate4);

console.log('------------------------------------');

// Date metódusok

console.log(currentDate);

console.log(currentDate.toDateString());    // Tue Nov 05 2024

console.log(currentDate.toTimeString());    //  19:12:20 GMT +0100 közép-európai téli idő

console.log(currentDate.toLocaleString('en'));      // angol form. 11/5/2024, 7:17:51 PM

console.log(currentDate.toLocaleString('hu'));      // magyar form. 2024. 11. 05. 19:17:51

console.log(currentDate.toLocaleDateString('hu'));      // csak dátum magyar form. 2024. 11. 05.

console.log(currentDate.toDateString('en'));            // dátum eng. Tue Nov 05 2024


console.log(currentDate.toLocaleTimeString('hu'));      // csak idő hun. 19:17:51

console.log(currentDate.toLocaleTimeString('en'));      // csak idő eng. 7:17:51 PM

console.log('------------------------------------');

// Timestamp

console.log(Date.now());            // 1730830868913    // 1970.01.01. 00:00 óta eltelt ezredmásodpercek száma


console.log(Date.now() / 1000 / 60 / 60 / 24 / 365);    // 54 év telt el a számítás kezdete óta

console.log(currentDate.toJSON()); 

console.log(currentDate.getFullYear());     // 2024

console.log(currentDate.getMonth());    // 10. indexű hónap

console.log(currentDate.getDate());     // 5 nap

console.log(currentDate.getDay());        // hétnek a napja

console.log(currentDate.getDate());     // hónapnak a napja

console.log(currentDate.getHours());        // 19 óra

console.log(currentDate.getMinutes());      // 43 perc

console.log(currentDate.getSeconds());      // másodperc

console.log(currentDate.getMilliseconds());     // miliszekundum


console.log(currentDate.setUTCFullYear(2020));      // 2020 -ig ennyi ezred mp. telt el