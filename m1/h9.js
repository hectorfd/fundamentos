// algoritmos
// conjunto de instrucciones definidos y ordenadas y finitas que permite realizar una actividad mediante pasos sucesivos

// 1.- resuelve un problema
// 2.- debe ser comprensible
// 3.- eficientes

// medidas de la eficiencia

// - tiempo
// - espacio
// - otros recursos
//   - red 
//   - gráficos
//   - hardware(impresoras, Cpus, sensores etc)

// 1.- 1,2,3,4,5,6,7,8,9,10 -> por fuerza bruta recorre todo 
// 2.- 1,2,3,4,5,6,7,8,9,10 -> n/2 dividir y vencer 

//Quicksort

function Quicksort(array){
    if(array.length <= 1){
        return array;
    }
    var pivot = array[0];
    var left = [];
    var right = [];
    for(var i = 1; i < array.length; i++){
        if(array[i] < pivot){
            left.push(array[i]);
        }else{
            right.push(array[i]);
        }
    }
    return Quicksort(left).concat(pivot, Quicksort(right));

}

//mergeSort
function mergeSort(array){
    if(array.length === 1){
        return array;
    }
    var middle = Math.floor(array.length/2);
    var left = array.slice(0, middle);
    var right = array.slice(middle, array.length);

    return merge(mergeSort(left), mergeSort(right));
}