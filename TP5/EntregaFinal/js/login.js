
document.addEventListener('DOMContentLoaded', (e) => {


 
    document.querySelector("#form").addEventListener("submit" , (e)=>{

        e.preventDefault();

        
            document.querySelector("#load").classList.remove("oculto");
            document.querySelector("#load").classList.add("visible");
            setTimeout(()=>{
                window.location.href="muro.html";
            },2000);
        
    })






})