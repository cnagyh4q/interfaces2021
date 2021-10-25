document.addEventListener("DOMContentLoaded", (event) => {
  let canvas = document.querySelector("#id-canvas");
  let ctx = canvas.getContext("2d");
  let arre = [];
  let cantFichasTotal = 60;
  let lastClickedFigure = null;
  let isMouseDown = false;
  let tablero;
  let bitacora;
  let tipoJuego = 4;
  let filasTablero = 6;
  let columnasTableros = 7;
  let imagenTablero = "#img4Linea";
  let radio= 43;
  let ultimoJugador=0;
  let tematica = {'j1':'#logo-chevolet' , 'j2':'#logo-ford' } ;
  let tiempoLimiteMinutos = 5;
  let interval = null;



  window.onload = ()=>{
    let img = document.querySelector(imagenTablero);
    tablero = new Tablero(img, 200, 100, ctx, 800, 700, filasTablero, columnasTableros);
    tablero.dibujar();
  }

  function crearJuego() {
    
    switch (tipoJuego) {
      case '4': {
        cantFichasTotal = 42;
        imagenTablero = "#img4Linea";
        filasTablero = 6;
        columnasTableros = 7;
        radio = 43;
        
        break;
      }
      case '5': {
        cantFichasTotal = 72;
        imagenTablero = "#img5Linea";
        filasTablero = 8;
        columnasTableros = 9;
        radio = 38;
       
        break;
      }
      case '6': {
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
    tablero = new Tablero(img, 200, 100, ctx, 800, 700, filasTablero, columnasTableros);
    arre.push(tablero);
    drawFigure();
  }

  function agregarFicha(i) {
    let x = 0;
    let y = 0;
    let ficha;   

    if (i <= cantFichasTotal / 2) {
     
      x = Math.round(Math.random() * 155); //(max - min) + min
      y = Math.round(Math.random() * 800);
    
     
      ficha = new Ficha(x, y, ctx, radio, 1, tematica.j1);
    
    } else {
    
      x = Math.round(Math.random() * (1200 - 1045) + 1045); //(max - min) + min
      y = Math.round(Math.random() * 800);
      
      ficha = new Ficha(x, y, ctx, radio, 2 , tematica.j2);
     
    }

    
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
     if (arre.length>0){
      drawFigure();
     }
    
  }

  function onMouseUp(e) {
    isMouseDown = false;
 
    if (lastClickedFigure != null && tablero.isRangeInside(e.layerX)) {
      tablero.agregarFicha(lastClickedFigure, e.layerX, e.layerY, bitacora, interval);
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



  document.querySelector("#select-juego").addEventListener("change" , (e) =>{

    tipoJuego=e.target.value;


  })


  document.querySelector("#select-tematica").addEventListener("change" , (e) =>{

    switch (e.target.value){
     
      case "auto" : {
        tematica = {'j1':'#logo-chevolet' , 'j2':'#logo-ford' }
        break;
      }
      case "futbol" : {
        tematica = {'j1':'#logo-boca' , 'j2':'#logo-river' }
        break;
      }

      case "tom-jerry" : {
        tematica = {'j1':'#logo-tom' , 'j2':'#logo-jerry' }
        break;
      }
      
      default : {
        tematica = {'j1':'#logo-boca' , 'j2':'#logo-river' }        
        break;
      }

    }

   

  })


 function clear() {
      arre = [];
      puntos = {'j1': 0 , 'j2': 0 } ;    
};


  document.querySelector("#btn-reiniciarJuego").addEventListener("click" , (e) =>{
  
    arre.slice(0,arre.length);
    document.querySelector("#select-tematica").disabled = false;
    document.querySelector("#select-juego").disabled = false;
    ultimoJugador=0;
    document.querySelector("#btn-inicio").disabled=false;
    clear(); 
    drawFigure(); 
    clearInterval(interval) ;
    document.querySelector("#temRestante").innerHTML= "";
    window.onload();
   

 })



  document.querySelector("#btn-inicio").addEventListener("click" , (e) =>{
  
     crearJuego();
     document.querySelector("#select-tematica").disabled = true;
     document.querySelector("#select-juego").disabled = true;
     e.target.disabled = true;

     iniciarTimer();
  

  })


  function iniciarTimer() {

    let totalSeconds = 0;
    interval = setInterval(()=>{

      totalSeconds++;

      if (tiempoLimiteMinutos * 60 < totalSeconds ){        
        totalSeconds=0;        
        document.querySelector("#btn-reiniciarJuego").click();
        clearInterval(interval) ;
        alert("Juego empatado: se termino el tiempo ");
            
        
      }
      else {
        let tiemporestante  = (tiempoLimiteMinutos * 60) - totalSeconds;
         

        let minutos = Math.floor(tiemporestante / 60);

        let segundos = tiemporestante - (minutos * 60);
        
        
  
        document.querySelector("#temRestante").innerHTML= minutos + ":" + segundos;


      }

     

    } ,1000)

    




  }




});
