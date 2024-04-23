'use strict'// js puro sin librerías
// num->string
// string -> numero decimal
// formula Sumatoria(2^posición*valor en dicha posición)
// 1010->valor
// 3210->posición
// 2^3*1 + 2^2*0 + 2^1*1 + 2^0*0
//   8   +   0   +   2   +  0
// 10
// num string -> Array
// '1010'->[1,0,1,0]
// var array = num.split('')
// 'h-o-l-a'

function BinarioADecimal(num){
    var array = num.split('')
    var sum = 0
    // for(var i=0; i<array.length; i++){
    //     sum = sum + Math.pow(2,array.length-1-i) * array[i]
    // }
    // inversa
    //1010
    //0123
    for(var j=array.length-1; j>=0; j--){
        //        3           3>=0   2   
        //        2           2>=0   1
        //        1           1>=0   0
        //        0           0>=0   -1
        //        -1          -1>=0  false
        sum += Math.pow(2,array.length-1-j)*array[j]// [1,0,1,0] -> 0,1,2,3
    //   0               2 ^ 3-3 = 1 * 0 = 0
    //   0               2 ^ 3-2 = 2 * 1 = 2
    //   2               2 ^ 3-1 = 4 * 0 = 0
    //   2               2 ^ 3-0 = 8 * 1 = 8
    //   10
    }
    return sum
}
// Probar la función con un número binario
var numeroBinario = "1010";
var resultadoDecimal = BinarioADecimal(numeroBinario);
console.log("El número decimal equivalente de " + numeroBinario + " es: " + resultadoDecimal);


// num  = 10
// 10/2 = 5 [0]
// 5/2  = 2 [1]
// 2/2  = 1 [0]
// 1/2  = 0 [1]
//=============
// 1010
function DecimalABinario(num){
 if(num<=0)return '00000000'
 var array = []
 while(num>0){
    // 10 > 0 = true
    // 5  > 0 = true
    // 2  > 0 = true
    // 1  > 0 = true
    // 0  > 0 = false
    array.unshift(num%2)//[1,0,1,0] -> tipo UEPS -> ultimo en entrar primero en salir
    // 10%2 = 0
    // 5%2  = 1
    // 2%2  = 0
    // 1%2  = 1
    num = Math.floor(num/2)
    // 10/2 = 5
    // 5/2  = 2
    // 2/2  = 1
    // 1/2  = 0.5 -> round = 0
 }
 return array.join('')
}

var numeroDecimal = 10
var resultadoBinario = DecimalABinario(numeroDecimal)
console.log("El número binario equivalente de " + numeroDecimal + " es: " + resultadoBinario)


module.export ={
    BinarioADecimal,
    DecimalABinario,
}