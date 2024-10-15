document.addEventListener('DOMContentLoaded', () => {
//Ebben a feladatban a word_1 kép szerinti programot kell megírnod, ami annyit csinál,
//hogy az input mezőben kapott szavakat megvizsálja, majd kiírja egy táblázatba őket
//és az előfordulásuk számát is.
//A táblázat új elemeinek létrehozásához használd: 
//https://www.w3schools.com/jsref/met_document_createelement.asp



const countButton = document.getElementById('count-button');
    const textArea = document.getElementById('text');
const resultTable = document.getElementById('result-table');

/*if (textArea.innerText.length<1){
    alert('nem írtál semmit')
};*/
    countButton.addEventListener('click', () => {
        // A táblázat törlése
        
        resultTable.innerHTML = ''; // Korábbi tartalom törlése

        // A szöveg beolvasása
        const text = textArea.value.trim();

        // A szavak tömbbe rendezése (szóközökkel elválasztva)
        const words = text.split(/\s+/);
        const wordCount = {};

        // A szavak számolása
        words.forEach(word => {
            word = word.toLowerCase(); // kisbetűssé alakítjuk
            if (word) {
                wordCount[word] = (wordCount[word] || 0) + 1;
            }
        });

        // A táblázat fejlécének létrehozása
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const wordHeader = document.createElement('th');
        wordHeader.textContent = 'Szó';
        const countHeader = document.createElement('th');
        countHeader.textContent = 'Előfordulás';
        headerRow.appendChild(wordHeader);
        headerRow.appendChild(countHeader);
        thead.appendChild(headerRow);
        resultTable.appendChild(thead);

        // A táblázat törzsének létrehozása
        const tbody = document.createElement('tbody');

        // A táblázat feltöltése
        for (const [word, count] of Object.entries(wordCount)) {
            const row = document.createElement('tr');

            const wordCell = document.createElement('td');
            wordCell.textContent = word;
            row.appendChild(wordCell);

            const countCell = document.createElement('td');
            countCell.textContent = count;
            row.appendChild(countCell);

            tbody.appendChild(row);
        }

        resultTable.appendChild(tbody);
    });


});