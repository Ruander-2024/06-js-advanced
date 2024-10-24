let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');

let image = document.querySelector('img');

// Alakzat zerkesztése

//ctx.fillStyle = 'blue';                   // kör
//ctx.beginPath();                          //
//ctx.arc(250, 125, 50, 0, Math.PI*2);      //
//ctx.fill();                               // készítése

//ctx.fillStyle = 'green';                   // kör
//ctx.beginPath();                          //
//ctx.arc(250, 125, 25, 0, Math.PI*2);      //
//ctx.fill();                               // készítése


//ctx.fillStyle = 'red';                  // téglalap
//ctx.fillRect(0, 0, 300, 200);           // készítése


// Kép szerkesztése

//ctx.drawImage(image, 100, 100) //teljes kép beillesztése
//ctx.drawImage(image, 110, 200, 100, 100);  // kicsinyített kép beillesztése
//ctx.drawImage(image, 300, 300, 200, 200, 350, 260, 250, 250); // képből kivágás nagyítás

// Oszlopdiagramm

let data = [90, 340, 120, 260, 190, 300];

function drawBarChart(){
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