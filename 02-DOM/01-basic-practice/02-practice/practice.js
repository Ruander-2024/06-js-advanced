function js_style() {
    // 1. lépés: A szöveget a text id-vel kell formázni
    let text = document.getElementById("text");

    // 2. lépés: Állítsd be a font-size értékét
    text.style.fontSize = "14px";

    // 3. lépés: Állítsd be a font-family értéket
    text.style.fontFamily = "Arial, sans-serif"; // Példa: Arial

    // 4. lépés: Állítsd be a szöveg színét
    text.style.color = "red"; // Példa: kék szín

    // 5. lépés: Állítsd be a szöveg hátterének színét
    text.style.backgroundColor = "gold"; // Példa: világos sárga

    // 6. lépés: Állítsd be a border értéket
    text.style.border = "20px dotted green"; // Példa: fekete szegély

    // 7. lépés: Állítsd be a font-weight-et bold-ra
    text.style.fontWeight = "bold"; // Félkövér betű
}
