document.addEventListener("DOMContentLoaded", (event) => { 


let canvas = document.querySelector("#id-canvas");
let ctx = canvas.getContext("2d");
let arre = [];
let cantFichasTotal = 60;
let lastClickedFigure = null;
let isMouseDown = false;
let tablero;
let bitacora;

window.onload = function() {
    
    let img = document.querySelector('#imgTablero');
    /*
    let imageAspectRatio = img.width / (img.height); 
    let imageScaledWidth = canvas.height * imageAspectRatio;
    //ctx.drawImage(img, 30, 30, imageScaledWidth, canvas.width);
    ctx.drawImage(img, 200, 80, 800, 798);
    */
    crearJuego();
}


function crearJuego(){
    let img = document.querySelector('#img5Linea');
    for (let index = 1; index < cantFichasTotal; index++) {
        agregarFicha(index);
    }
    //if (4 enlina etc)
    bitacora = new Bitacora (8,9);
    tablero = new Tablero (img,200, 100, 'white',ctx, 800, 700,8,9);
    arre.push(tablero);
    drawFigure();
}

function agregarFicha(i){
    let x=0;
    let y=0;
    let color ;
    let ficha;
    if (i <= (cantFichasTotal/2)){ // es el rojo
        x = Math.round(Math.random() * (155)) //(max - min) + min
        y = Math.round(Math.random() * 800)
        color = 'red';
        ficha = new Ficha(x,y,color,ctx,43,1);
        //console.log (x,y,color);
    } else{  // es el verde
        x = Math.round( (Math.random() * (1200-1045))+1045); //(max - min) + min
        y = Math.round( Math.random() * 800);
        color = 'green';
        ficha = new Ficha(x,y,color,ctx,43,2);
        //console.log (x,y,color);
    }
     
    //ficha.dibujar();
    arre.push(ficha);


}

function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

function drawFigure() {
    clearCanvas();
    for (let i = 0; i < arre.length; i++) {
        arre[i].dibujar();
    }
}

function onMouseDown(e) {
    isMouseDown = true;

    if (lastClickedFigure != null) {
        lastClickedFigure.setResaltado(false);
        //ultimoJugador = lastClickedFigure.getFill();
        lastClickedFigure = null;
    }

    let clickFig = findClickedFigure(e.layerX, e.layerY); //coordenadas de x e y adentro del canvas
    if (clickFig != null) {
        clickFig.setResaltado(true);
        lastClickedFigure = clickFig;
    }

    drawFigure();
}


function onMouseUp(e) {
    isMouseDown = false;
    /*
    if (tablero.moveInside(e.layerX, e.layerY) && lastClickedFigure != null) {
        tablero.addFicha(lastClickedFigure, e.layerX, e.layerY);
        drawFigure();
    }*/
    if (lastClickedFigure != null ){
        tablero.agregarFicha(lastClickedFigure, e.layerX, e.layerY,bitacora);
        drawFigure();
    }
    //setTimeout(buscarGanador, 500);
}

function onMouseMove(e) {
    if (isMouseDown && lastClickedFigure != null) {
        lastClickedFigure.setPos(e.layerX, e.layerY);
        drawFigure();
    }
}

function findClickedFigure(x, y) {
    for (let i = 0; i < arre.length; i++) {
        const element = arre[i];
        if (element.isPointInside(x, y)){// && (element.getFill() != ultimoJugador)) {
            return element;
        }
    }
}


canvas.addEventListener('mousedown', onMouseDown, false);
canvas.addEventListener('mouseup', onMouseUp, false);
canvas.addEventListener('mousemove', onMouseMove, false);





/*
function repartirFichas(ficha,x,y){



}
*/


//let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//ctx.putImageData(imageData, 0, 0);









})
    