//Recursion
// 1.- hallar n(n!) factorial

function nFactorial(n){
    if(n >= 0 && n < 2){
        return 1;
    }else if(n < 0){return 'No se aceptan números negativos'}
    else{
        return n * nFactorial(n-1);
    }
}
// 

console.log(nFactorial(4))

// 2.- Hallar sucesión Fibonacci 0,1,1,2,3,5,8,13...
// Formula Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)
function nFibonacci(n){
    if(n < 0){return 'No se aceptan números negativos'}
    if(n === 0){
        return 0;
    }else if(n === 1){
        return 1;
    }else{
        return nFibonacci(n-1) + nFibonacci(n-2);
    }
}
// (0) = 0
// (1) = 1
// (2-1)->1 + (2-2)->0 = Fibonacci(1) + Fibonacci(0) = 1
// (3-1)->2 + (3-2)->1 = (1) + (1) = 2
// (4-1)->3 + (4-2)->2 = (2) + (1) = 3
// (5-1)->4 + (5-2)->3 = (3) + (2) = 5
// (6-1)->5 + (6-2)->4 = (5) + (3) = 8
// (7-1)->6 + (7-2)->5 = (8) + (5) = 13
for (let i = 0; i <= 7; i++) {
    console.log(nFibonacci(i))
}