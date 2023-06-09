// undirected graph

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdjes(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "  -> " + [...this.adjacencyList[vertex]]);
    }
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacencyList of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacencyList);
    }
    delete this.adjacencyList[vertex];
  }

  DFS(startVertex) {
    const visited = new Set();
    const stack = [];
    stack.push(startVertex);

    while (stack.length > 0) {
      const vertex = stack.pop();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
      }
      const neighbour = this.adjacencyList[vertex];

      for (let item of neighbour) {
        if (!visited.has(item)) {
          stack.push(item);
        }
      }
    }
  }

  BFS(startVertex) {
    const visited = new Set();
    const stack = [];
    stack.push(startVertex);

    while (stack.length > 0) {
      const vertex = stack.shift();

      if (!visited.has(vertex)) {
        visited.add(vertex);
        console.log(vertex);
      }
      const neighbour = this.adjacencyList[vertex];
      for (let item of neighbour) {
        if (!visited.has(item)) {
          stack.push(item);
        }
      }
    }
  }
}

const graph = new Graph();
graph.addVertex("a");
graph.addVertex("b");
graph.addVertex("c");
graph.addVertex("d");
graph.addVertex("e");
graph.addVertex("f");

graph.addEdjes("a", "b");
graph.addEdjes("b", "a");
graph.addEdjes("b", "c");
graph.addEdjes("a", "d");
graph.addEdjes("d", "a");
graph.addEdjes("d", "e");
graph.addEdjes("e", "f");

graph.display();
console.log(graph.hasEdge("a", "b"));

// graph.removeVertex('a')
// graph.display()
// graph.DFS("a");
graph.BFS("a");





// //   insert(word) {
// //     let curr = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       let char = word[i];

// //       if (!curr.children[char]) {
// //         curr.children[char] = new Node();
// //       }

// //       curr = curr.children[char];
// //     }
// //     curr.isWord = true;
// //   }



// //   insert(word) {
// //     let current = this.root;
// //     for (let i = 0; i < word.length; i++) {
// //       const char = word[i];
// //       if (!current.children[char]) {
// //         current.children[char] = new Node();
// //       }
// //       current = current.children[char];
// //     }
// //     current.isWord = true;
// //   }


// shortest path finder in graph algorithms