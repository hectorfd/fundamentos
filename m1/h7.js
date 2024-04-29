// Listas Enlazadas
//Node
// next -> va a describir la posición de memoria del proximo elemento de la lista
// data -> la información que alojamos en dicha posición
//List
// head -> representa la dirección de memoria del PRIMER elemento de la lista NODO!  
function Node(data){
    this.data = data
    this.next = null
}

function LinkedList(){
    this.head = null
}

let list = new LinkedList() // list.head= null

LinkedList.prototype.add = function(data){
    let node = new Node(data)
    
    let current = this.head // sera la instancia de la linked list a la cual se el aplica el método
    if(!current){
        // puede o no tener info del head
        // aca estoy en el caso de que no tengo un nodo asociado en el head
        // por lo tanto list-> null
        this.head = node
    }
    while(current.next){
        current = current.next
    }
    current.next = node
}



// listas enlazadas

list.prototype.add = function(data){
    var node = new Node(data)
    var current = this.head
    if(!current){
        this.head = node
        this._length++
        return node
    }
    while(current.next){
        current = current.next
    }
    current.next = node
    this._length++
    return node
}

list.prototype.getAll = function(){
    current = this.head
    if(!current){
        console.log('La lista esta vacía')
    }
    while(current){
        console.log(current.data)
        current = current.next
    }
    return
}

// listas doblemente enlazadas
