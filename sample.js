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
    let temp=this.heap[index1];
    this.heap[index1] = this.heap[index2]
    this.heap[index2] = temp
  }

  sort() {
    let sortedArr = [];

    while (this.heap.length > 0) {
      this.swap(0, this.heap.length - 1);
      sortedArr.unshift(this.heap.pop());
      this.heapifyDown(0);
    }
    return sortedArr
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

const heap = new Heap();
heap.insert(10)
heap.insert(60)
heap.insert(40)
heap.insert(20)

console.log(heap.heap,"jjj");
console.log(heap.sort());