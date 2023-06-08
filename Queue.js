// Using Object

// class Queue{
//     constructor(){
//         this.item = {}
//         this.front = 0;
//         this.rear = 0;
//     }
//     enQueue(element){
//         this.item[this.rear] = element;
//         this.rear++;
//     }
//     deQueue(){
//         let element = this.item[this.front];
//         delete this.item[this.front]
//         this.front++;
//         return element
//     }
//     isEmpty(){
//         return this.rear - this.front == 0;
//     }
//     peek(){
//         return this.item[this.front]
//     }
//     size(){
//         return this.rear - this.front
//     }
//     print(){
//         return console.log(this.item);
//     }
// }

// const queue =new Queue();
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// queue.enQueue(40)

// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// queue.deQueue()
// queue.deQueue()
// queue.deQueue()

// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// Using Array

// class Queue {
//   constructor() {
//     this.item = [];
//   }
//   enQueue(element) {
//     this.item.push(element);
//   }
//   deQueue() {
//     return this.item.shift();
//   }
//   isEmpty(){
//     return this.item.length == 0;
//   }
//   peek(){
//     if(this.isEmpty()){
//         return null
//     }
//     return this.item[0]
//   }
//   size(){
//     return this.item.length
//   }
//   print(){
//     return console.log(this.item.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// queue.enQueue(10)
// queue.enQueue(20)
// queue.enQueue(30)
// queue.enQueue(40)

// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// queue.deQueue()
// queue.deQueue()
// queue.deQueue()

// console.log(queue.isEmpty());
// console.log(queue.size());
// console.log(queue.print());

// class Node{
//     constructor(element){
//         this.value = element
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.rear = null
//         this.front = null;
//         this.size = 0
//     }
//     enQueue(element){
//         const node = new Node(element)
//         if(this.isEmpty()){
//             this.front = node;
//             this.rear = node;
//         }else{
//             this.rear.next = node;
//             this.rear = node;
//         }
//         this.size++;
//     }
//     deQueue(){
//         if(this.isEmpty()){
//             return null
//         }
//         let element = this.front.value
//         this.front = this.front.next;

//         if(this.front == null){
//             this.rear = null
//         }
//         this.size--;
//         return element
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.front.value
//     }
//     getSize(){
//         return this.size
//     }
//     print(){
//         if(this.isEmpty()){
//             return null
//         }
//         let curr = this.front;
//         let value = ''

//         while(curr){
//             value += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(value);
//     }
// }

// Circular Queue

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = -1;
    this.front = -1;
  }
  isFull() {
    return this.currentLength === this.capacity;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  enQueue(element) {
    if (!this.isFull) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.currentLength += 1;
      if(this.front == -1){
        this.front = this.rear
      }
    }
  }
  deQueue(){
    if(this.isEmpty()){
        return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front +1) % this.capacity
    this.currentLength -=1
    if(this.isEmpty()){
        this.front = -1;
        this.rear = -1;
    }
    return item;
  }
}

const queue = new CircularQueue()