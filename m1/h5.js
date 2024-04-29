// factorial
function factorial(x) {  
    if(x>-1 && x<2) return 1
    else if (x<0) return 'no se puede calcular factorial de números negativos'
    return x * factorial(x-1)
}
// - 4! = 4 x 3 x 2 x 1
// - if(x>-1 && x<2) return 1 // en este punto la iteración va a parar retornando 1 
// - else if (x<0) return // en caso de que haya números negativos la función se rompe y devuelve un mensaje
// - return x * factorial(x-1) // aquí retornara el factorial 
// - factorial(4) --> STOP nose cuanto es factorial de 4 
// - 4 x factorial(3) --> STOP no se cuanto es factorial de 3
// - 3 x factorial(2) --> STOP no se cuanto es factorial de 2
// - 2 x factorial(1) --> STOP no se cuanto es factorial de 1
// - resuelvo factorial(1) --> if(x>-1 && x<2) return 1
// - 2 x factorial(1) --> 2 x 1 = 2
// - 3 x factorial(2) --> 3 x 2 = 6
// - 4 x factorial(3) --> 4 x 6 = 24
// - factorial(4) --> 24

// vista en consola
console.log(factorial(4))
// algoritmo de factorial

var num = 4
function factorial(num) {
    if (num === 0) {
        return 1
    } else {
        return num * factorial(num - 1)
    }
}

// Estructura de Datos
//- se refiere a como organizar los datos de manera que pueden ser utilizados de manera eficiente
// Data Structures
//  - Built-in Structures
//      - Integer
//      - FLoat
//      - Character
//      - Pointer
//  - User Defined DataStructures
//      - Arrays -> [H,E,L,L,O]
//      - Files
//      - List
//          - Linear List
//              - Stacks
//              - Queues
//          -Non-Linear List
//              - Trees
//              - Graphs


// ARREGLO
// - array = [1,2,3,4,5]

// SETS

var arreglo = [1,2,3,4,5,6,7,8,1,2]
var set1 = new Set(arreglo)
console.log(arreglo) //1,2,3,4,5,6,7,8,1,2
console.log(set1) //Set{1,2,3,4,5,6,7,8}

set1.add('Hector')//agregara 'Hector' al ultimo
console.log(set1)
set1.delete('Hector')// eliminara hector de la lista
console.log(set1)
console.log(set1.has(5))// devuelve true si encuentra el valor
console.log(set1.size)// muestra el tamaño de la lista

// Pilas (STACKS)
// LAst In - First Out

var stack = []
stack.push(1) // ingresa 1 al array y asi sucesivamente en cada push
stack.push(2)
stack.push(3)
stack.push(4)
var i = stack.pop()// saca el ultimo dato del array
console.log(stack)// imprime los array restantes
console.log(i)// imprime el array guardado en la variable i
//! que pasaría si 
stack.shift()// saca el primer dato del array // pero rompe el stack la caga en pocas palabras
stack.unshift(1)// agrega un dato al inicio del array
// para evitar esto
function Stack(){
    this.arr = []
}
Stack.prototype.push = function(dato){
    this.arr.push(dato)
}
Stack.prototype.pop = function(){
    return this.arr.pop()
}
// de esta forma solo el sistema de colas no admitirá otras funciones que no sean push and pop

// Colas (QUEUES)
// el primero en llegar es el primero en ser atendido
var queue = []
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
var i = queue.shift()// saca el primer dato del array
console.log(queue)// imprime los array restantes
console.log(i)// imprime el array guardado en la variable i

