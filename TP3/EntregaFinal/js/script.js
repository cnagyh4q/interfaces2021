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

    

    document.querySelector("#escena2").addEventListener("click",(e)=>{

        cambioEscena(2);
        e.target.classList.toggle("resaltado");
        document.querySelector("#escena1").classList.toggle("resaltado");

    })


    document.querySelector("#escena1").addEventListener("click",(e)=>{

        cambioEscena(1);
        e.target.classList.toggle("resaltado");
        document.querySelector("#escena2").classList.toggle("resaltado");

    })




    document.querySelector("#btn-iniciar").addEventListener("click" , (e)=>{

        juego.setJuegoEmpezado();
        juego.setEnvent("pressClick");
        juego.iniciar();
        e.target.disabled=true;
        document.querySelector("#btn-reiniciar").disabled=false;
        

    
    })


    document.querySelector("#btn-reiniciar").addEventListener("click" , (e)=>{

        
        juego.reiniciarJuego();

        document.querySelector("#btn-iniciar").disabled=false;
        e.target.disabled=true;
        

    
    })


    document.addEventListener("click" , ()=>{

           juego.setEnvent("pressClick");
        
        

    
    })

  
     

     setInterval(()=>{
         document.querySelector("#puntaje").innerHTML= juego.getPuntaje();
     } , 1000)
   

    
    
    

 
 
    


})


