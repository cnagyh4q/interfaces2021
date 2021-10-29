// paloma.dy += (ratio * canvas.height); //aplicar fuerza ipo gravedad
// //mover
// paloma.y += paloma.dy * ratio;
// //chequear rebote 

// if (paloma.y > canvas.height ) {
//     paloma.dy *= -0.9
// }



document.addEventListener("DOMContentLoaded" , (e) =>{

    let paloma = new avatar("#paloma" , "./img/bird180x42.png");
    let tuberia = new obstaculo(1 , "./img/pipe.png");
    let tuberia2;
    let pressClick = false;
    let puntaje=0;
    

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

        pressClick = "pressClick";

    
    })


    document.addEventListener("dblclick" , ()=>{

        pressClick = "dobleClick";

    
    })
    


 

 


    setInterval(()=>{

     

        let birdTop = paloma.getPosY();
      
        switch (pressClick) {

            case  "pressClick" : {               
                if (paloma.getPosY() > 0 + paloma.getAlto()) {             
                    paloma.setPosY(birdTop-25);
                    paloma.rotateImage(-30);
                    setTimeout(()=>{pressClick = false; paloma.rotateImage(0); }, 100);
                }

                break;

            }
            
            case  "dobleClick" : {
                console.log("dobleClick");
                if (paloma.getPosY() > 0 + paloma.getAlto()) {             
                    paloma.setPosY(birdTop-40);
                    paloma.rotateImage(-30);
                    setTimeout(()=>{pressClick = false; paloma.rotateImage(0); }, 100);
                }

                break;

            } 

            default: {

                if (birdTop < 550){

                    paloma.setPosY((birdTop + 20));
        
                    paloma.rotateImage(60);
                }
                else {
                    console.log("morir")
                     //finalizarJuego()
                }

                break;
            }


        }
              

        paloma.update();
        
        
        
       if (tuberia != null){
        if ( tuberia.getPosX() > -80 ) {         
            tuberia.setPosX(tuberia.getPosX()-10)
            if (paloma.getPosX() > tuberia.getPosX() && tuberia2 == null){
                tuberia2 = new obstaculo(2 , "./img/pipe.png");
            }
            tuberia.update();

        } else {
            tuberia.terminar(); 
            tuberia= null; 
            puntaje++;         

        }
       
        
        }

        
       

        if (tuberia2 != null){
            if ( tuberia2.getPosX() > -80 ) {         
                tuberia2.setPosX(tuberia2.getPosX()-10)
                if (paloma.getPosX() > tuberia2.getPosX() && tuberia == null){
                    tuberia = new obstaculo(1 , "./img/pipe.png");
                }
    
    
              tuberia2.update();
    
            } else {
                tuberia2.terminar();
                tuberia2= null; 
                puntaje++;
                
    
            }
           

        }

        if (tuberia!=null && ((paloma.getPosX() + paloma.getAncho()) >= tuberia.getPosX()) )
          if (paloma.getPosY() + paloma.getAlto() < tuberia.getLimiteInf() && paloma.getPosY() > tuberia.getLimiteSup()){
                //console.log("puntaje: "+ puntaje);
          }else {
              //console.log("chocaste")
              //finalizarJuego()
          }
        
    


    }, 50)


  
    


})


