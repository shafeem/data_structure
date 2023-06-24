class Node {
  constructor() {
    this.wordEnd = false;
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }
  insert(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if(!curr.child[char]){
            curr.child[char] = new Node()
        }
        curr = curr.child[char];
    }
    curr.wordEnd = true;
  }

  search(word){
    let curr = this.root;
    for(let i = 0 ; i < word.length ; i++){
        const char = word[i];
        if(!curr.child[char]){
            return false
        }
        curr = curr.child[char]
    }
    return curr.wordEnd
  }

  startsWith(prefix){
    let curr = this.root;
    for(let i = 0;i < prefix.length;i++){
        const char = prefix[i];
        if(!curr.child[char]){
            return false
        }
        curr = curr.child[char]
    }
    return true
  }
}



class Node{
    constructor(){
        this.wordEnd = false;
        this.children = {}
    }
}

class Trie{
    constructor(){
        this.root = new Node()
    }
    insertion(word){
        let curr = this.root;
        for(let i = 0;i < word.length;i++){
            let char = word[i];
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char];
        }
        curr.wordEnd = true
    }

    search(word){
        let curr = this.root;
        for(let i = 0 ; i < word.length;i++){
            let char = word[i]
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr.wordEnd
    }

    startsWith(word){
        let curr = this.root
        for(let i = 0 ;i< word.length ; i++){
            let char = word[i]
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
}