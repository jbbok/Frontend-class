// let bag = new Map();

// bag.set("color", "red");

// console.log(bag);

let myCup = new Map([
  ["color", "white"],
  ["material", "ceramic"],
  ["capcity", "300ml"],
]);

console.log(myCup);

// myCup.set("type", "mini");
// myCup.set("purpose", "daily");

myCup.set("type", "mini").set("purpose", "daily");

console.log(myCup);

// 메서드 체이닝!!

console.log(myCup.get("color"));
console.log(myCup.size);
console.log(myCup.has("color"));
// 키가 존재하면 true, 존재하지 않으면 false

console.log(myCup.delete("type"));
// delete() : 특정 키 값만 삭제, 제거 함
console.log(myCup);

// console.log(myCup.clear());
// // clear() : 모든 값을 삭제, 제거 함
// console.log(myCup);

console.log(myCup.keys());
// 키 값을 가져옴
console.log(myCup.values());
// 키에 매칭되어지는 value 값을 가져옴
console.log(myCup.entries());
// 키와 매칭되는 value 값을 같이 가져옴

// --------------------------
// iterator

for (let key of myCup.keys()) {
  console.log(key);
}

for (let key of myCup.entries()) {
  console.log(key);
}
