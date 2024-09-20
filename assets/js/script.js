let listaNombreGastos=[];
let listaValorGastos=[];

function clickBoton(){
let nombreGasto=document.getElementById('nombreGasto').value;
let valorGasto=document.getElementById("valorGasto").value;



//console.log(nombreGasto);//verifico ingreso de datos
//console.log(valorGasto); //verifico ingreso de datos
//alert("click del usuario"); verificando funcion
listaNombreGastos.push(nombreGasto);
listaValorGastos.push(valorGasto);
//console.log(listaNombreGastos); valores en mi arreglo
//console.log(listaValorGastos); valores en mi arreglo

actualizarLista();

}
 
function actualizarLista(){
 
 const listaElementos= document.getElementById("listaDeGastos");
 const totalElemento= document.getElementById("totalGastos");
 let totalGastos=0;
 let htmlLista='';

    listaNombreGastos.forEach((elemento,posicion) => {
       // console.log(elemento);   
        //console.log(posicion);
        const valorGasto= Number(listaValorGastos[posicion]);

     if(valorGasto>150){
        
        alert("Advertencia Valor muy grande");
        return;

     }
    htmlLista +=  `<li>${elemento} -  USD ${valorGasto.toFixed(2)}  
    
    <button onclick="Botonborrar(${posicion});">Eliminar</button>
    
    
    </li> `;
     


      // sumatoria de gastos
    totalGastos+=Number(valorGasto);

    //console.log(totalGastos);  verifico sumatoria de valores

    });   

 
    listaElementos.innerHTML=htmlLista;
    totalElemento.innerHTML=totalGastos.toFixed(2);
    clean();
  

}

function clean(){

document.getElementById('nombreGasto').value='';
document.getElementById("valorGasto").value='';
    
}

function Botonborrar(posicion){

    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    actualizarLista();


}

