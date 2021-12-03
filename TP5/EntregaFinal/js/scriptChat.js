




document.addEventListener('DOMContentLoaded', (event) => {
    
    
    document.querySelector("#chat1").addEventListener("click",loading);

    function loading (e){
        document.querySelector("#load").classList.remove("oculto");
        document.querySelector("#load").classList.add("visible");
        setTimeout(cambiarPagina,2000);
    }
    
    function cambiarPagina (){
       
        window.location.href="chatIndividual.html";
         document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
    }

    document.querySelector("#iconCloseChatList").addEventListener("click",closeChatGoHome);

    function closeChatGoHome (){
        window.location.href="index.html";
    }

    
    

});