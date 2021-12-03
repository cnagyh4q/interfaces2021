




document.addEventListener('DOMContentLoaded', (event) => {
    
    
    document.querySelector("#chat1").addEventListener("click",loading());

    function loading (e){
        document.querySelector("#load").classList.remove("oculto");
        document.querySelector("#load").classList.add("visible");
        setTimeout(cambiarPagina(),99000);
    }
    
    function cambiarPagina (){
        document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
        window.location.href="chatIndividual.html";
    }

});