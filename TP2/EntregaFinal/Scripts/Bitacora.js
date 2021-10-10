class Bitacora {

    constructor (cantFil,cantCol,tipoJuego){
        this.cantFil = cantFil;
        this.cantCol = cantCol;
        this.juego = new Array(cantFil-1);
        this.tipoJuego = tipoJuego;
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

    juegoTerminado(col,fil){
        
        if (this.revisarPorColumna(col,fil) || this.revisarPorFila(col,fil) || this.revisarDiagonales(col,fil)){// || this.revisarDiagonalDesDeDerchaAIzq(col,fil) ){//|| revisarDiagonalAsc(col,fil)){
            alert ("Ganador :" + this.juego[fil][col]);
        }
    }

    revisarPorColumna(col,fil){
        let jugador=this.juego[fil][col];
        //let encontre=false;
        let cont =0;
        for (let i = 0; i < this.cantCol; i++){
            if (this.juego[fil][i] == jugador){
                cont++;
                if (cont == this.tipoJuego){
                    return true;
                }
            }
            else
                cont=0;
        }
        
        return false;
    }
    revisarPorFila(col,fil){
        let jugador=this.juego[fil][col];
        let cont =0;
        for (let j = 0; j < this.cantFil; j++){
            if (this.juego[j][col] == jugador){
                cont++;
                if (cont == this.tipoJuego){
                    return true;
                }
            }
            else
                cont=0;
        }
        
        return false;
    }

    revisarDiagonales(col,fil){

        let jugador=this.juego[fil][col];

        let encontrado = false;
        let inicioDiagAscendente={"f" : 0 , "c": 0}
        let auxC = col;
        let auxF= fil;
        while (!encontrado) {

            if (auxC -1 >= 0 && auxF +1 < this.cantFil  ){
                auxF ++;
                auxC --;
            }else {
                encontrado = true;
                inicioDiagAscendente= {"f" : auxF , "c": auxC};
            }
        }

        encontrado = false;
        let inicioDiagDesendente={"f" : 0 , "c": 0}
        auxC = col;
        auxF= fil;
        while (!encontrado) {
                if (auxF -1 >= 0 && auxC -1 >= 0 ){
                    auxF --;
                    auxC --;
            }
            else {
                encontrado = true;
                inicioDiagDesendente= {"f" : auxF , "c": auxC};
            }
        }

        let i = inicioDiagAscendente.f;
        let j = inicioDiagAscendente.c;
        let cont = 0;

        while ( i >= 0 && j < this.cantCol ){

            if (this.juego[i][j] == jugador) {
                cont ++
                if (cont == this.tipoJuego){
                    return true
                }

            }
            else {
                cont =0;
            }
            i--;
            j++;
        }

         i = inicioDiagDesendente.f;
         j = inicioDiagDesendente.c;
         cont = 0;

        while ( i < this.cantFil && j < this.cantCol ){
            if (this.juego[i][j] == jugador) {
                cont ++
                if (cont == this.tipoJuego){
                    return true
                }

            }
            else {
                cont =0;
            }
            i++;
            j++;
        }

        return false;

    
    }
        


}