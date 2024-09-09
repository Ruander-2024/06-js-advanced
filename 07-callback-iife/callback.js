/////////////////////////////////////////////////////////////////////////////////////////
//A függvények a meghívás sorrendjében, egymás után futnak le
//Ha változtatni akarunk a sorrenden, akkor a hívás sorrendjén kell változtatni

/////////////////////////////////////////////////////////////////////////////////////////
//Ha fontos, hogy az egyik függvény megvárja a másik futását, mint például egy kalkulátor esetében:


/////////////////////////////////////////////////////////////////////////////////////////
//Nem kell külön meghívnunk, a függvényhívást közvetlenül végezhetjük a calc függvényben
//Így rögtön megkapja paraméterben a számok összegét és biztosan azt fogja kiírni


/////////////////////////////////////////////////////////////////////////////////////////
//Callback függvények
//A függvény egy másik függvény paramétere


/////////////////////////////////////////////////////////////////////////////////////////
//1.FELADAT
function useCallback(callback) {
    callback('Tom');
    callback('Kate');
    callback('Bill');
}

function sayHello(name) {

}

//Indítsd el a programot, melynek feladat, hogy a függvény köszönjön egy keresztnévvel ==> Hello Tom!


/////////////////////////////////////////////////////////////////////////////////////////
//Egy "setTimeout" megkapja a függvényt, mint hivatkozás és 3 sec késleltetéssel fogja kiírni:




/////////////////////////////////////////////////////////////////////////////////////////
/**
 * @Feladat_02
 * Írj meg egy egy sima "helloPrinter" függvényt, amely annyit ír ki, hogy "Hello"
 * Írj meg másik "logName"függvényt, amely csak egy nevet ír ki. pl: "Tom"
 * Egymás után írják ki az eredményt (3 és 4 sec és lehet két külön "setTimeout" deklarálással
 *
 * "Hello"
 * "Tom"
 */
