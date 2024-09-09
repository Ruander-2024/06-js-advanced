function changeColor() {
    text.style.color = "red";
};



let counter = 15;

const start = setInterval(startCounter, 500);

function startCounter() {
    document.getElementById("counter").innerHTML = counter; 
    counter--;
    if(counter < 0) {
        stopCounter();
    }
}

function stopCounter() {
    clearInterval(start);
}