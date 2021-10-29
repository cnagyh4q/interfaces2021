class obstaculo {



    constructor (identificador , imagen ){
        this.imagen = imagen;        
        this.identificador = identificador;

           
        this.elementSup = document.createElement("div");
        //this.elementSup.style.background.image= "url('"+this.imagen+"')";        
        this.elementSup.id = "Sup-" + this.identificador;
        this.elementSup.className = "tuberiaSuperior";

        this.posX = 800 ;



        this.elementInf = document.createElement("div");
        //this.elementInf.style.background.image= "url('"+this.imagen+"')";        
        this.elementInf.id = "Inf-" + this.identificador;
        this.elementInf.className = "tuberiaInferior";


        let random = Math.floor(Math.random()*400);
        this.elementInf.style.height = random + "px";
        this.elementInf.style.left = this.posX + "px";

        let completPantalla = 420-random;  //Definimos el 420 por que el Heigth donde mostramos de la tuberia tiene 600 y dejamos 180 de "pasada" para el pajaro
        this.elementSup.style.height = completPantalla+"px";
        this.elementSup.style.left = this.posX +"px";


        

        this.contendor= document.querySelector("#subcontent");
        this.contendor.appendChild(this.elementSup);
        this.contendor.appendChild(this.elementInf);


        this.ancho = parseInt(window.getComputedStyle(this.elementInf).getPropertyValue("width")); 
       

    }


    getLimiteSup(){
        
        return parseInt(this.elementSup.style.height);
    }


    getLimiteInf(){

        return (600 - parseInt(this.elementInf.style.height));
    }


    setImagen(imagen) {
        this.imagen = imagen;
        this.elementSup.style.background= "url('"+this.imagen+"')";
        this.elementInf.style.background= "url('"+this.imagen+"')";
        
    }
    
    getAncho(){
        return this.ancho;
    }

    setPosY(posY){
        this.posY = posY;
    }

    getPosY(){
       return this.posY; 
    }

    getPosX(){
        return this.posX ;
    }

    setPosX(posX){
        this.posX = posX;       
    }

   
    update(){
        this.elementSup.style.left = this.posX+"px";
        this.elementInf.style.left = this.posX+"px";
    }

    terminar(){
     
        this.contendor.removeChild(this.elementInf);
        this.contendor.removeChild(this.elementSup);
    }










}