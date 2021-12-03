

document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector("#closeChat").addEventListener("click",closeChatIndividual);

    
    function closeChatIndividual (){
       
        window.location.href="listChat.html";
    }
});