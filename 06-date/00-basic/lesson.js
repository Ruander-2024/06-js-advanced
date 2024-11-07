// Date objekt

const currentDate = new Date();

console.log(currentDate);

const eventDate = new Date('January 2, 2000 03:23:45:457'); // GMT +0100
console.log(eventDate);

const eventDate2 = new Date('2000-01-02T03:23:45'); // ajánlott formátum  // GMT +0100
console.log(eventDate2);

const eventDate3 = new Date(2010, 1); // hónapok indexelése 0-tól indul  // GMT +0100
console.log(eventDate3);

const eventDate4 = new Date(2020, 3, 10, 11, 34, 32, 20); // GMT +0200
console.log(eventDate4);

console.log('------------------------');

// Date metódusok

console.log(currentDate);

console.log(currentDate.toDateString());