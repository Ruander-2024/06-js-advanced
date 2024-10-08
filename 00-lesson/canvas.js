let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');

let image = document.querySelector('img');

ctx.fillStyle = 'red'; //kitöltés pirossal
/*ctx.fillRect(0, 0, 300, 100); téglalap készítés*/

/*ctx.beginPath(); //itt kell kezdenie figyelni a változást
ctx.arc(250, 125, 50, 0, Math.PI * 2); //kör rajzolás
ctx.fill();
//körön belüli kör
ctx.fillStyle = 'green'; 
ctx.beginPath();
ctx.arc(250, 125, 25, 0, Math.PI * 2);
ctx.fill();*/

// Oszlopdiagramm

let data = [90, 340, 120, 260, 190, 300];

function drawBarChart() {
    let barWidth = 50;
    let startX = 50;
    let startY = canvas.height - 50;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(let i = 0; i < data.length; i++){
        let barHeight = data[i];
        ctx.fillStyle = 'magenta';
        ctx.fillRect(startX, startY - barHeight, barWidth, barHeight);
        startX = startX + 100;
    }
}

drawBarChart();