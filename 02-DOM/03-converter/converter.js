document.addEventListener('DOMContentLoaded',  () => {
    
    //Itt írd meg a converter függvényeit
    //Gombok nélkül is elkérheted az értékeket az oninput property segítségével
    //https://www.w3schools.com/jsref/event_oninput.asp



// másik verzió:

document.querySelectorAll('input').forEach(input => input.addEventListener('change', (event) => {
    const convert = event.target.value;
    switch(event.target.id){
        case 'celsius-input-field':
            document.getElementById('fahrenheit-input-field').value = (convert * 9 / 5) + 32;
            break;
        case 'fahrenheit-input-field':
            document.getElementById('celsius-input-field').value = (convert - 32) / 9 * 5;   
            break;
    }

}


))





});

//egyik verzió:

// function celToFahr() {
//     let celsius = document.getElementById('celsius-input-field').value;
//     document.getElementById('fahrenheit-input-field').value = celsius * (9 / 5) + 32;
// }

// function fahrToCel() {
//     let fahrenheit = document.getElementById('fahrenheit-input-field').value;
//     document.getElementById('celsius-input-field').value = (fahrenheit - 32) / 9 * 5;
// }