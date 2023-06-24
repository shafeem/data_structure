class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(node,this.root)
        }
    }
    isEmpty(){
        return this.root === null
    }

    insertNode(node,root){
        if(root.value > node.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right= node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    inOrder(root){
        if(!root.left){
            return root.value
        }else{
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(10)
tree.insert(20)
tree.insert(30)
tree.insert(50)

tree.inOrder(tree.root)