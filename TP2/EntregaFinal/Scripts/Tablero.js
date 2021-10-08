class Tablero extends Figura {

    

    constructor(img,posX, PosY, color, context, ancho, alto,cantFil,cantCol) {

        super(posX, PosY, color, context);
        this.img = img;
        this.alto = alto;
        this.ancho = ancho;
        this.cantFil = cantFil;
        this.cantCol = cantCol;

    }

    setPos(){

    }

    dibujar() {
        super.dibujar();
        /*this.context.fillRect(this.posX, this.posY, this.ancho, this.alto);
        if (this.resaltado) {
            this.context.strokeStyle = this.colorR;
            this.context.lineWidth = 5;
            this.context.strokeRect(this.posX, this.posY, this.ancho, this.alto);

        }*/

        let imageAspectRatio = this.img.width / (this.img.height); 
        let imageScaledWidth = this.alto * imageAspectRatio;

        this.context.drawImage(this.img,this.posX,this.posY,this.ancho,this.alto,);
        //this.context.drawImage(this.img, this.posX, this.posY, imageScaledWidth, this.ancho);
        //this.context.drawImage(this.img, 200, 80, 800, 700);
    }
  
    agregarFicha(ficha,x,y,bitacora){
        //200-1000 Columnas
        //0-700  
        let rangoCol = (this.ancho / this.cantCol);
        let rangoFil = (this.alto / this.cantFil);
        let columna = Math.trunc((x- this.posX) / rangoCol) ;
        let inicioRangoCol = this.posX +( rangoCol * (columna));

        let fila = bitacora.getFilaDisponilbe(columna);
        let inicioRangoFil = this.posY +( rangoFil * (fila));

        if (fila !== -1 ){
            ficha.setPos((inicioRangoCol+(rangoCol/2)),(inicioRangoFil+(rangoFil/2)));
            bitacora.agregarJugada(fila,columna,ficha.getJugador());
        }
        


        
        /*return { 'x' : x ,
                 'y' : y 
        }*/
    }

    getAncho() {
        return this.ancho;
    }

    getAlto() {
        return this.alto;
    }

    isPointInside(x, y) {
        return !(x < this.posX || x > this.posX + this.ancho || y < this.posY || y > this.posY + this.alto);
    }


}