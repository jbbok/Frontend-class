// 1. 배열을 명확하게 이해하고 사용할 수 있다
// 2. 반복문을 적재적소에 쓸 수 있다
// 3. 내가 원하는 기능을 구현하고 함수를 쓸 수 있다

// window 객체 안에는 시간 관련 내장 함수(3개) 존재!
// setInterval
// clearInterval
// setTimeout / 특정 시간 이후부터 작동시키고자 할 때

// 콜백함수 callback / JS에서 자주 만날 콜백함수 1번 예제
// let count = 0; // 선언
// const cbFunc = () => {
//   console.log(count);
//   // if(++count > 4) // count를 먼저 증가시키고 4랑 비교할거임
//   if (++count > 4) clearInterval();
//   // if(count++ > 4) // count랑 4랑 먼저 비교하고 증가시킬거임
//   if (count++ > 4) clearInterval();
// };

// // cbFunc(); // 호출

// // setInterval(cbFunc, 300);

// const timer = setInterval(cbFunc, 300);

// 콜백함수 callback / JS에서 자주 만날 콜백함수 2번 예제
// // map함수는 배열 안에 있는 각각의 개별 아이템을 찾아와서 어떤 연산작업을 한 이후 다시 해당 아이템을 모아서 새로운 배열로 생성! / 반환할 의무가 있음 ??
// const arr = [10, 20, 30];

// // const newArr = arr.map((item, index) => item + 5);
// const newArr = arr.map((item, index) => (item + 5) * index);
// console.log(newArr);

// 중괄호로 쓰면 문자로 인식하기 때문에 못 씀

// 콜백함수 callback / JS에서 자주 만날 콜백함수 3번 예제
// setTimeout(function () {
//   console.log("click");
// }, 300);

// -------------

// this 객체! = 카멜레온
// "보통 일반적으로" 현재 실행되고 있는 함수의 주체, 객체등의 아이템

// setTimeout(function () {
//   console.log(this);
// }, 300);

// window에 탑재된 시간 내장 함수에서 this를 사용하면, 무조건 window를 찾아옴(예외없음)
// 하지만 일반적인 콜백함수 내에서 주체가 되고 있는 아이템을 찾아오고 싶을 때에는 직접 해당 인자를 언급하거나 경우에 따라서 this 객체를 사용한다

// 콜백함수 callback / JS에서 자주 만날 콜백함수 4번 예제
// const arr2 = [1, 2, 3, 4, 5];
// arr2.forEach((item) => {
//   console.log(this);
//   // console.log(item);
// });

// 콜백함수 callback / JS에서 자주 만날 콜백함수 5번 예제
// this => 함수의 형태, 종류에 따라서 지칭하는 대상이 달라짐

// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });

// document.body.innerHTML += `<button id="a">Click</button>`;
// document.querySelector("#a").addEventListener("click", () => {
//   console.log(this);
// });

// 콜백함수 callback / JS에서 자주 만날 콜백함수 6번 예제
// 객체 안에 있는 메서드 함수의 경우, this는 function의 경우, 해당 메서드 함수의 부모격인 객체를 찾아오지만, 만약 화살표 함수를 사용한다면, window 객체를 찾아온다!
// const obj = {
//   vals: [1, 2, 3],
//   logValues: function () {
//     console.log(this);
//   },
// };

// obj.logValues(); // 함수의 키를 가지고 있어서 함수처럼 쓸 수 있음 => method

// 객체 안에 메서드 형식으로 정의한 함수는 외부에 별도로 존재하는 함수의 콜백함수로 사용할 시, 기존 객체와의 관계성이 제거된다!
// const arr3 = [4, 5, 6];
// arr3.forEach(obj.logValues);

// 객체를 통해서 탄생된 메서드 함수를 콜백함수로 사용 시, 해당 요소의 부모를 찾아올 수 있도록 하는 방법!

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     // console.log(this); // -> 얘를 변수처리할거임
//     const self = this;
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// const callback = obj1.func();
// setTimeout(callback, 1000); //<-부모요소 불러왔음

// 위 코드보다 효율적으로 this 객체를 사용하는 방법!!

// const obj1 = {
//   name: "obj1",
//   func: function () {
//     console.log(this, name);
//   },
// };

// setTimeout(obj1.func.bind(obj1), 1000); //바인딩부모요소와 묶어버림

// 콜백함수 => 콜백지옥 ㅠㅠ
// setTimeout(
//   (name) => {
//     let coffeeList = name;
//     console.log(coffeeList);
//     setTimeout(
//       (name) => {
//         coffeeList += `, ${name}`;
//         console.log(coffeeList);
//         setTimeout(
//           (name) => {
//             coffeeList += `, ${name}`;
//             console.log(coffeeList);
//             setTimeout(
//               (name) => {
//                 coffeeList += `, ${name}`;
//                 console.log(coffeeList);
//               },
//               500,
//               "카페모카"
//             );
//           },
//           500,
//           "카페라떼"
//         );
//       },
//       500,
//       "아메리카노"
//     );
//   },
//   500,
//   "에스프레소" // 인자값 3개까지 가능
// );

// 콜백지옥에서 천국행 가는 티켓 3개
// 1번 티켓
// let coffeeList = "";

// const addLatte = (name) => {
//   coffeeList = `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addLatte, 500, "카페라떼");
// };

// const addMocha = (name) => {
//   coffeeList = `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addMocha, 500, "카페모카");
// };

// const addAmericano = (name) => {
//   coffeeList = `, ${name}`;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };

// const addEspress = (name) => {
//   coffeeList = name;
//   console.log(coffeeList);
//   setTimeout(addAmericano, 500, "아메리카노");
// };

// setTimeout(addEspress, 500, "에스프레소");

// 2번 티켓 / Promise() => 무조건 대문자! 클래스로 선언되었을 때

// new Promise(); //Class로 생성된 프로토타입 함수 = 붕어빵 틀

// let likePizza = true;

// const pizza = new Promise((resolve, reject) => {
//   if (likePizza) {
//     resolve("피자를 주문합니다!");
//   } else {
//     reject("피자를 주문하지 않습니다!");
//   }
// });

// pizza.then((result) => {
//   console.log(result);
// });

// const obj = new Promise((resolve) => {});
// obj.then;
// 아래처럼 쓸 수 있음
// new Promise((resolve) => {}).then;

new Promise((resolve) => {
  setTimeout(() => {
    const name = "에스프레소";
    console.log(name);
    resolve(name);
  }, 500);
})
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페모카`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  })
  .then((prevName) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const name = `${prevName} 카페라떼`;
        console.log(name);
        resolve(name);
      }, 500);
    });
  });
