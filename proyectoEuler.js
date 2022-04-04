//variables  globales del DOM+
const formularioDatos=document.querySelector(`.ejercicio__formulario`);


//eventos
document.addEventListener(`click`,e =>{
    //let inputE01=document.querySelector(`#input__e01`).value;
    
    if(e.target.id===`calcular__e01`){
    crearHtml(`span`,`ejercicio__resultado`,e.target,multiplo3_5)
    }
    if(e.target.id===`limpiar_e01`){
        eliminarDatos(e.target)
        
    }

    if(e.target.id===`calcular__e02`){
        crearHtml(`span`,`ejercicio__resultado`,e.target,fibonacci)
        }
    if(e.target.id===`limpiar_e02`){
            eliminarDatos(e.target)
            
        }
});
/* window.addEventListener(`keypress`,e=>{
    console.log(e.target);
})
 */
//ejericios 

//problema 1
function multiplo3_5(dato){
        let multiplo15=0;
        let sumaTotal =0;
        let multiplo3_5=0; 
        for(let i=1;i<dato;++i){
            if(i%15===0){
                multiplo15=multiplo15+i;
            }else if(i%5===0 || i%3===0){
                multiplo3_5=multiplo3_5+i;
            }
        }
        return sumaTotal=multiplo15+multiplo3_5;
        
}

function fibonacci(posicion){

    for(let i=2; i<posicion;i++){
        numbfibo=n1+n2;
        n1=n2;
        n2=numbfibo;

        fiboArray.push(numbfibo)
        
    };
    fiboArray.forEach((numero)=>{
        if(numero<4000000){
            if(numero%2===0){
                parfibo.push(numero)
            
    
            }
        }

    })
    console.log(parfibo)
    
    let sumpares=parfibo.reduce((total , numero)=>total +numero,0)
    
    return sumpares;
}
// fin de ejercicios


    //funciones manejar imput boton
function eliminarDatos(elemento){
        const datoEliminar=elemento.parentElement.nextElementSibling.lastChild.textContent="";
        formularioDatos.reset();
        
}
function crearHtml(tag=`span`,clase=`ejercicio__resultado`,elemento,funcionEjercio){
        const spanRespuesta=document.createElement(tag);
        const elenentoSelecionado=elemento.parentElement.nextElementSibling;
        const valorInput=elemento.previousElementSibling.value;
        let sumaMultiplos=funcionEjercio(valorInput);
        spanRespuesta.classList.add(clase);
        console.log(elenentoSelecionado.lastElementChild)

        if(elenentoSelecionado.lastElementChild.className===`ejercicio__resultado`){
            elenentoSelecionado.lastElementChild.remove();
            spanRespuesta.textContent=sumaMultiplos;
            elenentoSelecionado.appendChild(spanRespuesta);
            
        }else{
            
            spanRespuesta.textContent=sumaMultiplos;
            elenentoSelecionado.appendChild(spanRespuesta);
        }
    
} 
    
/* function validarNumero(e){
        console.log(e.keyCode);
} */
