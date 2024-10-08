//Ebben a feladatban egy számológép négy funkcióját kell megjelenítened.
//A html kódban már minden elő van készítve, csak a gombokhoz kell hozzákapcsolnod
//az új függvényeket.
//Az első függvény adott, ennek mintájára írd meg a többit.
//Ahhoz, hogy a két szám ne szövegként fűződjön egybe az összeadáskor +jeleket
//kell a változók elég tenni, így számként fogja érzékelni és összeadja.
//A többi műveletnél erre nem lesz szükség.

function addNumbers() {
    const firstAdd = document.getElementById("firstAdd").value;
    const secondAdd = document.getElementById("secondAdd").value;
    document.getElementById("add-result").innerHTML = +firstAdd + +secondAdd;
}

//Írj egy függvényt, ami az első számot kivonja a másodikból
function subtractNumbers() {
    const firstExtract = document.getElementById("firstExtract").value;
    const secondExtract = document.getElementById("secondExtract").value;
    document.getElementById("extract-result").innerHTML = firstExtract - secondExtract;
}

//Írj egy függvényt, ami megszorozza a két számot egymással

function multiplyNumbers() {
    const firstMultiply = document.getElementById("firstMultiply").value;
    const secondMultiply = document.getElementById("secondMultiply").value;
    document.getElementById("multiply-result").innerHTML = firstMultiply * secondMultiply;
}
//Írj egy függvényt, ami elosztja a második számot az elsővel

function divideNumbers() {
    const firstDivide = document.getElementById("firstDivide").value;
    const secondDivide = document.getElementById("secondDivide").value;

    // Ellenőrizze, hogy a második szám nem 0
    if (secondDivide == 0) {
        document.getElementById("divide-result").innerHTML = "Nem osztható nullával!";
    } else {
        document.getElementById("divide-result").innerHTML = firstDivide / secondDivide;
    }
}











