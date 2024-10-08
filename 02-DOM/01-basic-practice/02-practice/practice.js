function js_style() {
    //Ebben a feladatban JS segítségével kell formáznod a szöveget.
    //1.lépés: állíts be egy text id-t a html kódban található paragraph tagnek
    //Így állítható be a text id-val ellátott szöveg mérete:
    let text = document.getElementById('text')
    text.style.fontSize = "14px"; 
    //2.lépés: a betűméret mintájára állíts be a font-family értéket is. 
    text.style.fontFamily = "arial, sans serif";
    //Arra ügyelj, hogy a JS nem értelmezi a kötőjelet, ezért a property elnevezést is a 
    //betűméret szerint kell megadni.

    //3.lépés: állítsd be a szöveg színét
    text.style.color = "red";
    //4.lépés: állítsd be a szöveg hátterének színét
    text.style.background = "gold";
    //5.lépés: állíts be border értéket a szövegnek
    text.style.border = "10px dotted green";
    //6.lépés: állítsd be a font-weight-et bold-ra
    text.style.fontWeight = "bold";
}

