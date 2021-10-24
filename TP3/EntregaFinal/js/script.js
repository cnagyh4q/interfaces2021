// paloma.dy += (ratio * canvas.height); //aplicar fuerza ipo gravedad
// //mover
// paloma.y += paloma.dy * ratio;
// //chequear rebote 

// if (paloma.y > canvas.height ) {
//     paloma.dy *= -0.9
// }



document.addEventListener("DOMContentLoaded" , (e) =>{

    let paloma = document.querySelector("#paloma");

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

        let birdTop = parseInt(window.getComputedStyle(paloma).getPropertyValue("top"));
       if (birdTop > 64){
        paloma.style.top = (birdTop-50)+"px";
        paloma.style.transform = "rotate(-30deg)"

       }

    })


    setInterval(()=>{

        let birdTop = parseInt(window.getComputedStyle(paloma).getPropertyValue("top"));
        if (birdTop < 500){
            paloma.style.top = (birdTop + 40)+"px";
            paloma.style.transform = "rotate(30deg)"
        }
        
        


    },500);




  
    


})


