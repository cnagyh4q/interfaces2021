class Ficha extends Figura {



    constructor (posX , posY , context , radio,jugador , imagen ){
        super (posX,posY ,context);
        this.radio = radio;
        this.jugador = jugador;
        this.imagen = imagen;
        //this.disponible=true;
        
    }


    dibujar (){
        super.dibujar(); 
        this.context.beginPath();
        let img;
        img = document.querySelector(this.imagen);
        let imageScaled = this.radio * 2;
        let posy = this.posY - this.radio;
        let posx = this.posX - this.radio;

        this.context.drawImage(img, posx, posy, imageScaled, imageScaled);

        this.context.beginPath();
        this.context.arc(this.posX, this.posY, this.radio, 0, 2 * Math.PI);

        this.context.strokeStyle="grey";            
        this.context.lineWidth=1;
        this.context.stroke();
    
        if ( this.resaltado ){
            this.context.strokeStyle=this.colorR;            
            this.context.lineWidth=5;
            this.context.stroke();            
        }
        this.context.closePath();
        
    }

    

    getJugador(){
        return this.jugador;
    }
    getRadio(){
        return this.radio;
    }

    isPointInside(x, y){

        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radio;

    }







}