class Heap{
    constructor(){
        this.heap = []
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    swap(index1,index2){
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp 
    }
    heapifyUp(index){

        let currindex = index
        
        while(currindex > 0){
            
            let parentIndex= Math.floor((currindex-1)/2)
            if(this.heap[parentIndex] < this.heap[currindex]){
                this.swap(currindex,parentIndex)
                currindex = parentIndex
                
            }else{
                break;
            }
        }
    }
    sort(){
        let sortedArr  = [ ]

        while(this.heap.length>0){

            this.swap(0,this.heap.length-1);
            sortedArr.unshift(this.heap.pop())
            this.heapifyDown(0)
            
        }
        return sortedArr
    }
    leftChildIndex(index){
        return index*2+1
    }
    RightChildIndex(index){
        return index*2+2
    }
    heapifyDown(index){
        let currentIndex = index
        while(true){
            let leftChildIndex  = this.leftChildIndex(currentIndex) 
            let rightChildIndex = this.RightChildIndex(currentIndex)
            console.log(rightChildIndex,leftChildIndex);
            let largeElementIndex = currentIndex
            if(this.heap.length>leftChildIndex && this.heap[largeElementIndex]<this.heap[leftChildIndex]){
                largeElementIndex = leftChildIndex
            }
            if(this.heap.length>rightChildIndex && this.heap[largeElementIndex]<this.heap[rightChildIndex]){
                largeElementIndex = rightChildIndex
            }
            if(largeElementIndex === currentIndex){
                break;
            }
            console.log(largeElementIndex,'lllll');
            this.swap(currentIndex,largeElementIndex)
            currentIndex = largeElementIndex
        }
        
    }
}


const heap = new Heap()
heap.insert(50)
heap.insert(30)
heap.insert(70)
heap.insert(50)
heap.insert(30)
heap.insert(0)

console.log(heap.heap);
console.log(heap.sort());