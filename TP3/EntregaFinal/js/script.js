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

        let birdTop = paloma.getPosY();
        
        
       if (birdTop > 64){

        paloma.setPosY(birdTop-60);
        paloma.rotateImage(-30);
        

       }

       paloma.update()
    })


 

 


    setInterval(()=>{

     
        
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
                
    
            }
           

        }
        
    


    }, 50)


  

    setInterval(()=>{

        let birdTop = paloma.getPosY();
        if (birdTop < 500){

            paloma.setPosY((birdTop + 30));

            paloma.rotateImage(30);
        }     

        paloma.update();
        


    },200);


       //this.paloma.style.cssText = "background: url('"+imagen+"')";

  
    


})


