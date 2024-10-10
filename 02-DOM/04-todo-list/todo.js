document.addEventListener('DOMContentLoaded', () => {
    //Ebben a feladatban egy todo listát kell létrehoznod, amihez a html fájl már adott
    //A program az input mezőbe beírt értéket felveszi egy listába, a mellette található
    //remove gombbal pedig egyszerűen törölni lehet majd ezeket az értékeket
    //Hint: Az új tagek (tr,td és button) létrehozásához használd:
    // https://www.w3schools.com/jsref/met_document_createelement.asp

    document.getElementById('add-button').addEventListener('click', () => {
        let addTr = document.createElement('tr'); // tr tag hozzáadása
        let addTd = document.createElement('td'); // td tag hozzáadása

        addTd.innerText = document.querySelector('#new-item-input-field').value;
        addTr.appendChild(addTd);
        
        let removeBtn = document.createElement('button'); // törlő gomb hozzáadása
        removeBtn.innerText = 'Remove'; // A gomb szövegének a beállítása
        removeBtn.addEventListener('click', () => {
            addTr.remove();
        });

        addTr.appendChild(removeBtn);
        if(addTd.innerText.length > 0){
            let table = document.querySelector('#items-table');
            table.appendChild(addTr);
        }
        else{
            alert("You can't add anything...")
        }
    })

    
});