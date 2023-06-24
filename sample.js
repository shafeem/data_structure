class Heap {
  constructor() {
    this.heap = [];
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }

  rightChild(index) {
    return index * 2 + 2;
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

  heapifyUp(index) {
    let curr = index;

    while (curr > 0) {
      let parent = this.parent(curr);
      if (this.heap[curr] > this.heap[parent]) {
        this.swap(curr, parent);
        curr = parent;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    // this.heap[index1],
    //   (this.heap[index2] = [this.heap[index2]),
    //   this.heap[index1]];
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  sort() {
    let sortedArr = [];

    while (this.heap.length > 0) {
      this.swap(0, this.heap.length - 1);
      sortedArr.unshift(this.heap.pop());
      this.heapifyDown(0);
    }
    return sortedArr;
  }

  heapifyDown(index) {
    let length = this.heap.length;
    let curr = index;

    while (true) {
      let left = this.leftChild(curr);
      let right = this.rightChild(curr);
      let largeElementIndex = curr;

      if (left < length && this.heap[left] > this.heap[largeElementIndex]) {
        largeElementIndex = left;
      }
      if (right < length && this.heap[right] > this.heap[largeElementIndex]) {
        largeElementIndex = right;
      }
      if (largeElementIndex === curr) {
        break;
      }
      this.swap(largeElementIndex, curr);
      curr = largeElementIndex;
    }
  }
}

// const heap = new Heap();
// heap.insert(10)
// heap.insert(60)
// heap.insert(40)
// heap.insert(20)

// console.log(heap.heap,"jjj");
// console.log(heap.sort());

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(node, this.root);
    }
  }

  insertNode(node, root) {
    if (root.value > node.value) {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insert(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insert(root.right, node);
      }
    }
  }

  search(value, root) {
    if (root) {
      if (root.value === value) {
        return true;
      } else if (root.value > value) {
        this.search(value, root.left);
      } else if (root.value < value) {
        this.search(value, root.right);
      }
    } else {
      return false;
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    let curr = this.root;
    let stack = [];
    stack.push(curr);

    while (stack.length > 0) {
      let first = stack.shift();
      console.log(first.value);

      if (first.left) {
        stack.push(first.left);
      }
      if (first.right) {
        stack.push(first.right);
      }
    }
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root === null) {
      return false;
    }
    if (root.value > value) {
      root.left = this.deleteNode(root.left, value);
    } else if (root.value < value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root) {
      if (root.value > value) {
        this.left = this.deleteNode(root.left, value);
      } else if (root.value < value) {
        this.right = this.deleteNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.right) {
          return root.left;
        } else if (!root.left) {
          return root.right;
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right, value);
      }
    }
    return root;
  }

  min(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  levelOrder() {
    let queue = [];
    queue.push(this.root);

    while (queue.length) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  search(root, value) {
    if(root){
      if (root.value == value) {
        return true;
      }
      if (root.value > value) {
        this.search(root.left, value);
      } else if (root.value < value) {
        this.search(root.right, value);
      }
    }
    return false;
  }
}


class Graph{
  constructor(){
    this.adjacencyList = {};
  }

  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList = new Set()
    }
  }

  addEdjes(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }

    this.adjacencyList[vertex1].add(vertex2)
    this.adjacencyList[vertex2].add(vertex1)
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + '->' + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdjes(vertex1,vertex2){
    return(
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    )
  }

  removeEdjes(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2)
    this.adjacencyList[vertex2].delete(vertex1)
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return 
    }
    for(let adjacencyList of this.adjacencyList[vertex]){
      this.removeEdjes(vertex, adjacencyList)
    }
    delete this.adjacencyList[vertex]
  }

  DFS(startVertex){
    let visited = new Set();
    let stack = []
    stack.push(startVertex)

    while(stack.length > 0){
      let vertex = stack.pop()
      if(!visited.has(vertex)){
        console.log(vertex);
        visited.add(vertex)
      }
      const neighbour = this.adjacencyList[vertex]
      for(let item of neighbour){
        if(!visited.has(item)){
          stack.push(item)
        }
      }
    }
  }

  BFS(startVertex){
    let visited = new Set();
    let stack = [startVertex];

    while(stack.length > 0){
      let vertex = stack.shift();

      if(!visited.has(vertex)){
        console.log(vertex);
        visited.add(vertex)
      }
      let neighbour = this.adjacencyList[vertex]
      for(let item of neighbour){
        if(!visited.has(item)){
          stack.push(item)
        }
      }
    }
  }
}


class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vertex){
    if(!this.adjacencyList[vertex]){
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdjes(vertex1,vertex2){
    if(!this.adjacencyList[vertex1]){
      this.addVertex(vertex1)
    }
    if(!this.adjacencyList[vertex2]){
      this.addVertex(vertex2)
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1)
  }

  display(){
    for(let vertex in this.adjacencyList){
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdjes(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      return (
        this.adjacencyList[vertex1].has(vertex2 ) &&
        this.adjacencyList[vertex2].has(vertex1)
      )
    }
  }

  removeEdjes(vertex1,vertex2){
    if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
      this.adjacencyList[vertex1].delete(vertex2)
      this.adjacencyList[vertex2].delete(vertex1)
    }
  }

  removeVertex(vertex){
    if(!this.adjacencyList[vertex]){
      return false
    }
    for(let adjacencyList of this.adjacencyList[vertex]){
      this.removeEdjes(vertex, adjacencyList)
    }
    delete this.adjacencyList[vertex]
  }

  DFS(startVertex){
    let visited = new Set()
    let stack = [startVertex]

    while(stack.length > 0){
      let vertex = stack.pop()

      if(!visited.has(vertex)){
        console.log(vertex);
        visited.add(vertex)
      }
      let neighbour = this.adjacencyList[vertex]
      for(let item of neighbour){
        if(!visited.has(item)){
          stack.push(item)
        }
      }
    }
  }

  BFS(startVertex){
    let visited = new Set();
    let stack = [startVertex]
    while(stack.length > 0){
      let vertex = stack.shift()

      if(!visited.has(vertex)){
        console.log(vertex);
        visited.add(vertex)
      }
      let neighbour = this.adjacencyList[vertex];
      for(let item of neighbour){
        if(!visited.has(item)){
          stack.push(item)
        }
      }
    }
  }
}

class BinaryMaxHeap{
  constructor(){
    this.heap = []
  }
  getParent(index){
    return Math.floor((index - 1)/2)
  }
  rightChild(index){
    return index * 2 + 2
  }
  leftChild(index){
    return index * 2 + 1
  }
  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
  }
  heapifyUp(index){
    let curr = index;

    while(curr.length > 0){
      let parent = this.getParent(curr)
      if(this.heap[parent] < this.heap[curr]){
        this.swap(parent,curr)
        curr = parent
      }else{
        break;
      }
    }
  }
  swap(index1,index2){
    let temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }
  
}