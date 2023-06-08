// with array

class Stack{
    constructor(){
        this.item = [];
    }
    push(element){
        this.item.push(element)
    }
    pop(){
       return this.item.pop()
    }
    peek(){
        return this.item[this.item.length -1]
    }
    isEmpty(){
        return this.item.length ==0
    }
    size(){
        return this.item.length
    }
    print(){
        return console.log(this.item.toString());
    }
}

// with likedList

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  push(value) {
    let node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let popElement = this.top.value;
    this.top = this.top.next;
    this.size--;
    return popElement;
  }
  isEmpty() {
    return this.size === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.value;
  }
  getSize() {
    return this.size;
  }
  print() {
    let value = "";
    let curr = this.top;
    while (curr) {
      value += `${curr.value} `;
      curr = curr.next;
    }
    console.log(value);
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
console.log(stack.getSize());
stack.push(40);
stack.push(30);
stack.push(20);
stack.push(10);
stack.print();
console.log(stack.getSize());
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
stack.print();
