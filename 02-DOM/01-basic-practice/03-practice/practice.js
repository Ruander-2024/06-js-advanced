function set_background() {
    //Ebben a feladatban két p elem hátterét kell beállítani js segítségével
    //Ennek lépései:
    //Elmentem a body elemeit egy változóba.
    let body = document.getElementsByTagName("body")[0];
    //Meghívom a document-en a getElementsByTagName metódust,
    //amelynek megadom értéknek azt a taget, amit el akarok kérni
    //végül megadom, hogy az első ilyen elemet szeretném elkérni.

    // Létrehozok még egy változó (tömböt) a p elemeknek 
    let myParagraphs = body.getElementsByTagName("p");

    // Elmentem az első paragraph elemet egy változóba
    let firstParagraph = myParagraphs[0];

    // Beállítom az első paragraph elem háttérszínét pirosra
    firstParagraph.style.background = "red";

    // A fenti minta alapján kérd el a myParagraphs tömb második elemét
    let secondParagraph = myParagraphs[1]; // A második p elem lekérése

    // Állítsd be a második elem színét kékre
    if (secondParagraph) { // Ellenőrizzük, hogy létezik-e a második bekezdés
        secondParagraph.style.color = "#381DEC"; // Kék háttérszín beállítása
    }
}
