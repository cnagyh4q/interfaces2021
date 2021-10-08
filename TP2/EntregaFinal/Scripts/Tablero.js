class Tablero extends Figura {



    constructor(posX, PosY, color, context, ancho, alto) {

        super(posX, PosY, color, context);
        this.alto = alto;
        this.ancho = ancho;
    }

    dibujar() {
        super.dibujar();
        this.context.fillRect(this.posX, this.posY, this.ancho, this.alto);
        if (this.resaltado) {
            this.context.strokeStyle = this.colorR;
            this.context.lineWidth = 5;
            this.context.strokeRect(this.posX, this.posY, this.ancho, this.alto);

        }
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