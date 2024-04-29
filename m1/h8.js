// arboles
function BinarySearchTree(value){
    this.value = value
    this.left = null
    this.right = null
}

let bst = new BinarySearchTree(5)
// bst -> {value:5, right:null, left:null}
// -                     5
// -                   /   \   
// -                null   null 
bst.insert(6) // derecha
bst.insert(7) 
bst.insert(10)
bst.insert(8)
// -                     5
// -                   /   \   
// -                null    6
// -                       /  \
// -                     null  7
// -                          /  \
// -                       null  10
// -                             /  \
// -                            8   null
// por niveles -> BFS
// por profundidad -> DFS (pre order, in order, post order )

BinarySearchTree.prototype.insert = function(value){
    if(value > this.value){
        if(this.right !== null){
            this.right.insert(value)//recursion
        }
        else{
            this.right = new BinarySearchTree(value)
        }
    }

    if (value < this.value){
        if(this.left !== null){
            this.left.insert(value)// recursion
        }
        else{
            this.left = new BinarySearchTree(value)
        }

    }
}

// Pre Order

