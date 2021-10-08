class Figura {

    constructor (posX ,posY , color , context ){
       this.posX = posX;
       this.posY = posY;
       this.color = color;
       this.context = context;
       this.colorR= "black";
       this.resaltado = false;       
    }

    setColor(color){
        this.color= color;
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
        this.context.fillStyle = this.color;
    }

    setColorR(colorR){
        this.colorR = colorR;
    }

    setResaltado(resaltado){
        this.resaltado = resaltado;
    }

    isPointInside(x,y){}


}