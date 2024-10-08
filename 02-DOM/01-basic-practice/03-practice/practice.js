function set_background() {
    //Ebben a feladatban két p elem hátterét kell beállítani js segítségével
    //Ennek lépései:
    //Elmentem a body elemeit egy változóba.
    //Meghívom a document-en a getElementsByTagName metódust,
    //amelynek megadom értéknek azt a taget, amit el akarok kérni
    //végül megadom, hogy az első ilyen elemet szeretném elkérni.
    let body = document.getElementsByTagName("body")[0];

    //Létrehozok még egy változó (tömböt) a p elemeknek 
    let myPargraphs = body.getElementsByTagName("p");

    // Elmentem az első paragraph elemet egy változóba
    let firstParagraph = myPargraphs[0];

    //Beállítom az első paragraph elem háttérszínét pirosra
    firstParagraph.style.background = "red";
    
//FELADAT
    //A fenti minta alapján kérd el a myPargraphs tömb második elemét

    let secondParagraph = myPargraphs[1];

    //Állítsd be a második elem színét kékre

    secondParagraph.style.color = '#381DEC';