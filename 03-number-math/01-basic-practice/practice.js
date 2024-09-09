//////////////////////////////////////////////// ELSŐ FELADAT ////////////////////////////////////////////////
//A felhasználó megad egy számot, de valamilyen okból szövegként értelmezi a program.
//Nézzük meg, hogyha megpróbáljuk a string formátumú és a number formátumú értékeket megszorozni, 
//akkor mi történik. 
function convertTextToNumber(input) {
    return input * 2;
};

console.log(convertTextToNumber('300.458'));
console.log(convertTextToNumber(300.458));
console.log(convertTextToNumber('szia'));

//////////////////////////////////////////////// MÁSODIK FELADAT ////////////////////////////////////////////////
//Valutaváltást követően 8-10 tizedes pontossággal kapsz értékeket, de ez a felhasználónak felesleges 
//információ lehet. A number.toFixed(tizedes) függvény segítségével adj lehetőséget a arra, hogy beállíthassa 
//hányadik tizedesig szerené látni a számot.

function fixFloat(number, precision) {

};

console.log(fixFloat(123.3918741264127624198,2));
console.log(fixFloat(123.54798545656,3));
console.log(fixFloat(123.1321233,4));
console.log(fixFloat(123.42487982320234487987874,5));

//////////////////////////////////////////////// HARMADIK FELADAT ////////////////////////////////////////////////

//Írd meg a függvényt úgy, hogy a paraméterben kapott tömb elemeit átalakítsa 2 tizedesjegyig.
function getNumber() {
    
};


