// document.addEventListener('DOMContentLoaded', function () {
// document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', () => {

        //Itt írd meg a számológép függvényeit
    
        // const num1 = document.querySelector('#inputfield1'); // Első beviteli érték
        // const num2 = document.querySelector('#inputfield2'); // Második beviteli érték
    
        // const add = document.querySelector('#add-button'); // összeadás
        // const sub = document.querySelector('#subtract-button'); // kivonás
        // const multi = document.querySelector('#multiply-button'); // szorzás
        // const divide = document.querySelector('#divide-button'); // osztás
    
        // let result = document.querySelector('#resultfield');
    
        // add.addEventListener('click', () => {
        //     let add = Number(num1.value) + Number(num2.value) //parseFloat
        //     result.textContent = add;
        // });
    
        // sub.addEventListener('click', () => {
        //     let sub = Number(num1.value) - Number(num2.value) //parseFloat
        //     result.textContent = sub;
        // });
    
        // multi.addEventListener('click', () => {
        //     let multi = Number(num1.value) * Number(num2.value) //parseFloat
        //     result.textContent = multi;
        // });
    
        // divide.addEventListener('click', () => {
        //     let divide = Number(num1.value) / Number(num2.value) //parseFloat
        //     result.textContent = divide;
        // });
    
        // let result = document.querySelector('#resultfield');
    
        const buttons = document.querySelectorAll('button'); // Gombok
        buttons.forEach(currentBtn => currentBtn.addEventListener('click', (event) => {
            function calc(a, b){
                switch(event.target.innerText){
                    case '+':
                        return +a + +b;
                    case '-':
                        return +a - +b;
                    case '*':
                        return +a * +b;
                    case '/':
                        return +a / +b;
                }
            }
    
            const num1 = document.querySelector('#inputfield1').value; // Első beviteli érték
            const num2 = document.querySelector('#inputfield2').value; // Második beviteli érték
            document.querySelector('#resultfield').innerText = calc(num1, num2);
        }))
    
        
    
        
    
    });
    
    // const numbers = [1, 2, 3, 4, 5];
    
    //     numbers.forEach(function(i) {
    //         console.log(i);
    //     })
    