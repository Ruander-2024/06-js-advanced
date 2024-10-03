let canvas = document.getElementById('myCanvas');

let ctx = canvas.getContext('2d');    //ctx = context

let image = document.querySelector('img')    // img elé ha nem teszünk semmit TAG-ként hivatkozik, ha .img akkor Class, ha #img akkor ID-ként

//ctx.fillStyle = 'red';
//ctx.fillRect(0, 0, 100, 100); // Téglalap készítés

//ctx.fillStyle = 'blue';
//ctx.beginPath();
//ctx.arc(250, 150, 50, 0, Math.PI * 2);
//ctx.fill();
//
//ctx.fillStyle = 'green';
//ctx.beginPath();
//ctx.arc(250, 125, 25, 0, Math.PI * 2);
//ctx.fill();


//Kép szerkesztése

// ctx.drawImage(image, 100, 100);    // Teljes kép beillesztése adott koordinátákra

//ctx.drawImage(image, 0, 0, 100, 100);  //  A kép kicsinyített változatát illesztjük be adott koordinátákra első két szám koordináta következő kettő a kép mérete


//ctx.drawImage(image, 300, 300, 200, 200, 350, 260, 350, 350); //Adott helyről, mekkora részletet hova illesztünk be és milyen méretben

// OSzlopdiagramm

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

