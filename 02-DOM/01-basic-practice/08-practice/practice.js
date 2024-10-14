
function highlightLongWords() {

//Írj egy függvényt, ami elkéri a p tag szövegét, majd egy listát csinál a szavakból.

const inputParagraph = document.getElementById("input").textContent;

// 2. lépés: Készítsünk listát a szövegből, a szavakat szóköz alapján elválasztva
const wordsArray = inputParagraph.split(" ");

//Ezután megvizsgálja a szavak hosszát és a 8 karakternél hosszabb szavak színét pirosra állítja.

// 3. lépés: Formázzuk meg a szavakat és állítsuk be a színüket, ha szükséges
let formattedText = "";
for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > 8) {
        // 8 karakternél hosszabb szavakat pirosra formázzuk
        formattedText += "<span style='color:red'>" + wordsArray[i] + "</span> ";
    } else {
        // Rövidebb szavakat változatlanul hozzáadjuk
        formattedText += wordsArray[i] + " ";
    }
}

// 4. lépés: Az eredményt megjelenítjük az output p tagben
document.getElementById("output").innerHTML = formattedText.trim();

}


//Tipp: Használd ki az innerHtml-ben rejlő lehetőséget arra, hogy közvetlenül formázhasd a szöveget.
//if ág: input.innerHTML + "<span style='color:red'>" + input_list[i] + " " + "</span>";

