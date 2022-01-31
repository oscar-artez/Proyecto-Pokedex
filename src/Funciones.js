// FUNCION FILTRAR N IGUALES DE UN ARRAY
let cantidades = [100, 20,300,500,1,120,150,200,100,500,1000,250];
let compararCandidades = (cantidades) => {

    let nvoArray = cantidades.filter((posicionActual,indice, array) =>{

        return posicionActual > 120;
    });

    console.log(nvoArray);
}