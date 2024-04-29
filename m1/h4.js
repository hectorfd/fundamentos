function counter(){
    // Retorna un función que cuando sea invocada retorne un valor creciente
    // el primer valor debería ser 1
    // vas a tener que usar closures

    var count = 0
    return function(){
        count++
        return count
    }
}

var counterOne = counter() // 1
var counterTwo = counter() // 1

console.log(counterOne())
console.log(counterTwo())


function cacheFunction(cb){
    // usa closures para crear una cache para la funcion cb
    // la función que retornas debe aceptar un solo argumento e invocar a cb con ese argumento
    // cuando la función que hayas retornado es invocada de nuevo, deberia guardar el argumento y 
    // cuando la función que retornaste sea invocada de nuevo con un argumento con el cual se  habia invocado
    // debería retornar el resultado (previamente guardado)
    // ejemplo
    // cb -> function(x) {return x*x}
    // si invocas  la función que retornaste con 5. adentro deberia invocar cb(5) y retornar 25
    // si la invocas de nuevo con 5, debería retornar 25(guardado previamente en el cache)
    // WebTransportBidirectionalStream, usa un objeto donde cada propiedad sea un argumento, y el valor el resultando
    // usa hasOwnProperty-> esta función preguntara si ya se cuenta con el argumento dentro del objeto

    var cache = {}
    return function(arg){
        if(cache.hasOwnProperty(arg)){
            return cache[arg]
        }else{
            cache[arg] = cb(arg)
            return cache[arg]
        }
    }

}