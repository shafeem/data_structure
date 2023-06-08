// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }
//   Hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }
//   set(key, value) {
//     const index = this.Hash(key);
//     this.table[index] = value;
//   }
//   get(key) {
//     const index = this.Hash(key);
//     return this.table[index];
//   }
//   delete(key) {
//     const index = this.Hash(key);
//     this.table[index] = undefined;
//   }
//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//   }
// }
// const table = new HashTable(20);

// with collition implementations

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  Hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    const index = this.Hash(key);
    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKey = bucket.find((item) => item[0] === key);

      if (sameKey) {
        sameKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.Hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKey = bucket.find((item) => item[0] === key);
      if (sameKey) {
        return sameKey[1];
      }
    }
    return undefined
  }

  remove(key){
    let index = this.Hash(key);
    let bucket = this.table[index];

    if(bucket){
        let sameKey = bucket.find((item) => item[0] === key);
        if(sameKey){
            bucket.splice(bucket.indexOf(sameKey),1)
        }
    }
  }

  display(){
    for(let i = 0;i<this.table.length ;i++){
        if(this.table[i]){
            console.log(i,this.table[i]);
        }
    }
  }
}

const table = new HashTable(20);
table.set('badu','sha');
table.set('sha','feem');
table.display();
console.log(table.get('badu'));
table.remove('sha');
table.display()
