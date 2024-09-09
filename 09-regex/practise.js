/**
 * @Exercise_01 "A username validator"
 * Készítsd el egy rövid felhasználónév validátorát regex segítségével. Kritériumok:
 * a, Nagybetűvel kezdődik (angol abc)
 * b, Utána két darab kisbetű (angol abc)
 * c, Két darab számjegy követi a vége vagy egy nagybetű vagy egy számjegy.
 * Adunk két rossz és egy jó valid usernevet tesztelni
 * Próbálgasd a valid usernév átírását, hogy teszteld, hogy valóban jó egy a regex megoldásod
 */
 console.log('-------- Exercise 01 ---------');


/**
 * @Exercise_02 A "password validator"
 * Készítsd el egy jelszó validátorát regex segíségével
 * Kritériumok:
 * Egy vagy több kisbetűvel kell kezdődnie
 * Utána kell tartalmaznia egy karaktert a következőkből: "!", "=", ","
 * Majd tartalmazhat tetszőleges számjegyet, vagy betűt 3-tól 10 darabig
 * Adunk két rossz és egy jó valid jelszót tesztelni
 * Próbálgasd a valid jelszó átírását tesztelve, hogy valóban jó egy a regex megoldásod
 */
 console.log('------------ Exercise 02 --------');

 const invalidPassword = 'd432fdsgf';
 const invalidPassword2 = 'dj,456783Ankdnskndksn';
 const validPassword = 'df=4g45G';


/**
 * @Exercise_03 Az "email validator"
 * Készíts el egy email validatort regex segítségével
 * Kritériumok:
 *
 * kisbetűvel kezdődik, utána lehet 1-10 db tetszőleges (angol) betű vagy számjegy
 * utána vagy van, vagy nincs egy "." karakter, de ha van pont, akkor utána kell 1-10 db tetszőleges betű vagy számjegy
 * utána egy darab "@" jel található
 * utána csak kisbetűből álló rész lehet 2-10db karakterben
 * utána egy "." karakter található
 * végül 2 vagy 3 darab kisbetűre végződik
 *
 * Hint: az üres "string karakter" így szokták jelölni: ^$
 */

 console.log('---------- Exercise 03 ------');

 const invalidEmail1 = 'D23232@pm.hu';
 const invalidEmail2 = 'd23232.@pm.hu';
 const invalidEmail3 = 'd23232@pm.h';
 const invalidEmail4 = '1bill.gates21@pm.com';
 const invalidEmail5 = 'bill21789102@micro.com';


 const validEmail = 'bill.gates21@micro.com';

/**
 * @Exercise_04 regex használata "search()" metódusban
 * Készíts egy metódust, mely ellenőrzi, hogy létezik e TAJ szám egy szövegben, és visszaadja az indexét.
 * (Hol található a szövegben)
 * Használd fel a "search()" metódust és a regex-et
 * Ha nincs a szövegben TAJ szám, akkor térjen vissza "Taj not found" üzenettel
 * TAJ minta: "123 234 444"
 */
console.log('---------- Exercise 04 ------');

function findPlaceOfTAJ(str) {}

console.log(findPlaceOfTAJ("Személynek van 012 321 321 számú TAJ azonosítója"))   //15
console.log(findPlaceOfTAJ("Személynek nincs TAJ azonosítója"))   // "Taj not found"


/**
 * @Exercise_05 regex használata a "replace()" metódusban
 * Készíts egy metódust, ami minden jelszót kicserél nyold darab csillagra egys szövegben
 * Jelszó mintája 4 betű két spec karakter ("." vagy ":") és 4 számjegyből áll.
 * Pl: "asjk.:1234"
 * A függvény visszatérési értéke legyen a *-kra cserélt szöveg.
 * Hint: a "replace()" metódusnál a regexet "global" flaggel kell ellátni, ha minden találatot ki akarunk cserélni...
 */
console.log('---------- Exercise 05 ------');

function hidePasswords(str){}

console.log(hidePasswords('A felhasználók jelszavai: asjk.:1234 és kloi::5432')); //A felhasználók jelszavai: ********** és **********
console.log(hidePasswords('A felhasználók jelszavai:')); //A felhasználók jelszavai:
