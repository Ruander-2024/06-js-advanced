// Felszolgáló és servíz asztal segitségével  készítsd el a fel az async feladatodat
// Lépésrő lépésre végig vezetünk.
'use strict';

// Mentsd el az indexHml file- <ul> elemét, használd a class értékét
let listHolder;

// Készíts egy metódust ami megkap egy objektumot és egy html elemet. 
// Ez lesz a kasszánk, ami ki tujda listázni a számlafizető vengéd adatait
// Az objektum proprerty listáját kell majd az elem tartalmaként ki listázni
const cassaPrintBill = (userData, element) => {
    let data = '';
    // Készítsd ciklust, ami végig megy az objektum belső értékein.
    // Készíts egy "belső tartalma <li> elemekkel és az objektum értékeivel"

    element.innerHTML = data;
    console.log('Print bill in HTML');
}


// Készítsd el a metódust ami meghív egy json-servert (használd a db-könyvtár generated.json file-t )
// Paraméterként egy id-t várjon a metódus, hogy melyik user adatát kérje el.
const serviceTable = async(id) => {
    let guest = {};
    // Készíts egy firstWaiter fetch hívást 
    // ("első felszolgáló", aki elrohan a vendég adataiért, a megfelelő id-val lekésri az adatait)
    let firtsWaiter;

    // Ha lefutt sikeres a hívás, a helyi guest ("vendég") objektum mentse el a hívásból megkapott adatot ("user-t").
    // Miután megérkezett az adat(mentés) a kassza (cassaPrintBill) nyomtassa ki a számlát adatait a listába. 
    // Figyelj arra, hogy akkor tudják csak kinyomtatni az adatokat, ha visszaért a felszolgáló
    // További feladatot lásd lejebb...

}

serviceTable(1);

// ---- 2 feladat. -----
// Érkezik még egy felszolgáló a serviceTable metódusba (secondWaiter)
// Amikor visszatér az első felszolgáló, akkor ő is elrohan a következő (id + 1) vendéghez. 
// Ha visszatért az adataival, akkor a quest (vendég) objektumban elhelyezi a másik vendég azonosítóját (id-t) => guest.secondId = data.id
// A Kasszának meg kell várnia míg mindkét felszolgáló visszaér, utána kinyomtatja az adatokat
// Meg kell jelenni az első vendég adatainak plusz a végén egy új sorban  a 2- vendég id-val


// ---------- 3. feladat bónusz ----------
// Hozz létre egy restaurant js-filet.
// Importáld bele a ezt a két metódust, kösd össze module-ként az index.html- file-al
// Így nyílik lehetőséged megtanulni hogy lehet egy "http Kliens file-t több helyen felhasználni"

// --------- 4. feladat (haladó) ------------
// Fenti minta alapján építsd fel a restaurant.js-ben még egy http hívást akár nulláról, 
// akár régi metódusokat felhasználva. 
// Ha megvagy kapcsold ki a server futását.
// Hívd meg (try ággal)  a servert fetch hívásban, ha nem éri el a szervert, 
//  akkor várjon 5 mp-et és hívja újra! 
// Max 3-4 próbálkozása legyen a fetch hívásnak, ha nem érte el a servert végleg, írja ki "nincs válasz"
// Ha közben bekapcsolód a servert (a 3-4 ciklus ideje alatt), akkor jelenítse meg az adatokat a html -listában

// Hint: setTimeout-t használhatod, és egy metódus megtudja hívni önmagát (ez a rekurzió),de nagyon figyelni kell arra
// hogy legyen egy egyértelmű feltétel, ami meggátolja hogy végtelenül önmagát hívja egy függvény (esetünkben egy számláló)

// SOK SIKERT!