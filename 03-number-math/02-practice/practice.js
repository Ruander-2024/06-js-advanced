//Szeretnénk, hogy a getWord() függvény visszaadjon egy szót, ehhez írd meg a lenti függvényeket.
//A getWord függvényhez már nem kell hozzányúlnod!

function getWord() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const minArray = [102, 33, 49, 87, 333, 9, 65, 17];
    const maxArray = [10, 11, 3, 2, 4, 2.2, 12.4, 5.3, 19];
    const resultWord = alphabet[getMin(minArray)]
        + '' + alphabet[getRound(0.2344442212121233149)]
        + '' + alphabet[getFloor(21.12652321232133435)]
        + '' + alphabet[getRound(0.2344442212121233149)]
        + '' + alphabet[getCeil(18, 4561235465465)]
        + '' + alphabet[getFloor(getPI() - 1)]
        + '' + alphabet[(getPow(3, 2) * 2) - 1]
        + '' + alphabet[getPow(2, 3)]
        + '' + alphabet[getPow(4, 2) - 1]
        + '' + alphabet[getMax(maxArray)];
    document.getElementById("word").innerText = resultWord;
}

function getMin(array) {
    //Keresd meg add vissza a legkisebb értéket
    //Ahhoz, hogy a paraméterben kapott tömböt használni tudd a min függvényben, 
    //tedd elé: ...
};

function getRound(number) {
    //Add vissza a paraméterben kapott szám kerekített értékét
}

function getMax(array) {
    //Keresd meg és add vissza a legnagyobb értéket.
    //Ahhoz, hogy a paraméterben kapott tömböt használni tudd a min függvényben, 
    //tedd elé: ...
};

function getPow(first, second) {
    //Add vissza a hatványozott értéket (pow() függvény segítségével)
};

function getFloor(numberFloor) {
    //Add vissza a paraméterben kapott tört számhoz (alsó) legközelebb eső egész szám értékét (floor())
};

function getCeil(number) {
    //Add vissza a paraméterben kapott tört számhoz (felső) legközelebb eső egész szám értékét (ceil())
};

function getPI() {
    //Add vissza a PI értékét
}