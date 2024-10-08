//Ebben a feladatban annyi lesz a dolgod, hogy írj egy függvényt, amely a felhasználótól kapott számokból
//visszaadja a legnagyobb értékűt.
function findMaxNumber() {
    // 1. lépés: Mentsd el az input mezőben kapott számokat egy változóba
    const inputNumbers = document.getElementById("numbers").value;

    // 2. lépés: Alakítsd át a számokat tömbbé, a split() függvény használatával.
    const numbersArray = inputNumbers.split(',').map(Number); // A split feldarabolja a vesszők mentén, majd a map(Number) számmá alakítja az elemeket

    // 3. lépés: Hozz létre egy max változót, és kezdetben állítsd az első számra
    let max = numbersArray[0];

    // 4. lépés: for ciklus és if segítségével keresd meg a legnagyobb számot
    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] > max) {
            max = numbersArray[i]; // Frissítjük a max változót, ha találunk nagyobb számot
        }
    }

    // 5. lépés: Az eredményt megjelenítjük a felhasználónak egy p tagben
    document.getElementById("result").innerHTML = `A legnagyobb szám: ${max}`;
}
