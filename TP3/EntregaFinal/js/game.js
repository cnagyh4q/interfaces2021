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
            //console.log("Dentro del juegoEmpezado event");
            this.empezarJuego=true;
        }
        getPuntaje(){
            return this.puntaje;
        }


        setEnvent(event){
            this.event = event;
            //console.log("Dentro del setEvent event : "+this.event);

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
                /*
                if (this.obstaculo != null && this.empezarJuego){
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
        
                
               
        
                if (this.obstaculo2 != null && this.empezarJuego){
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
                
                */
                this.chocoObstaculo(this.obstaculo);
                this.chocoObstaculo(this.obstaculo2);
                /*
                if (this.obstaculo!=null && ((this.avatar.getPosX() + this.avatar.getAncho()) >= this.obstaculo.getPosX()) && !(this.avatar.getPosX() > this.obstaculo.getPosX()) )
                  if (!(this.avatar.getPosY() + this.avatar.getAlto() < this.obstaculo.getLimiteInf() && this.avatar.getPosY() > this.obstaculo.getLimiteSup())){
                      
                        this.terminar();
                  }else {
                      //if (this.obstaculo.getPosX() == 0){
                       // this.puntaje++;
                      //}
                    
                                   
                  }
                  if (this.obstaculo2!=null && ((this.avatar.getPosX() + this.avatar.getAncho()) >= this.obstaculo2.getPosX()) && !(this.avatar.getPosX() > this.obstaculo2.getPosX()) )
                  if (!(this.avatar.getPosY() + this.avatar.getAlto() < this.obstaculo2.getLimiteInf() && this.avatar.getPosY() > this.obstaculo2.getLimiteSup())){
                      
                        this.terminar();
                  }else {
                    //this.puntaje++;
                                   
                  }
                */
                  this.avatar.update();
        }

        terminar () {
            this.avatar.terminar();
            clearInterval(this.interval);
            //alert("Perdiste");
           
        }

        chocoObstaculo(tuberia){
            if (tuberia!=null && ((this.avatar.getPosX() + this.avatar.getAncho()) >= tuberia.getPosX()) && !(this.avatar.getPosX() > (tuberia.getPosX()+tuberia.getAncho())) ){
                if (!(this.avatar.getPosY() + this.avatar.getAlto() < tuberia.getLimiteInf() && this.avatar.getPosY() > tuberia.getLimiteSup())){      
                    this.terminar();
                }
            }
        }

        //moverObstaculo(tuberia,tuberia2){
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
            /*
            if (tuberia != null ){
                if ( tuberia.getPosX() > -80 ) {         
                    tuberia.setPosX(tuberia.getPosX()-10)
                    if (this.avatar.getPosX() > tuberia.getPosX() && tuberia2 == null){
                        this.puntaje++;
                        tuberia2 = new obstaculo(2 , "./img/pipe.png");
                    }
                    tuberia.update();
        
                } else {
                    tuberia.terminar(); 
                    tuberia= null; 
                           
        
                }
            }
            */
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


}