
/** 
*  1 - Imprimimos por consola el estado de cada tren en movimiento de manera individualizada... usando for.
* El tren número 1 esta funcionando
* El tren número 2 esta funcionando
* El tren número 3 esta funcionando
* El tren número 4 no esta funcionando
* El tren número 5 no esta funcionando
* El tren número 6 no esta funcionando
* El tren número 7 no esta funcionando
* El tren número 8 no esta funcionando
**/
  
var trenesOperativos = 3;
var totalTrenes = 8;

function estadoDetalle () {
    for (numeroTren = 1; numeroTren <= totalTrenes; numeroTren++) {
        console.log("El tren " + numeroTren + " esta " + (numeroTren <= trenesOperativos ? "funcionando" : "parado"));
    }	
};