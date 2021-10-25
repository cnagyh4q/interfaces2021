class Figura {

    constructor (posX ,posY , context ){
       this.posX = posX;
       this.posY = posY;
       this.context = context; 
    }   
    
    setPos(posX , posY){
        this.posX= posX;
        this.posY= posY;
    }

    setPosY(posY){
       this.posY= posY;
    }

    setPosX(posX){
        this.posX= posX;
     }

    getPos(){
        return {x: this.posX , y: this.posY};
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    setContext(context){
        this.context= context;
    }

    getContext(){
        return this.context;
    }

    dibujar(){        
    }
 
    isPointInside(x,y){}


}