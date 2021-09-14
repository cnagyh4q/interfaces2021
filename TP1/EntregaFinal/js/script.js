document.addEventListener("DOMContentLoaded", (event) => {
  //variables globales//
  let imagen;
  let canvas = document.querySelector("#dibujo");
  let ctx = canvas.getContext("2d");
  let accion = "sin seleccion";
  let dibujando = false;

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

  //let canvas = document.querySelector("#dibujo");

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
      let content = readerEvent.target.result;
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
      ); // re-leer
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(
        event.clientX - coordenadas.left,
        event.clientY - coordenadas.top
      );
    }
  }

  document.querySelector("#brillo").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), brillo);
  });

  document.querySelector("#sepia").addEventListener("click", () => {
    aplicaFiltro(ctx.getImageData(0, 0, canvas.width, canvas.height), sepia);
  });

  aplicaFiltro = (imageData, filtro) => {
    let data = imageData.data;
    for (let index = 0; index < data.length ; index += 4) {
         filtro(data, index);
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



});
