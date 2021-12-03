

document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector("#abrirChatHome").addEventListener("click",abrirChatDesdeHome);

    function abrirChatDesdeHome (){
        document.querySelector("#load").classList.remove("oculto");
        document.querySelector("#load").classList.add("visible");
        setTimeout(cambiarPaginaHomeChat,2000);
    }

    function cambiarPaginaHomeChat (){
       
        
        document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
        window.location.href="listChat.html";
    }

    document.querySelector("#botonSearch").addEventListener("click",abrirSearchDesdeHome);
    
    function abrirSearchDesdeHome (){
       
        document.querySelector("#load").classList.remove("oculto");
        document.querySelector("#load").classList.add("visible");
        setTimeout(cambiarPaginaHomeSearch,2000);
    }
    function cambiarPaginaHomeSearch (){
       
        
        document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
        window.location.href="search.html";
    }


    document.querySelector("#botonLike").addEventListener("click",sumarLike);
    
    function sumarLike(){
        if (document.querySelector("#botonLike").classList.contains("colorLike") ) 
        {
            document.querySelector("#contradorLike").innerHTML = "99";
            document.querySelector("#botonLike").classList.remove("colorLike");

        }
        else
        {
            document.querySelector("#contradorLike").innerHTML = "100";
            document.querySelector("#botonLike").classList.add("colorLike");

        }       
    }

    document.querySelector("#botonDiskLike").addEventListener("click",diskLike);
    function diskLike (){
        
        if (document.querySelector("#botonDiskLike").classList.contains("colorDiskLike") ){
            document.querySelector("#botonDiskLike").classList.remove("colorDiskLike")
        }
        else
        {
            document.querySelector("#botonDiskLike").classList.add("colorDiskLike");
        }

    }


    document.querySelector("#botonComentar").addEventListener("click",()=>{

        setTimeout(()=>{
            document.querySelector("#load").classList.remove("visible");
            document.querySelector("#load").classList.add("oculto");
            window.location.href="comentar.html";
        },2000);

        

    });


});


/*
 <section class="reaction">
                    <i id="contradorLike" class="bi bi-hand-thumbs-up-fill">99</i>
                    <i  class="bi bi-chat-square-text-fill">100</i>

                </section>

                <section class="botonera-reaction">

                    <i id="botonLike" class="bi bi-hand-thumbs-up-fill"></i>
                    <i id="botonDiskLike" class="bi bi-hand-thumbs-down-fill"></i>
                    <i class="bi bi-chat-square-text-fill"></i>
                    <i class="bi bi-share-fill"></i>

                </section>
*/