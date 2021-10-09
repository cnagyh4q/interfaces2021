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

    juegoTerminado(col,fil){
        
        if (this.revisarPorColumna(col,fil) || this.revisarPorFila(col,fil)){// || this.revisarDiagonalDesDeDerchaAIzq(col,fil) ){//|| revisarDiagonalAsc(col,fil)){
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
                if (cont == 4){
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
                if (cont == 4){
                    return true;
                }
            }
            else
                cont=0;
        }
        
        return false;
    }

    revisarDiagonalDesDeDerchaAIzq(col,fil){
        let jugador=this.juego[fil][col];
        let cont =0;
        let sigo 
        let j=0;
        for (let i = 0; i < this.cantCol; i++) {
            sigo=true;
            while (sigo){

                if ( (i>=0) && (j >= 0) && (j < this.cantFil)){
                    if (this.juego[j][i] == jugador){
                        cont++;
                        i++;
                        j--;
                        if (cont == 4){
                            return true;
                        }
                    }
                    else{
                        cont=0;
                    }
                }
                else{
                    sigo=false;
                    j++;
                }
            
            }   
         /*   
            for (let j = 0; j < this.cantFil; j++){
                if ( (i>=0) && (j >= 0)){
                    if (this.juego[j][i] == jugador){
                        cont++;
                        i++;
                        j--;
                        if (cont == 4){
                            return true;
                        }
                    }
                    else{
                        cont=0;
                    }
                    
                }
            }  */  
        }
    
        return false;
    
    
    }
        /*
        for (let i = -(this.col + 4); i < this.col; i++) {
        let n1 = 0;
        let n2 = 0;
        for (let f = 0; f < this.fil; f++) {
            let c = i + f;
            if ((c < 0) || (c >= this.col))
                continue;
            if (this.juego[f][c] == 'vacio') {
                n1 = 0;
                n2 = 0;
            }
            else if (this.juego[f][c].getFill() == 'yellow') {
                n1++;
                n2 = 0;
                if (n1 == 4)
                    return 'yellow';
            }
            else if (this.juego[f][c].getFill() == 'red') {
                n1 = 0;
                n2++;
                if (n2 == 4)
                    return 'red';
            }
        }
    }

/*
    for (let i = 0; i < this.col + 4; i++) {
        let n1 = 0;
        let n2 = 0;
        for (let f = 0; f < this.fil; f++) {
            let c = i - f;
            if ((c < 0) || (c >= this.col))
                continue;
            if (this.juego[f][c] == 'vacio') {
                n1 = 0;
                n2 = 0;
            }
            else if (this.juego[f][c].getFill() == 'yellow') {
                n1++;
                n2 = 0;
                if (n1 == 4)
                    return 'yellow';
            }
            else if (this.juego[f][c].getFill() == 'red') {
                n1 = 0;
                n2++;
                if (n2 == 4)
                    return 'red';
            }
        }
    }
    return 'vacio';
*/




}