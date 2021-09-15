document.addEventListener("DOMContentLoaded", (event) => {
  //variables globales//
  let imagen;
  let canvas = document.querySelector("#dibujo");
  let ctx = canvas.getContext("2d");
  let accion = "sin seleccion";
  let dibujando = false;
  let content = null;
  let valorSaturacion = 0;

  document.querySelector("#btnAddImage").addEventListener("click", (e) => {
    document.querySelector("#inputFile").click();
  });

  document.querySelector("#inputFile").addEventListener("change", (e) => {
    loadImage(e.target.files[0]);
  });

  document.querySelector("#lapiz").addEventListener("click", (event) => {
    accion = "escribir";
  });
  document.querySelector("#goma").addEventListener("click", (event) => {
    accion = "borrar";
  });


  let coordenadas = canvas.getBoundingClientRect(); //https://ed.team/blog/obtener-la-posicion-de-un-elemento-html-con-javascript

  canvas.addEventListener("mousedown", function (e) {
    dibujando = true;
    dibujarEnCanvas(e);
  });
  canvas.addEventListener("mouseup", function () {
    dibujando = false;
    //accion = "sin seleccion"; ver si lo dejams con el mouse up
    ctx.beginPath();
  });

  canvas.addEventListener("mousemove", dibujarEnCanvas);

  loadImage = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      content = readerEvent.target.result;
      imagen = new Image();
      imagen.src = content;
      imagen.onload = function () {
        let ratio = this.width / this.height;
        canvas.width = canvas.height * ratio;
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, 0, 0);
      };
    };
  };



  function dibujarEnCanvas(event) {
    if (dibujando && !(accion == "sin seleccion")) {
      ctx.lineWidth = document.querySelector("#tamano").value;
      if (accion == "escribir") {
        ctx.strokeStyle = document.querySelector("#color").value;
        ctx.lineCap = "round";
      }
      if (accion == "borrar") {
        ctx.strokeStyle = "#FFFFFF"; // color blanco
        ctx.lineCap = "square";
      }
      ctx.lineTo(
        event.clientX - coordenadas.left,
        event.clientY - coordenadas.top
      ); 
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(
        event.clientX - coordenadas.left,
        event.clientY - coordenadas.top
      );
    }
  }
  document.querySelector("#limpiar").addEventListener("click", () => {
    imagen.onload();
  });

  document.querySelector("#brillo").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), brillo);
  });

  document.querySelector("#sepia").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), sepia);
  });

  document.querySelector("#negativo").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), negativo);
  });

  document.querySelector("#binarizar").addEventListener("click", () => {
    aplicaFiltro(
      ctx.getImageData(0, 0, canvas.width, canvas.height),
      binarizacion
    );
  });

  document.querySelector("#blur").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), "blur");
  });


  document.querySelector("#saturacion").addEventListener("change", () => {
    imagen.onload();
    valorSaturacion = document.querySelector("#saturacion").value
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), saturacion);
  });

  document.querySelector("#descartar").addEventListener("click", () => {
    canvas.width = '800';
    canvas.height = '600';
    ctx.getImageData(0, 0, canvas.width, canvas.height) = null;
    content = null;
    imagen = null;
  });


  document.querySelector("#descarga").addEventListener("click", function () {
   this.href = canvas.toDataURL("image/jpg");
   
  });

 

  aplicaFiltro = (imageData, filtro) => {
    let data = imageData.data;    

    if (filtro === "blur") {   
      let copiaData = imageData.data.slice();   
      for (let index = 0; index < data.length; index ++)
     
        blur(data, index, copiaData, imageData.width);
     
    } else {
      for (let index = 0; index < data.length; index += 4) {
        filtro(data, index);
      }
    }
    ctx.putImageData(imageData, 0, 0);
  };

  brillo = (data, index) => {
    data[index] += 50;
    data[index + 1] += 50;
    data[index + 2] += 50;
  };

  sepia = (data, index) => {
    let r = data[index];
    let g = data[index + 1];
    let b = data[index + 2];
    let grey = (r + g + b) / 3;

    r = 0.393 * grey + 0.769 * grey + 0.189 * grey;
    g = 0.349 * grey + 0.686 * grey + 0.168 * grey;
    b = 0.272 * grey + 0.534 * grey + 0.131 * grey;

    if (r > 255) r = 255;
    if (g > 255) g = 255;
    if (b > 255) b = 255;

    data[index + 0] = r;
    data[index + 1] = g;
    data[index + 2] = b;
  };

  negativo = (data, index) => {
    
    data[index + 0] = 255 - data[index]; 
    data[index + 1] = 255 - data[index + 1];
    data[index + 2] = 255 - data[index + 2];
  };

  binarizacion = (data, index) => {
    let r = data[index];
    let g = data[index + 1];
    let b = data[index + 2];
    let grey = (r + g + b) / 3;

    if (grey > 120)
      // Definimos un Umbral en 120 , podria setearce desde afuera haciendo unos cambios
      grey = 255;
    else grey = 0;

    data[index + 0] = grey; //R
    data[index + 1] = grey; //G
    data[index + 2] = grey; //B
  };

  blur = (data, index, copiaData, width) => {
     data[index] =
      (copiaData[index] +
        (copiaData[index + 4] || data[index]) +
        (copiaData[index - 4] || data[index]) +
        (copiaData[index + 4 * width] || data[index]) +
        (copiaData[index - 4 * width] || data[index]) +
        (copiaData[index + 4 * width + 4] || data[index]) +
        (copiaData[index + 4 * width - 4] || data[index]) +
        (copiaData[index - 4 * width + 4] || data[index]) +
        (copiaData[index - 4 * width - 4] || data[index])) /
      9;   
  };

  saturacion = (data, index) =>{
   ;
    let r = data[index];
    let g = data[index + 1];
    let b = data[index + 2];

    var gray = 0.2989 * r + 0.5870 * g + 0.1140 * b;
    data[index] = gray * valorSaturacion + data[index] * (1 - valorSaturacion);
    data[index + 1] = gray * valorSaturacion + data[index + 1] * (1 - valorSaturacion);
    data[index + 2] = gray * valorSaturacion + data[index + 2] * (1 - valorSaturacion);
  }


});
