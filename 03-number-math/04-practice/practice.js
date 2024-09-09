//Ezekben a feladatokban random számokat kell generálnod
//Egészítsd ki a generateRandom függvényt az alábbiak szerint:
//hozz létre egy változót, amelynek a Math.random() ad egy véletlenszerű értéket
//írasd ki ezt az értéket a console-ra
//írd bele a random értéket egy tagbe a html fájlban
function generateRandom() {
    
};

//A random számok generálásánál lehetőségünk van arra, hogy megadjuk mekkora számot szeretnénk kapni.
//Ehhez egy határértéket kell megadni, a html fájlban ehhez már létrehoztunk egy input mezőt, 
//ennek az értékét kell lementened egy változóba.
//Generálj egy random számot így: Math.floor(Math.random() * Math.floor(határérték helye));
//A határértéknél kisebb számokat fog generálni, így ha 0 és 10 között szeretnénk számokat, 
//akkor 11 lesz ez az érték.
//Írd ki a html fájlba a kapott számot.
function generateRandomWithBound() {
    
};

//A következő feladatban random (háttér)színeket fogunk generálni egy szövegnek.
//A színeket rgb-ben tudod megadni (max 255).
//Hozz létre három random számot r,g,b változóknak
//Állítsd be a "color-resuld" id-vel ellátott szöveg színét (style.color) és add meg az rgb értékét a
//változók segítségével.
//A függvényben meghívtunk egy másodikat, amely a háttérszín beállítását végzi.
//Ennek a függvénynek a mintájára állítsd be a háttérszínt is random értékekkel.
function generateRandomColor() {
    setDefaultStyle();
   
    generateRandomBackgroundColor();
};

function generateRandomBackgroundColor() {
    
};

//Ha megnézed a két fenti függvényt, sok ismétlést tartalmaz. 
//Szervezd ki a randomszám generálást egy külön függvénybe és azt hívd meg a fenti függvényekben.
function getRandomNumber() {
};

//Bár már színes, de továbbra is elég szegényes a szövegünk kinézete.
//A lenti függvény segítségével formázd meg kicsit (padding, textAlign stb.)
//Hint: Erről a DOM/basic/02-practiceben volt példa
function setDefaultStyle() {
    
};
