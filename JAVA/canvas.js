var c = document.querySelector('#canvas');

var ctx = c.getContext("2d");

function step0() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 10, 100, 10);
    ctx.fillStyle = 'black';
    ctx.fillText("Faible", 35, 30);

    ctx.fillStyle = 'grey';
    ctx.fillRect(150, 10, 100, 10);
    ctx.fillStyle = 'black';
    ctx.fillText("Moyen", 185, 30);

    ctx.fillStyle = 'grey';
    ctx.fillRect(300, 10, 100, 10);
    ctx.fillStyle = 'black';
    ctx.fillText("Fort", 345, 30);

}


function step1() {
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 10, 100, 10);
    

    ctx.fillStyle = 'grey';
    ctx.fillRect(150, 10, 100, 10);
    

    ctx.fillStyle = 'grey';
    ctx.fillRect(300, 10, 100, 10);
    

}

function step2() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 10, 100, 10);
    
    
    ctx.fillStyle = 'orange';
    ctx.fillRect(150, 10, 100, 10);
    

    ctx.fillStyle = 'grey';
    ctx.fillRect(300, 10, 100, 10);
    

}

function step3() {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 10, 100, 10);
    

    ctx.fillStyle = 'grey';
    ctx.fillRect(150, 10, 100, 10);
    

    ctx.fillStyle = 'green';
    ctx.fillRect(300, 10, 100, 10);
    

}
