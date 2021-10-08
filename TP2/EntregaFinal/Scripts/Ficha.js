class Ficha extends Figura {



    constructor (posX , posY , color , context , radio){
        super (posX,posY ,color,context);
        this.radio = radio;
    }


    dibujar (){
        super.dibujar();
        this.context.beginPath();
        this.context.arc(this.x , this.y , this.radio , 0, 2 * Math.PI);
        this.context.fill();

        if ( this.resaltado ){
            this.context.strokeStyle=this.colorR;            
            this.context.lineWidth=5;
            this.context.stroke();            
        }
        this.context.closePath();
        
    }

    getRadio(){
        return this.radio;
    }

    isPointInside(x, y){

        let _x = this.posX - x;
        let _y = this.posY - y;
        return Math.sqrt(_x * _x + _y * _y) < this.radius;

    }







}