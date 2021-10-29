class game {



        constructor(  ){
          
            this.avatar = new avatar(".avatar" , "./img/bird180x42.png");
            this.interval;
            this.event;
            this.puntaje= 0;
            this.obstaculo = new obstaculo(1 , "./img/pipe.png");
            this.obstaculo2;
        
        
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
                            this.avatar.setPosY(avatarTop-20);
                            this.avatar.rotateImage(-15);
                            setTimeout(()=>{this.event = false; this.avatar.rotateImage(0); }, 50);
                        }
        
                        break;
        
                    }
                    
                    case  "dobleClick" : {
                        if (this.avatar.getPosY() > 0 + this.avatar.getAlto()) {             
                            this.avatar.setPosY(avatarTop-40);
                            this.avatar.rotateImage(-30);
                            setTimeout(()=>{this.event = false; this.avatar.rotateImage(0); }, 100);
                        }
        
                        break;
        
                    } 
        
                    default: {
        
                        if (avatarTop < 550){
        
                            this.avatar.setPosY((avatarTop + 20));
                
                            this.avatar.rotateImage(60);
                        }
                        else {
                           this.terminar();
                        }
        
                        break;

                    }
        
        
                }
                      
        
                this.avatar.update();
                
                
                
               if (this.obstaculo != null){
                if ( this.obstaculo.getPosX() > -80 ) {         
                    this.obstaculo.setPosX(this.obstaculo.getPosX()-10)
                    if (this.avatar.getPosX() > this.obstaculo.getPosX() && this.obstaculo2 == null){
                        this.obstaculo2 = new obstaculo(2 , "./img/pipe.png");
                    }
                    this.obstaculo.update();
        
                } else {
                    this.obstaculo.terminar(); 
                    this.obstaculo= null; 
                           
        
                }
               
                
                }
        
                
               
        
                if (this.obstaculo2 != null){
                    if ( this.obstaculo2.getPosX() > -80 ) {         
                        this.obstaculo2.setPosX(this.obstaculo2.getPosX()-10)
                        if (this.avatar.getPosX() > this.obstaculo2.getPosX() && this.obstaculo == null){
                            this.obstaculo = new obstaculo(1 , "./img/pipe.png");
                        }
            
            
                      this.obstaculo2.update();
            
                    } else {
                        this.obstaculo2.terminar();
                        this.obstaculo2= null; 
                        
                        
            
                    }
                   
        
                }
        
                if (this.obstaculo!=null && ((this.avatar.getPosX() + this.avatar.getAncho()) >= this.obstaculo.getPosX()) && !(this.avatar.getPosX() > this.obstaculo.getPosX()) )
                  if (!(this.avatar.getPosY() + this.avatar.getAlto() < this.obstaculo.getLimiteInf() && this.avatar.getPosY() > this.obstaculo.getLimiteSup())){
                      
                        this.terminar();
                  }else {
                    this.puntaje++;
                                   
                  }
                
        }

        terminar () {
            this.avatar.terminar();
            clearInterval(this.interval)
           
        }








}