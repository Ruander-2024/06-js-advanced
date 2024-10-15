document.addEventListener('DOMContentLoaded', () => {
    //Ebben a feladatban egy todo listát kell létrehoznod, amihez a html fájl már adott
    //A program az input mezőbe beírt értéket felveszi egy listába, a mellette található
    //remove gombbal pedig egyszerűen törölni lehet majd ezeket az értékeket
    //Hint: Az új tagek (tr,td és button) létrehozásához használd:
    // https://www.w3schools.com/jsref/met_document_createelement.asp

   
        const addButton = document.getElementById('add-button');
        const newItemInput = document.getElementById('new-item-input-field');
        const itemsTable = document.getElementById('items-table');
    
        addButton.addEventListener('click', () => {
            const newItemText = newItemInput.value.trim();
    
           
            if (newItemText !== '') {
                // Új sor (tr) létrehozása
                const newRow = document.createElement('tr');
    
                // Új cella (td) létrehozása az item szövegének
                const newCell = document.createElement('td');
                newCell.textContent = newItemText;
    
                // Új cella (td) létrehozása a Remove gombnak
                const removeCell = document.createElement('td');
                const removeButton = document.createElement('button');
                removeButton.textContent = 'Remove';
    
                // Remove gomb eseménykezelő
                removeButton.addEventListener('click', () => {
                    itemsTable.removeChild(newRow); // Törli a sor
                });
    
                // Összeállítás
                removeCell.appendChild(removeButton);
                newRow.appendChild(newCell);
                newRow.appendChild(removeCell);
                itemsTable.appendChild(newRow); // Új sor hozzáadása a táblázathoz
    
                // Input mező törlése az új elem hozzáadása után
                newItemInput.value = '';
            } else {
                alert('Nem írtál semmit.'); // Figyelmeztetés üres mező esetén
            }
        });
    });
    
