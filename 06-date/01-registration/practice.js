//A feladatod az, hogy írj egy függvényt, ami elmenti a html form értékeit
//Egyből elérheted az id alapján az értékeket: document.registration.name.value;
//Hozz létre egy date változót is, ami a regisztráció idejét fogja eltárolni
//Amikor a felhasználó rákattint a Save gombra, akkor tűnjön el a form és vegye 
//át egy sima div a helyét. 
//A divben írd ki a felhasználó nevét, az email címét és a regisztráció évét, hónapját és napját


function saveForm() {
    // Lekérjük a felhasználó nevét és email címét
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Létrehozzuk a regisztráció dátumát
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Hónap formázása két számjegyre
    const day = date.getDate().toString().padStart(2, '0'); // Nap formázása két számjegyre

    // Beállítjuk a result div tartalmát
    document.getElementById("nameDisplay").innerText = `The name is: ${name}`;
    document.getElementById("emailDisplay").innerText = `The email is: ${email}`;
    document.getElementById("dateDisplay").innerText = `The date of the registration is: ${year}.${month}.${day}.`;

    // Form elrejtése és a result div megjelenítése
    document.querySelector("form").style.display = "none";
    document.getElementById("result").style.display = "block";
}
