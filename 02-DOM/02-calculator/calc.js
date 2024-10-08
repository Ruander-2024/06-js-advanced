document.addEventListener('DOMContentLoaded', () => {

    //Itt írd meg a számológép függvényeit


    const add = document.querySelector('#add-button');
    const sub = document.querySelector('#subtract-button');
    const multi = document.querySelector('#multiply-button');
    const divide = document.querySelector('#divide-button');


    add.addEventListener('click', () => {
        let add = Number(num1.value) + Number(num2.value)
        result.textContent = add;
    });

    sub.addEventListener('click', () => {
        let sub = Number(num1.value) - Number(num2.value)
        result.textContent = sub;
    });

    multi.addEventListener('click', () => {
        let multi = Number(num1.value) * Number(num2.value)
        result.textContent = multi;
    });

    divide.addEventListener('click', () => {
        let divide = Number(num1.value) / Number(num2.value)
        result.textContent = divide;
    });

    // let result = document.querySelector('#resultfield');
    
    const buttons = document.querySelectorAll('button'); // Gombok
    buttons.forEach(currentBtn => currentBtn.addEventListener('click', (event) => {
        function calc(a, b){
            switch(event.target.innerText){
                case '+':
                    return +a + +b;
                case '-':
                    return +a - +b;
                case '':
                    return +a +b;
                case '/':
                    return +a / +b;
            }
        }

        const num1 = document.querySelector('#inputfield1').value; // Első beviteli érték
        const num2 = document.querySelector('#inputfield2').value; // Második beviteli érték
        document.querySelector('#resultfield').innerText = calc(num1, num2);
    }))


   

});

/*const numbers = [1, 2, 3, 4, 5];

    numbers.forEach(function(i) {
        console.log(i);
        
    })*/