document.addEventListener('DOMContentLoaded', () => {
//Ebben a feladatban a word_1 kép szerinti programot kell megírnod, ami annyit csinál,
//hogy az input mezőben kapott szavakat megvizsálja, majd kiírja egy táblázatba őket
//és az előfordulásuk számát is.
//A táblázat új elemeinek létrehozásához használd: 
//https://www.w3schools.com/jsref/met_document_createelement.asp



const resultTable = document.getElementById('result-table');


document.getElementById('count-button').addEventListener('click', () => {
    const textArea = document.getElementById('text');
    const words = textArea.split(' ');
    let countObj = {};

    if(textArea.innerText.length < 1)
        alert('Write something first');

    for(let i = 0; i < words.length; i++){
        if(){

        }
        else{
            
        }
    }

    resultTable.innerHTML = '';
    // remove.resultTable.innerHtml;
})

});












