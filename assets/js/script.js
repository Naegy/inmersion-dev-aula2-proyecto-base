let listaNombreGastos=[];
let listaValorGastos=[];
let listaDescripciones=[];
let indiceModificacion = null;

let botonActu= document.getElementById('botonActualizar');
let botonform=document.getElementById("botonFormulario");

function clickBoton(){

let nombreGasto=document.getElementById('nombreGasto').value;
let valorGasto=document.getElementById("valorGasto").value;
let descripcion=document.getElementById("descripcionGasto").value;

//console.log(nombreGasto);//verifico ingreso de datos
//console.log(valorGasto); //verifico ingreso de datos
//alert("click del usuario"); verificando function
listaNombreGastos.push(nombreGasto);
listaValorGastos.push(valorGasto);
listaDescripciones.push(descripcion);
//console.log(listaNombreGastos); valores en mi arreglo
//console.log(listaValorGastos); valores en mi arreglo
//console.log(listaDescripciones); 
if (valorGasto>150){
  alert("Advertencia Gasto Supera 150$");
}


actualizarLista();

}
 
function actualizarLista(){
 
 const listaElementos= document.getElementById("listaDeGastos");
 const totalElemento= document.getElementById("totalGastos");
 
 
 let totalGastos=0;
 let htmlLista='';

    listaNombreGastos.forEach((elemento,posicion)=> {

      // console.log(elemento);   
       // console.log(posicion);

      const descripcion=listaDescripciones[posicion];
      const valorGasto= Number(listaValorGastos[posicion]);
      
     
    htmlLista +=  `<li>${elemento} descripcion: ${descripcion} USD ${valorGasto.toFixed(2)} 

    <button onclick="Botonborrar(${posicion});">Eliminar</button>
    <button onclick="botonEditar(${posicion});">Editar</button></li> `;
    
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
document.getElementById("descripcionGasto").value='';
    
}

function Botonborrar(posicion){

    listaNombreGastos.splice(posicion,1);
    listaValorGastos.splice(posicion,1);
    listaDescripciones.splice(posicion,1);
    actualizarLista();

}

function botonEditar(posicion){
  

  document.getElementById('nombreGasto').value = listaNombreGastos[posicion];
  document.getElementById('valorGasto').value = listaValorGastos[posicion];
  document.getElementById('descripcionGasto').value = listaDescripciones[posicion];

  indiceModificacion = posicion;    // almaceno mi posicion actual 


  cambiarBotonesActualizar();
  //listaNombreGastos.push(nombreGasto);
  //listaValorGastos.push(valorGasto);
  //listaDescripciones.push(descripcion);


  

//listaNombreGastos.splice(posicion,1,nombreGasto);
//listaValorGastos.splice(posicion,1,valorGasto);
//listaDescripciones.splice(posicion,1,descripcion);

  //console.log(posicion);






}

function botonActualizar(){

//let nombreGasto=document.getElementById('nombreGasto').value;
//let valorGasto=document.getElementById("valorGasto").value;
//let descripcion=document.getElementById("descripcionGasto").value;

//listaNombreGastos.splice(posicion,1,nombreGasto);
//listaValorGastos.splice(posicion,1,valorGasto);
//listaDescripciones.splice(posicion,1,descripcion);



//clickBoton();
//actualizarLista();
//  
if (indiceModificacion !== null) {  // si indice seleccionado diferente de vacio // obten informacion en mis cajas de texto// actualiza mi lsita 

  listaNombreGastos[indiceModificacion] = document.getElementById("nombreGasto").value;
  listaValorGastos[indiceModificacion] = document.getElementById("valorGasto").value;
  listaDescripciones[indiceModificacion] = document.getElementById("descripcionGasto").value;
  
  actualizarLista();
  cambiarBotonesGuardar();
}

      

}

function cambiarBotonesActualizar(){
botonform.style.display = 'none'
botonActu.style.display = 'block'
}

function cambiarBotonesGuardar(){
  botonform.style.display = 'block'
  botonActu.style.display = 'none'
  }

