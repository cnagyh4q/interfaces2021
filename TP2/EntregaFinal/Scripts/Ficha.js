class Ficha extends Figura {



    constructor (posX , posY , color , context , radio,jugador){
        super (posX,posY ,color,context);
        this.radio = radio;
        this.jugador = jugador;
    }


    dibujar (){
        super.dibujar(); 
        this.context.beginPath();
        //this.context.fillStyle = this.color;
        this.context.arc( this.posX , this.posY , this.radio , 0 , 2 * Math.PI);
        //this.context.arc( 50 , 50 , 20, 0 , 2 * Math.PI);
        this.context.fill();
        //this.context.stroke();
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