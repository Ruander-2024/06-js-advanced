//Ebben a feladatban el kell kérned a felhasználótól a nevét, majd köszönnöd
//kell a neki.

//1.lépés: Hozz létre a html fileban egy input taget, amelynek legyen egy name nevű id-ja
//2.lépés: Hozz létre egy gombot is a html fileban, és az onclick attribútum 
//kapjon egy függvényhívást (pl. getName()) értéknek
//3.lépés: Írd meg a getName() függvényt
//4.lépés: A getName függvényben hozz létre egy name elnevezésű változót, és kérd el
//a document-en meghívott getElementById metódussal a name értékét (document.getElementById("name").value)
//5.lépés: Írd ki a console-ra a name értékét

//6.lépés: Ahhoz, hogy köszönhessünk a felhasználónak egy második függvényt fogunk létrehozni
//legyen ennek a neve: sayHello(). Ez a függvény fogad egy name paramétert.
//7. lépés: Hozz létre a html fileban egy újabb p taget, amely a writeName id-t kapja
//8.lépés: Írjuk meg a sayHello() függvényt, ismét a document getElementById metódusa 
//segítségével most a writeName id-t használjuk. Ahhoz, hogy módosíthassuk a tagben meg-
//jelenő szöveget az innerHTML propertynek fogunk értéket adni: 'Hello ' + name;
//Hint: document.getElementById("writeName").innerHTML


function getName() {
    // 4. lépés
    let name = document.getElementById("name").value;
    
    // 5. 
    console.log('A felhasználó neve: ' + name);

    // 6. 
    sayHello(name);
}

function sayHello(name) {
    // 8. 
    document.getElementById("writeName").innerHTML = 'Hello ' + name + '!'; // Köszöntés
}



