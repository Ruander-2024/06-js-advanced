//Írj egy függvényt, ami elkéri a p tag szövegét, majd egy listát csinál a szavakból.
//Ezután megvizsgálja a szavak hosszát és a 8 karakternél hosszabb szavak színét pirosra állítja.
//Tipp: Használd ki az innerHtml-ben rejlő lehetőséget arra, hogy közvetlenül formázhasd a szöveget.
//if ág: input.innerHTML + "<span style='color:red'>" + input_list[i] + " " + "</span>";

function highlightLongWords() {
    // 1. lépés: Elkérjük a <p> tag szövegét
    const inputText = document.getElementById("input").innerText;

    // 2. lépés: Feldaraboljuk a szöveget szavakra a szóköz mentén
    const words = inputText.split(" ");

    // 3. lépés: Létrehozunk egy üres stringet, amibe az új, formázott szöveget mentjük
    let formattedText = "";

    // 4. lépés: Végigmegyünk a szavakon, és ellenőrizzük, hogy hosszabbak-e mint 8 karakter
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 8) {
            // Ha a szó hosszabb 8 karakternél, akkor pirosra színezzük
            formattedText += "<span style='color:red'>" + words[i] + "</span> ";
        } else {
            // Ha nem, akkor hagyjuk alapértelmezettként
            formattedText += words[i] + " ";
        }
    }

    // 5. lépés: Az új, formázott szöveget megjelenítjük az output <p> tagben
    document.getElementById("output").innerHTML = formattedText;
}
