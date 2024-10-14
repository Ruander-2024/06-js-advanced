//Ebben a feladatban annyi lesz a dolgod, hogy írj egy függvényt, amely a felhasználótól kapott számokból
//visszaadja a legnagyobb értékűt.

function findMaxNumber() {

//1.lépés: Mentsd el az input mezőben kapott számokat egy változóba

const numbersInput = document.getElementById("numbers").value;

//2.lépés: Az elmentett számokat alakítsd át tömbbé, a split() függvény használatával.

const numbersArray = numbersInput.split(",").map(Number);

//3.lépés: Hozz létre egy max változót

let max = numbersArray[0];

//4.lépés: for ciklus és if segítségével keresd meg a számok közül a legnagyobbat

for (let i = 1; i < numbersArray.length; i++) {
    if (numbersArray[i] > max) {
        max = numbersArray[i];
    }
}

//5.lépés: Add vissza a max értékét felhasználónak egy p tagben

document.querySelector("p").textContent = "A legnagyobb szám: " + max;


//Tipp1: Az input mezőbe akkor tudsz vesszővel elválasztva több számot beadni, ha text-et vár
//Ha textet vár, akkor a függvényben kell kezelned azt, hogy számként értelmezze
//Tipp2: Ha azt szeretnénk, hogy számként értelmezze, akkor + jelet kell az elem elé tenni




}