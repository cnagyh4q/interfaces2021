class Bird extends Figura { 


    constructor (posX ,posY , context , imagen , alto , ancho ){
       super(posX ,posY , context)
       setAlto(alto)
       setAncho(ancho)
       this.setImagen(imagen);
     }  


    setImagen(imagen) {
        this.imagen = imagen;
    } 

    setAlto(alto) {
        this.alto = alto;
    }

    setAncho(ancho) {
        this.ancho= ancho;

    }

    dibujar(){

    }

    











}