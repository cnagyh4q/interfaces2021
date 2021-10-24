// paloma.dy += (ratio * canvas.height); //aplicar fuerza ipo gravedad
// //mover
// paloma.y += paloma.dy * ratio;
// //chequear rebote 

// if (paloma.y > canvas.height ) {
//     paloma.dy *= -0.9
// }



document.addEventListener("DOMContentLoaded" , (e) =>{

    let paloma = document.querySelector("#paloma");


    document.addEventListener("click" , ()=>{

        let birdTop = parseInt(window.getComputedStyle(paloma).getPropertyValue("top"));
       if (birdTop > 64){
        paloma.style.top = (birdTop-50)+"px";
        paloma.style.transform = "rotate(-30deg)"

       }

    })

    let tuberiaSup ;
    let tuberiaInf;
    
;    setInterval(()=>{
        
        
        //tuberiaInf.setAttribute("id", "tuberiaInferior");
        //tuberiaSup.setAttribute("id", "tuberiaSuperior");
        tuberiaSup = document.querySelector("#tuberiaSuperior");
        tuberiaInf = document.querySelector("#tuberiaInferior");
        tuberiaInf.setAttribute("id", "TuberiaInfOff");
        tuberiaSup.setAttribute("id", "TuberiaSupOff");
        //tuberiaSup = document.querySelector("#TuberiaSupOff");
        //tuberiaInf = document.querySelector("#TuberiaInfOff");

    },3900);
    
    
    setInterval(()=>{

        let tuberiaSup = document.querySelector("#TuberiaSupOff");
        let tuberiaInf = document.querySelector("#TuberiaInfOff");
       /* let random = Math.floor(Math.random()*350);
        console.log (random);*/
        tuberiaInf.setAttribute("id", "tuberiaInferior");
        tuberiaSup.setAttribute("id", "tuberiaSuperior");
        /*let ranpix = 600-random;
        ranpix=ranpix+"px";
        tuberiaSup.style.height= random+"px";
        let back="background-size: 138px "+ranpix;
        tuberiaSup.setAttribute("style",back);*/


    },3910);

    let random = Math.floor(Math.random()*350);
    console.log (random);

    

    //tuberias();
    setInterval(()=>{

        let birdTop = parseInt(window.getComputedStyle(paloma).getPropertyValue("top"));
        if (birdTop < 500){
            paloma.style.top = (birdTop + 25)+"px";
            paloma.style.transform = "rotate(30deg)"
        }
        
        


    },1000);




  
    


})


