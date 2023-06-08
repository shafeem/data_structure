class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
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
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, node) {
    if (root.value > node.value) {
        if(root.left === null){
            root.left = node
        }else{
            this.insertNode(root.left, node)
        }
    }else{
        if(root.right == null){
            root.right = node
        }else{
            this.insertNode(root.right, node)
        }
    }
  }

  search(root,value){
    if(root){
        if(root.value == value){
            return true
        }else if(root.value > value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }else{
        return false
    }
  }

  preOrder(root){
    if(root){
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }
  }

  inOrder(root){
    if(root){
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }
  }

  postOrder(root){
    if(root){
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value);
    }
  }

  levelOrder(){
    const queue = [];
    queue.push(this.root)

    while(queue.length){
        let curr = queue.shift();
        console.log(curr.value);
        if(curr.left){
            queue.push(curr.left)
        }
        if(curr.right){
            queue.push(curr.right)
        }
    }
  }

  min(root){
    if(!root.left){
        return root.value
    }else{
        return this.min(root.left)
    }
  }

  max(root){
    if(!root.right){
        return root.value
    }else{
        return this.max(root.right)
    }
  }

  delete(value){
    this.root = this.deleteNode(this.root,value)
  }

  deleteNode(root, value){
    if(root === null){
        return root
    }
    if(root.value > value){
        root.left = this.deleteNode(root.left,value)
    }else if(root.value < value){
        root.right = this.deleteNode(root.right,value)
    }else{
        if(!root.left && !root.right){
            return null
        }
        if(!root.left){
            return root.right
        }else if(!root.right){
            return root.left
        }
        root.value = this.min(root.right);
        root.right = this.deleteNode(root.right,root.value);
    }
    return root
  }
}

const binary = new BinarySearchTree();

console.log(binary.isEmpty());
// binary.insert(10)
// binary.insert(20)
// binary.insert(40)
// binary.insert(50)
// binary.insert(5)

binary.insert(10)
binary.insert(5)
binary.insert(15)
binary.insert(3)
binary.insert(7)


// console.log(10,binary.search(binary.root,10));
// console.log(50,binary.search(binary.root,50));
// console.log(100,binary.search(binary.root,100));
// console.log(1,binary.search(binary.root,1));

// binary.preOrder(binary.root)
// binary.inOrder(binary.root)
binary.postOrder(binary.root)
// binary.levelOrder()
// console.log(binary.min(binary.root));
// console.log(binary.max(binary.root));
// binary.levelOrder()
// binary.delete(10)
// binary.levelOrder()
