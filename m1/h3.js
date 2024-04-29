function saludar (saludo){
    return function(nombre){
        console.log(saludo +' '+ nombre)
    }
}

var saludarHola = saludar('Hola')// esto devuelve una función, se reutiliza tantas veces sea necesaria 
saludarHola('Hector')// Hola Hector
saludarHola('Ana')// Hola Ana


var creaFuncion = function(){
    var arreglo = []
    for(var i = 0; i < 3; i++){
        arreglo.push(function(j){
            console.log(j)
        }(i))
    }
    return arreglo
}
var arr = creaFuncion()
//arr[0]()// 0
//arr[1]()// 1
//arr[2]()// 2

// Use Bind

var persona = {
    nombre: 'Hector',
    apellido: 'Ferro',
}

var logNombre = function(){
    console.log(this.nombre)
}
var logApellido = function(){
    console.log(this.apellido)
}

var logNombrePersona = logNombre.bind(persona)
var logApellidoPersona = logApellido.bind(persona)
logNombrePersona()// Hector
logApellidoPersona()// Ferro

// Bind devuelve una función
function multiplica(a,b){
    console.log('Hola '+ this.nombre)
    return a * b
}
var multiplicaPorDos = multiplica.bind(persona, 2)

console.log(multiplicaPorDos(3,4))// los valores después del 3 no importan

// CAll-> invoca la función no la crea

var person = {
    firstName:'Jesus',
    lastName:'Nazareth',
}

var LogName =  function(){
    console.log(this.firstName)
}

LogName.call(person)

var LogName =  function(arg1, arg2){
    console.log(arg1+' '+this.firstName+' '+arg2)
}

LogName.call(person,'Hola', ', Cómo estas?')

// APlY -> es igual a call, solo que el segundo argumento es un arreglo
var logSutiy =  function(ar1,ar2){
    console.log(ar1+' '+this.firstName+' '+ar2)
}
log.apply(persona,['Hola', ', Cómo estas?'])

