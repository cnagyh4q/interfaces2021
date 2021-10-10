class Tablero extends Figura {

    

    constructor(img,posX, PosY, color, context, ancho, alto,cantFil,cantCol) {

        super(posX, PosY, color, context);
        this.img = img;
        this.alto = alto;
        this.ancho = ancho;
        this.cantFil = cantFil;
        this.cantCol = cantCol;
        super.setDisponible(false);
    }

    setPos(){

    }

    dibujar() {
        super.dibujar(); 
        this.context.drawImage(this.img,this.posX,this.posY,this.ancho,this.alto);
        
    }
  
    agregarFicha(ficha,x,y,bitacora){
      
        let rangoCol = (this.ancho / this.cantCol);
        let rangoFil = (this.alto / this.cantFil);
        let columna = Math.trunc((x- this.posX) / rangoCol) ;
        let inicioRangoCol = this.posX +( rangoCol * (columna));

        let fila = bitacora.getFilaDisponilbe(columna);
        let inicioRangoFil = this.posY +( rangoFil * (fila));

        if (fila !== -1 ){
            ficha.setPos((inicioRangoCol+(rangoCol/2)),(inicioRangoFil+(rangoFil/2)));
            ficha.setDisponible(false);
            bitacora.agregarJugada(fila,columna,ficha.getJugador());
        }
        
        bitacora.juegoTerminado(columna,fila);

        
        
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

    isRangeInside(x) {

        return ( this.posX <= x && x<= (this.posX + this.ancho)) ? true : false; 
        
    }
    

   

}