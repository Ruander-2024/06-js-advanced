// Date objekt

const currentDate = new Date();

console.log(currentDate);

const eventDate = new Date('January 2, 2000 03:23:45:457'); // GMT 0000
console.log(eventDate);

const eventDate2 = new Date('2000-01-02T03:23:45'); // ajánlott formátum  // GMT 0000
console.log(eventDate2);

const eventDate3 = new Date(2010, 1); // hónapok indexelése 0-tól indul  // GMT 0000
console.log(eventDate3);

const eventDate4 = new Date(2020, 3, 10, 11, 34, 32, 20); // GMT +0200
console.log(eventDate4);

console.log('------------------------');

// Date metódusok

console.log(currentDate);

console.log(currentDate.toDateString()); // Tue Nov 05 2024

console.log(currentDate.toTimeString()); // 19:12:20 GMT+0100 (közép-európai téli idő)

console.log(currentDate.toLocaleString('en')); // 11/5/2024, 7:14:17 PM

console.log(currentDate.toLocaleString('hu')); // 2024. 11. 05. 19:14:53

console.log(currentDate.toLocaleDateString('hu')); // 2024. 11. 05.

console.log(currentDate.toLocaleDateString('en')); // 11/5/2024

console.log(currentDate.toLocaleTimeString('hu')); // 19:16:49

console.log(currentDate.toLocaleTimeString('en')); // 7:17:07 PM