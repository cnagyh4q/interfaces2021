

document.addEventListener('DOMContentLoaded', (event) => {

    document.querySelector("#abrirChatHome").addEventListener("click",abrirChatDesdeHome);

    function abrirChatDesdeHome (){
        document.querySelector("#load").classList.remove("oculto");
        document.querySelector("#load").classList.add("visible");
        setTimeout(cambiarPaginaHomeChat,2000);
    }

    function cambiarPaginaHomeChat (){
       
        window.location.href="listChat.html";
        document.querySelector("#load").classList.remove("visible");
        document.querySelector("#load").classList.add("oculto");
    }
});