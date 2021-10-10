document.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.querySelector("#id-canvas");
  let ctx = canvas.getContext("2d");
  let arre = [];
  let cantFichasTotal = 60;
  let lastClickedFigure = null;
  let isMouseDown = false;
  let tablero;
  let bitacora;
  let tipoJuego = 6;
  let filasTablero = 6;
  let columnasTableros = 7;
  let imagenTablero = "#img4Linea";
  let radio= 43;
  let ultimoJugador=0;

  window.onload = function () {
    //let img = document.querySelector("#imgTablero");

    crearJuego();
  };

  function crearJuego() {
    //if (4 enLinea or //5 enLinea // etc)
    switch (tipoJuego) {
      case 4: {
        cantFichasTotal = 42;
        imagenTablero = "#img4Linea";
        filasTablero = 6;
        columnasTableros = 7;
        radio = 43;
        break;
      }
      case 5: {
        cantFichasTotal = 72;
        imagenTablero = "#img5Linea";
        filasTablero = 8;
        columnasTableros = 9;
        radio = 38;
        break;
      }
      case 6: {
        cantFichasTotal = 110;
        imagenTablero = "#img6Linea";
        filasTablero = 10;
        columnasTableros = 11;
        radio = 30;
        break;
      }

      default: {
        cantFichasTotal = 42;
        imagenTablero = "#img4Linea";
        filasTablero = 6;
        columnasTableros = 7;
        radio = 43;
        break;
      }
    }

    let img = document.querySelector(imagenTablero);
    for (let index = 1; index < cantFichasTotal; index++) {
      agregarFicha(index);
    }

    bitacora = new Bitacora(filasTablero, columnasTableros , tipoJuego);
    tablero = new Tablero(img, 200, 100, "white", ctx, 800, 700, filasTablero, columnasTableros);
    arre.push(tablero);
    drawFigure();
  }

  function agregarFicha(i) {
    let x = 0;
    let y = 0;
    let color;
    let ficha;
    if (i <= cantFichasTotal / 2) {
      // es el rojo
      x = Math.round(Math.random() * 155); //(max - min) + min
      y = Math.round(Math.random() * 800);
      color = "red";
      ficha = new Ficha(x, y, color, ctx, radio, 1);
      //console.log (x,y,color);
    } else {
      // es el verde
      x = Math.round(Math.random() * (1200 - 1045) + 1045); //(max - min) + min
      y = Math.round(Math.random() * 800);
      color = "yellow";
      ficha = new Ficha(x, y, color, ctx, radio, 2);
      //console.log (x,y,color);
    }

    //ficha.dibujar();
    arre.push(ficha);
  }

  function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

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
 
    if (lastClickedFigure != null && tablero.isRangeInside(e.layerX)) {
      tablero.agregarFicha(lastClickedFigure, e.layerX, e.layerY, bitacora);
      ultimoJugador = lastClickedFigure.getJugador();
      drawFigure();
    }
 
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
      if (element.isPointInside(x, y) && element.isDisponible() && (element.getJugador() != ultimoJugador)) {
        return element;
      }
    }
  }

  canvas.addEventListener("mousedown", onMouseDown, false);
  canvas.addEventListener("mouseup", onMouseUp, false);
  canvas.addEventListener("mousemove", onMouseMove, false);

});
