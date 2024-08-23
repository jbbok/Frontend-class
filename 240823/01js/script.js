// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   console.log("B");
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// A B C

// --------------------
// 멀티스레드 => 비동기방식인 것처럼

// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   setTimeout(()=> console.log("B"),2000); // 물리적으로 시간을 지연시킴
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// A C B

// --------------------

const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(()=> {
    callback();
    console.log("B");
  }, 2000); 
};

// 종결이 되지 않은 B에서 콜백함수로 다시 A를 불러옴 (나중에 들어왔지만 먼저 나감)

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);