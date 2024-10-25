class List<T> {
  constructor(public list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    // 값을 제거하는 역할
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}
const numberList = new List([1, 2, 3]);

console.log(numberList);

// class StringList {
//   constructor(public list: string[]) {}

//   push(data: string) {
//     this.list.push(data);
//   }

//   pop() {
//     // 값을 제거하는 역할
//     return this.list.pop();
//   }

//   print() {
//     console.log(this.list);
//   }
// }
// const stringList = new StringList([1, 2, 3]);

// console.log(numberList);
