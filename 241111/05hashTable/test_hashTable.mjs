import { HashTable } from "./hashTable.mjs";

let hashTable = new HashTable();

hashTable.set(1, "서강준");
hashTable.set(4, "남주혁");
hashTable.set(20, "안효섭");
hashTable.set(6, "이재익");
hashTable.set(22, "이진욱");
hashTable.set(21, "황희찬");
hashTable.set(5, "박리아");
hashTable.set(10, "문지수");
hashTable.set(9, "김예지");
hashTable.set(8, "정보경");
hashTable.set(14, "박세진");

console.log(`1: ${hashTable.get(1)}`);
hashTable.remove(1);
console.log(`1: ${hashTable.get(1)}`);
console.log(`21: ${hashTable.get(21)}`);
