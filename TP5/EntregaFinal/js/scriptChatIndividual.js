

document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector("#closeChat").addEventListener("click",closeChatIndividual);

    
    function closeChatIndividual (){
       
        window.location.href="listChat.html";
        document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
    }
});