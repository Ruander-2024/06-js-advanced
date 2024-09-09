//Az a feladatod, hogy a Fetch API segítségével https://randomuser.me/api/?results=10 oldalról 
//betöltsd a usereket az oldaladra (kép, first/last name). Ehhez Requestet is létre kell hoznod.
//A Html fájl már elkészült. 
//Hint: createEelemnt();, appendChild(); 
//Ne feledd el a hibakezelést sem.
//Ha az url-ről már sikerül a betöltés, akkor a tanultak szerint a mappában található db.json 
//fileból is olvasd be a usereket

const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results=10';

