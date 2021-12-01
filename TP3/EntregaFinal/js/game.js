class game {



        constructor(  ){
          
            this.avatar = new avatar(".avatar" , "./img/bird180x42.png");
            this.interval;
            this.event;
            this.puntaje= 0;
            this.obstaculo = new obstaculo(1 , "./img/pipe.png");
            this.obstaculo2;
            this.empezarJuego=false;
        
        
        }

        setJuegoEmpezado(){         
            this.empezarJuego=true;
        }
        getPuntaje(){
            return this.puntaje;
        }


        setEnvent(event){
            this.event = event;
          

        }

        iniciar(){

            this.interval = setInterval(()=>{this.update()},50); 
        }

        

        update(){            

                let avatarTop = this.avatar.getPosY();
              
                switch (this.event) {
                    
                    case  "pressClick" : {          
                        if (this.avatar.getPosY() > 0 + this.avatar.getAlto()) {             
                            this.avatar.setPosY(avatarTop-35);
                            this.avatar.rotateImage(-15);

                            setTimeout(()=>{this.event = false; this.avatar.rotateImage(0); }, 50);
                        }
                        break;
        
                    }
                    
                    case  "dobleClick" : {
                        if (this.avatar.getPosY() > 0 + this.avatar.getAlto()) {             
                            this.avatar.setPosY(avatarTop-0);
                            this.avatar.rotateImage(-30);
                            setTimeout(()=>{this.event = false; this.avatar.rotateImage(0); }, 100);
                        }
                        break;
        
                    } 
        
                    default: {
                        if (this.empezarJuego && avatarTop < 550){
        
                            this.avatar.setPosY((avatarTop + 13));
                
                            this.avatar.rotateImage(60);
                        }
                        else {
                            if (avatarTop > 550){
                                this.terminar();
                            }
                        }
                        break;

                    }
        
        
                }
                      
        
                
                
                if (this.empezarJuego){
                    if (this.obstaculo!=null){
                        this.moverObstaculo1();
                    }
                    if (this.obstaculo2!=null){
                        this.moverObstaculo2();
                    }
                }
                
                this.chocoObstaculo(this.obstaculo);
                this.chocoObstaculo(this.obstaculo2);
            
                  this.avatar.update();
        }

        terminar () {
            this.avatar.terminar();
            clearInterval(this.interval);
            
           
        }

        chocoObstaculo(tuberia){
            if (tuberia!=null && ((this.avatar.getPosX() + this.avatar.getAncho()) >= tuberia.getPosX()) && !(this.avatar.getPosX() > (tuberia.getPosX()+tuberia.getAncho())) ){
                if (!(this.avatar.getPosY() + this.avatar.getAlto() < tuberia.getLimiteInf() && this.avatar.getPosY() > tuberia.getLimiteSup())){      
                    this.terminar();
                }
            }
        }

     
        moverObstaculo1(){
            if (this.obstaculo != null ){
                if ( this.obstaculo.getPosX() > -80 ) {         
                    this.obstaculo.setPosX(this.obstaculo.getPosX()-10)
                    if (this.avatar.getPosX() > this.obstaculo.getPosX() && this.obstaculo2 == null){
                        this.puntaje++;
                        this.obstaculo2 = new obstaculo(2 , "./img/pipe.png");
                    }
                    this.obstaculo.update();
        
                } else {
                    this.obstaculo.terminar(); 
                    this.obstaculo= null; 
                           
        
                }
               
                
            }
         
        }   

        moverObstaculo2(){
            
            if (this.obstaculo2 != null ){
                if ( this.obstaculo2.getPosX() > -80 ) {         
                    this.obstaculo2.setPosX(this.obstaculo2.getPosX()-10)
                    if (this.avatar.getPosX() > this.obstaculo2.getPosX() && this.obstaculo == null){
                        this.puntaje++;
                        this.obstaculo = new obstaculo(1 , "./img/pipe.png");
                    }
        
        
                  this.obstaculo2.update();
        
                } else {
                    this.obstaculo2.terminar();
                    this.obstaculo2= null; 
                    
                    
        
                }
            }
        }


        reiniciarJuego(){
            this.avatar.reiniciar();
            this.puntaje= 0;
            this.empezarJuego = false;
            if (this.obstaculo != null) {
                this.obstaculo.terminar();
                this.obstaculo = null;   
                this.obstaculo = new obstaculo(1 , "./img/pipe.png");
            }
            if (this.obstaculo2 != null ) {
                this.obstaculo2.terminar();
                this.obstaculo2 = null;
            }
            
        }


}