// paloma.dy += (ratio * canvas.height); //aplicar fuerza ipo gravedad
// //mover
// paloma.y += paloma.dy * ratio;
// //chequear rebote 

// if (paloma.y > canvas.height ) {
//     paloma.dy *= -0.9
// }



document.addEventListener("DOMContentLoaded" , (e) =>{

    
    
    let juego = new game();   

    let escena = 1;

    function cambioEscena(escenaActual) {
    if (escenaActual == "1"){

        document.querySelectorAll(".escena2").forEach(element => { 
            element.style.cssText = "display: none"
       });
        document.querySelectorAll(".escena").forEach(element => { 
           element.style.cssText = "display: block"
         });
    }else {
        document.querySelectorAll(".escena").forEach(element => { 
            element.style.cssText = "display: none"
       });
       document.querySelectorAll(".escena2").forEach(element => { 
        element.style.cssText = "display: block"
        });
    }
   
    }

    cambioEscena(escena);

    document.querySelector("#selectEscena").addEventListener("change" , (e) => {

        escena = e.target.value;               
       
        cambioEscena(escena);


    })




    document.addEventListener("click" , ()=>{

        juego.setJuegoEmpezado();
        juego.setEnvent("pressClick");
        
        console.log("Boton DOM Click");

    
    })

/*
    document.addEventListener("dblclick" , ()=>{

        juego.setEnvent("dobleClick");
        console.log("DOBLE CLICK Click");
    
    })
  */  

   
     juego.iniciar();

     setInterval(()=>{
         document.querySelector("#puntaje").innerHTML= juego.getPuntaje();
     } , 1000)
   

    
    
    

 
 
    


})


