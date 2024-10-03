let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');

let image = document.querySelector('img');

// Alakzatok

// ctx.fillStyle = 'red';
// ctx.fillRect(0, 0, 300, 200); // Téglalap készítés

// ctx.fillStyle = 'blue';
// ctx.beginPath();
// ctx.arc(250, 125, 50, 0, Math.PI * 2); // Kör készítés
// ctx.fill();

// ctx.fillStyle = 'green';
// ctx.beginPath();
// ctx.arc(250, 125, 25, 0, Math.PI * 2);
// ctx.fill();


// Kép szerkesztés

// ctx.drawImage(image, 100 ,100)         // A teljes kép beillesztése adott koordinátába

// ctx.drawImage(image, 110, 200, 100, 100)    // A kép kicsinyített változatát illesszük be adott koordinátákba

// ctx.drawImage(image, 200, 200, 100, 100, 350, 260, 150, 150);   // Adott helyről. adott méretet, beilleszteni, meghatározott magasságban és szélességben

// Oszlopdiagram

let data = [90, 340, 120, 260, 190, 300];    

function drawBarChart() {
    let barWidth =50;
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