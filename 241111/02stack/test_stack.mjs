import { Stack } from "./stack.mjs";

let stack = new Stack();

console.log("===== 첫번째 출력 =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
// pop을 할 때마다 데이터 요소를 삭제해라!

console.log("===== 두번째 출력 =====");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
// 특정 요소를 참조하는 역할
// peek한 데이터 값을 참조해줘! 그래서 0번째 데려왔음!
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(stack.pop());
