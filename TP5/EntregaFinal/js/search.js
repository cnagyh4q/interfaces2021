
document.addEventListener('DOMContentLoaded', (e) => { 


        let todos = document.querySelector("#btn-all");
        let prof = document.querySelector("#btn-prof");
        let perf = document.querySelector("#btn-perf");
        let publi = document.querySelector("#btn-publi");


        let secProf = document.querySelector("#sec-profe");
        let secPerf = document.querySelector("#sec-perf");
        let secPubli = document.querySelector("#sec-publi");

        let input = document.querySelector(".inp-search");
        
        



        todos.addEventListener("click" , () =>{

            todos.classList.add("activo");
            prof.classList.remove("activo");
            perf.classList.remove("activo");
            publi.classList.remove("activo");
            if (input.value){
                secProf.classList.remove("oculto");
                    secPerf.classList.remove("oculto");
                    secPubli.classList.remove("oculto");
            }

            

        });


        prof.addEventListener("click" , () =>{
            todos.classList.remove("activo");
            prof.classList.add("activo");
            perf.classList.remove("activo");
            publi.classList.remove("activo");
            if (input.value){
                secProf.classList.remove("oculto");
                    secPerf.classList.add("oculto");
                    secPubli.classList.add("oculto");
            }
            

        });

        perf.addEventListener("click" , () =>{
            todos.classList.remove("activo");
            prof.classList.remove("activo");
            perf.classList.add("activo");
            publi.classList.remove("activo");
            if (input.value){
                secProf.classList.add("oculto");
                    secPerf.classList.remove("oculto");
                    secPubli.classList.add("oculto");
            }
            

        });

        publi.addEventListener("click" , () =>{
            todos.classList.remove("activo");
            prof.classList.remove("activo");
            perf.classList.remove("activo");
            publi.classList.add("activo");
            if (input.value){
                secProf.classList.add("oculto");
                    secPerf.classList.add("oculto");
                    secPubli.classList.remove("oculto");
            }            

        });


        document.querySelector(".inp-search").addEventListener("change", (e)=>{

            let value = e.target.value;
            
            if (value) {

                if (todos.classList.contains("activo")){
                    secProf.classList.remove("oculto");
                    secPerf.classList.remove("oculto");
                    secPubli.classList.remove("oculto");
                } 
                if (prof.classList.contains("activo")){
                    secProf.classList.remove("oculto");
                    secPerf.classList.add("oculto");
                    secPubli.classList.add("oculto");
                }
    
                if (publi.classList.contains("activo")){
                    secProf.classList.add("oculto");
                    secPerf.classList.add("oculto");
                    secPubli.classList.remove("oculto");
                }
                if (perf.classList.contains("activo")){
                    secProf.classList.add("oculto");
                    secPerf.classList.remove("oculto");
                    secPubli.classList.add("oculto");
                }

            } else {
                secProf.classList.add("oculto");
                secPerf.classList.add("oculto");
                secPubli.classList.add("oculto");
            }
         

        })
        




});