// let numSet1 = new Set();

// console.log(numSet1);

// numSet1.add("one").add("two");

// console.log(numSet1);

// console.log(numSet2);

// let numSet3 = new Set([1, 2, 1, 3, 1, 5]);

// console.log(numSet3);

const languages = new Set(["JS", "TS", "HTML", "CSS"]);

for (let language of languages.values()) {
  console.log(language);
}
