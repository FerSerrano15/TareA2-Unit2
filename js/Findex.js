//clase para crear los nodos
class Nodo{
    constructor(dato, next = null){
        this.dato = dato;
        this.next = next;
    }
}

//clase para crear la lista
class ListaEnlazada{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //METODOS DE LA LISTA ENLAZADA SIMPLE...............................................................

    //insertBefore  agrega un nodo al principio de la lista *
    insertBefore(dato){
        this.head = new Nodo(dato, this.head);
        this.size++;
    }

    //insertAfter   agrega un nodo al final de la lista 
    insertAfter(dato){
        let newNode = new Nodo(dato);
        
        if(!this.head){
            this.head = newNode;
        }
        else{
            let tail = this.head;
            while(tail.next !== null){
                tail = tail.next;
            }
            tail.next = newNode;
        }
        this.size++;
    }

    //insertAt      agrega un nodo en una posicion especifica
    insertAt(dato, index){
        if(index < 0 || index > this.size){
            return null;
        }

        const newNode = new Nodo(dato);
        let current = this.head;
        let previous;

        if(index === 0){
            newNode.next = current;
            this.head = newNode;
        }else{
            for(let i=0; i<index; i++){
                previous = current;
                current = current.next;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }

    //removeFirst   remueve el primer nodo.*
    removeFirst(){
        if(this.head){
            this.head = this.head.next;
            this.size--;
        }
    }

    //removeLast    remueve el ultimo nodo.*
    removeLast(){
        if(!this.head) return;

        if(this.head.next === null){
            this.head = null;
        } else {
            let current = this.head;
            while(current.next.next){
                current = current.next;
            }
            current.next = null;
        }
        this.size--;
    }

    //print         muestra los nodos de la lista*
    print(){
        let current = this.head;
        while(current){
            console.log(current.dato);
            current = current.next;
        }
    }
}

// Crear una lista enlazada
const LISTA = new ListaEnlazada();

// Insertar nodos
LISTA.insertAfter(10);
LISTA.insertAfter(20);
LISTA.insertAfter(30);
LISTA.insertAfter(40);

console.log("Lista después de insertar nodos:");
LISTA.print();

// Remover el primer nodo
LISTA.removeFirst();
console.log("\nLista después de eliminar el primer nodo:");
LISTA.print();

// Remover el último nodo
LISTA.removeLast();
console.log("\nLista después de eliminar el último nodo:");
LISTA.print();
