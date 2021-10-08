class Bitacora {

    constructor (cantFil,cantCol){
        this.cantFil = cantFil;
        this.cantCol = cantCol;
        this.juego = new Array(cantFil-1);
        this.inicJuego();
    }

    inicJuego(){
        for (let i = 0; i < this.cantFil; i++) {
            this.juego[i]= new Array(this.cantCol-1);
            for (let j = 0; j < this.cantCol; j++) {    
                this.juego[i][j]= 0;
            }
        }
    }

    agregarJugada(x,y,jugador){
        console.log(this.juego);
        if ( (0 <= x < this.cantFil) && (0 <= y < this.cantCol) && this.juego[x][y]== 0 )
            this.juego[x][y]= jugador;
    }

    getFilaDisponilbe(columna){

        for (let i = this.cantFil-1; i >=0 ; i--) {
            if (this.juego[i][columna] == 0){
                return i;
            }
        }
        return -1; // No existen mas FIlas disponibles
    }


}