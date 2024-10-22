//Ebben a feladatban ki kell számlnod a megadott adatok alapján, hogy mennyi borravalót adj.
//Az első input maga a számla összege, a második input, hogy mennyien osztjátok szét.
//A harmadik egy legördülő menü, amelyből ki lehet választani, hogy mennyire vagy 
//megelégedve a szolgálattással, hány százalékot kapjon a pincér.

//Írd meg az alábbi függvényt úgy, hogy a kapott értékek alapján visszaadja a fejenként fizetendő 
//összeget.

function calculate() {
// Beolvassuk a számla összegét, hányan osztoznak, és a kiszolgálás minőségét
const billAmount = parseFloat(document.getElementById('bill-amount').value);
const shareBill = parseInt(document.getElementById('share-bill').value);
const serviceQuality = parseFloat(document.getElementById('service-quality').value);

// Ellenőrizzük, hogy minden adat helyesen van-e megadva
if (isNaN(billAmount) || billAmount <= 0) {
    alert("Adj meg egy érvényes számlaösszeget!");
    return;
}

if (isNaN(shareBill) || shareBill <= 0) {
    alert("Adj meg egy érvényes számot arra, hogy hányan osztoztok!");
    return;
}

if (serviceQuality === 0) {
    alert("Kérlek válaszd ki, hogy milyen volt a kiszolgálás!");
    return;
}

// tip
const tipAmount = billAmount * serviceQuality;
const totalAmount = billAmount + tipAmount;
const amountPerPerson = totalAmount / shareBill;

// Az eredmény 
document.getElementById('total').innerText = amountPerPerson.toFixed(2) + " HUF fejenként";
}
