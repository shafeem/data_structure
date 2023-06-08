function BubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}





function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let NumberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > NumberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = NumberToInsert;
  }
}






function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }else{
      right.push(arr[i]);
    }
  }
  return [...QuickSort(left),pivot,...QuickSort(right)]
}





function MergeSort(arr){

  if(arr.length < 2){
    return arr
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0,mid);
  const RightArr = arr.slice(mid);

  return merge(MergeSort(leftArr),MergeSort(RightArr));
}

function merge(LeftArr,RightArr){
  const SortedArr = [];
  while(LeftArr.length && RightArr.length){
    if(LeftArr[0] <= RightArr[0]){
      SortedArr.push(LeftArr.shift());
    }else{
      SortedArr.push(RightArr.shift());
    }
  }
  return [...SortedArr,...LeftArr,...RightArr]
}






function SelectionSort(arr){
  for(let i = 0;i<arr.length -1;i++){
    for(let j = i+1;j<arr.length;j++){
      if(arr[i]>arr[j]){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

let arr = [-2,4,5,8,7,6,-5,-7];
console.log(SelectionSort(arr), "Insertion Sort");
console.log(arr,'at last');