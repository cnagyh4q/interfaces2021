document.addEventListener("DOMContentLoaded", event =>{ 

//variables globales//
let imagen;



document.querySelector('#btnAddImage').addEventListener('click' , e => {
    document.querySelector('#inputFile').click();

})
let canvas = document.querySelector('#dibujo');
let ctx = canvas.getContext("2d");


document.querySelector('#inputFile').addEventListener('change' , e => {

    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      let content = readerEvent.target.result; // this is the content!
      imagen = new Image();
      imagen.src = content;
      imgLoad();
    };
})


function imgLoad() {    

    imagen.onload = function () {

      let imageAspectRatio = (1.0 * this.width) / this.height;
      let imageScaledHeight = canvas.height;
      let imageScaledWidth = canvas.height * imageAspectRatio;
      canvas.width = imageScaledWidth;

      ctx.drawImage(this, 0, 0, imageScaledWidth, imageScaledHeight);

      let imageData = ctx.getImageData(0, 0, imageScaledWidth, imageScaledHeight);

      ctx.putImageData(imageData, 0, 0);
    
    }
}


})