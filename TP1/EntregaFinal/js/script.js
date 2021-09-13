document.addEventListener("DOMContentLoaded", (event) => {
  //variables globales//
  let imagen;
  let canvas = document.querySelector("#dibujo");
  let ctx = canvas.getContext("2d");

  document.querySelector("#btnAddImage").addEventListener("click", (e) => {
    document.querySelector("#inputFile").click();
  });
  

  document.querySelector("#inputFile").addEventListener("change", (e) => {   
    loadImage(e.target.files[0]);    
  });


  loadImage = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (readerEvent) => {
      let content = readerEvent.target.result; 
      imagen = new Image();
      imagen.src = content; 
      imagen.onload = function() {
        let ratio = this.width / this.height;
        canvas.width = canvas.height * ratio;
        ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
        let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.putImageData(imageData, 0, 0);
      };     
    }
 
  }
  
});
