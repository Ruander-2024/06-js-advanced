//Ebben a feladatban ki kell számlnod a megadott adatok alapján, hogy mennyi borravalót adj.
//Az első input maga a számla összege, a második input, hogy mennyien osztjátok szét.
//A harmadik egy legördülő menü, amelyből ki lehet választani, hogy mennyire vagy 
//megelégedve a szolgálattással, hány százalékot kapjon a pincér.

//Írd meg az alábbi függvényt úgy, hogy a kapott értékek alapján visszaadja a fejenként fizetendő 
//összeget.

function calculate() {
    // Számla összegének lekérdezése
    const billAmount = Number(document.getElementById("bill-amount").value);
    
    // Számlán osztozó személyek számának lekérdezése
    const numberOfPeople = Number(document.getElementById("share-bill").value);
    
    // Szolgáltatás minőségének lekérdezése
    const serviceQuality = Number(document.getElementById("service-quality").value);

    // Ellenőrzés, hogy az értékek megfelelően vannak-e megadva
    if (isNaN(billAmount) || isNaN(numberOfPeople) || numberOfPeople <= 0 || serviceQuality === 0) {
        alert("Kérlek, adj meg minden értéket megfelelően!");
        return;
    }

    // Borravaló kiszámítása
    const tipAmount = billAmount * serviceQuality;
   
    // Fejenkénti összeg kiszámítása
    const amountPerPerson = tipAmount / numberOfPeople;

    // Az eredmény megjelenítése
    document.getElementById("total").innerText = amountPerPerson.toFixed(2) + " HUF";

}


//     const divisonResult = num1 / num2;

// const finalResult = divisonResult * num3;

// document.getElementById('total').innerText = finalResult.toFixed(2);
// }