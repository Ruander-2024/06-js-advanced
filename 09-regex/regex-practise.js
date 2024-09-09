// Feladatok
// Írj reguláris kifejezést Visa típusú bankkártyák bankszámlaszámának validálására! 
//Teszteld is a megoldásod!

// Írj reguláris kifejezést IP cím validálására! Teszteld is a megoldásod!

// Írj reguláris kifejezést MAC cím validálására! Teszteld is a megoldásod!

// Az előző három reguláris kifejezést és a validálást egy objekten belül készítsd el. 
// Az objektnek egyen egy rules property-e ami objektmunban tárolja a mintákat, és egy 
// validate metódusa, ami paraméterként kap egy string értéket, és azt, melyik mintát 
// kell ráilleszteni. A visszatérési értéke egy boolean legyen, amnek az értéke attól függ, 
// illeszkedik e a minta.


// Ellenőrizd, hogy a paraméterben megkapott string megfelel-e a következő mintának: (123) 456-7890
// Példák:
// "(123) 456-7890"  => true
// "(1111)555 2345"  => false
// "(098) 123 4567"  => false

// function validPhoneNumber(phoneNumber){

// }

// validPhoneNumber("(123) 456-7890");

// BÓNUSZ FELADAT

// Ellenőrizd, hogy a paraméterben megkapott string megfelel az alábbiaknak:
// - legalább egy nagybetű
// - legalább egy kisbetű
// - legalább egy szám
// - legalább 6 karakter hosszú
// Tipp: itt érdemes lehet több vizsgálatot összefűzni, vagy utánanézni a "lookahead assertion" regex kifejezésnek 

// function validatePassword(password) {
// }