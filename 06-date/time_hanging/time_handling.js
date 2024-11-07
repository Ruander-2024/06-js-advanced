// setTimeout

console.log('Start');

(function TimeOut() { // Várakoztathatjuk a lefutását egy programrésznek, így a lefutása a végén történik
    setTimeout(() =>{
        console.log('Eltelt 3 másodperc');
    }, 3000)
})();

console.log('End');

// Interval - setInterval. clearInterval

const timerText = document.getElementById('timer-text');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');

let counter = 0; // Számláló
let intervalID;

startButton.addEventListener('click', () =>{
    intervalID = setInterval(() => {
        counter++; // counter = counter + 1
        timerText.innerHTML = counter;
    }, 1000)
    console.log(counter);
});

pauseButton.addEventListener('click', () =>{
    clearInterval(intervalID);
    console.log(counter);
})