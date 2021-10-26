class avatar {


    constructor (identificador , imagen){

        this.element = document.querySelector(identificador);
        this.posX = parseInt(window.getComputedStyle(this.element).getPropertyValue("left"));
        this.posY = parseInt(window.getComputedStyle(this.element).getPropertyValue("top"));
        this.imagen = imagen;
        this.element.style.background= "url('"+this.imagen+"')";


    }

    setImagen(imagen) {
        this.imagen = imagen;
        this.element.style.background= "url('"+this.imagen+"')";
        
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
        this.element.style.left = this.posX+"px";
    }

    rotateImage(angulo){
        this.element.style.transform = `rotate(${angulo}deg)`;
    }

    update(){
        this.element.style.top = this.posY+"px";
    }

    terminar(){
        //this.element.style.top = this.posY;
    }
    
    



}