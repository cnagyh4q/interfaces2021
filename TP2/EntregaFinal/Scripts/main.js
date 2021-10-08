document.addEventListener("DOMContentLoaded", (event) => { 


let canvas = document.querySelector("#id-canvas");
let ctx = canvas.getContext("2d");






window.onload = function() {

    let img = document.querySelector('#imgTablero');
    let imageAspectRatio = img.width / img.height; 
    let imageScaledWidth = canvas.height * imageAspectRatio;
    ctx.drawImage(img, 0, 0, imageScaledWidth, canvas.width);


}



//let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//ctx.putImageData(imageData, 0, 0);









})
    