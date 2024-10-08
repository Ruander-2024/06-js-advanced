function getAttributes() {

    //Ebben a feladatban a html tagek attribútumainak értékét kérjük el és iratjuk ki a console-ra
    //Létrehozunk egy href változót, amelybe elmentjük a document-en meghívott getElementById metódus
    //segítségével a href értékét, majd a következő sorban ugyanezt kiíratjuk a console-ra.
    const href = document.getElementById("practice").href;
    console.log('A href attribútum értéke : ' + href);

    //1. Feladat
    //A példa mintájára kérd el a hreflang értékét és írasd ki a console-ra.
    // Bónusz feladat, fűzz össze vesszővel elválasztva az étékeket és írd ki
    // egy új <p> -be a gomb alá

    const hreflang = document.getElementById("practice").hreflang
    console.log('a hreflang attribútum értéke' + hreflang);
    
    //2. Feladat
    //A példa mintájára kérd el a target értékét és írasd ki

    const target = document.getElementById('practice').target;
    console.log('A tpe attribútum értéke' + target);
    


    //3. Feladat
    //A példa mintájára kérd el a type értékét és írasd ki

    const type = document.getElementById('practice').type;
    console.log('A tpe attribútum értéke' + type);


    // Bónusz feladat helyezz el egy bekezést "result" id-val és a beltartalmában
    // jelenítsd meg vesszővel elválasztva az értékeket

    const resultParagraph = document.getElementById("result");
    const combinedValues = `${href},${hreflang},${target},${type}` // Vesszővel elválasztott értékek
    resultParagraph.textContent = combinedValues; // Beállítjuk a bekezdés tartalmát
}

    // Output a bekezdésben: https://www.veszpzoo.hu/,en-us,_self,text/html 