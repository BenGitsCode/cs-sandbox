// Create simple constructor function with a head pointing to null

function LinkedList(){
    this.head = null;
}

// Use prototype object to extend the LinkedList function

LinkedList.prototype.push = function(val){
    var node = {
    value: val,
    next: null
    }
    else{
    current = this.head;
    while(current.next){
    current = current.next;
    }
    curent.next = node;
    }
  }

