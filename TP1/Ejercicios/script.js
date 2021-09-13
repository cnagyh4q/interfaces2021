console.log ("hola");

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let width = c.width;//ancho
let height = c.height;//alto
var imageData = ctx.createImageData(width,height);
let r = 0;
let g = 0;
let b = 0;
let a = 255;
let gradiente= 255/height;
/*
// Ejericcios 4
for (let x=0; x<width;x++){
    for (let y=0; y<height;y++){
        setPixel(imageData,x,y,r,g,b,a,gradiente);   
    }
    
}

ctx.putImageData(imageData, 0, 0) ;
*/
function setPixel(imageData,x,y,r,g,b,a,gradiente){

    let index = (x + y * imageData.height) * 4;
    imageData.data[index + 0 ]=r + y*gradiente;
    imageData.data[index + 1 ]=g+  y*gradiente;
    imageData.data[index + 2 ]=b+  y*gradiente;
    imageData.data[index + 3 ]=a;

}

let gradiente2;
//Ejercicios 5 /*
for (let x=0; x<width;x++){
    for (let y=0; y<height;y++){
        gradiente2 = 255/(width/2)
        setPixel1(imageData,x,y,r,g,b,a);  
        setPixel(imageData,x,y,r,g,b,a,gradiente); 
    }
    if (x >= width/2){
        //r = 212;
        g -= gradiente2;
        //b = 106;
    }else{
        r +=gradiente2;
        g +=gradiente2;
    }
    
}

ctx.putImageData(imageData, 0, 0) ;

function setPixel1(imageData,x,y,r,g,b,a){

    let index = (x + y * imageData.height) * 4;
    imageData.data[index + 0 ]=r ;
    imageData.data[index + 1 ]=g ;
    imageData.data[index + 2 ]=b ;
    imageData.data[index + 3 ]=a ;

}



// pickcolor

// Ej 2 
/*
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();*/