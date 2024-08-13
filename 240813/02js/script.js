// 객체생성 => 선언

// const book1 = {
//   title: "자바스크립트",
//   level: "normal",
//   study: "done",
// };

// 객체 안에 담겨있는 데이터를 찾아!!!
// 프로퍼티(속성)에 접근하는 2가지 방법
// 1) 온점표기법
// 2) 대괄호표기법

// console.log(book1.title);
// console.log(book1["level"]);

// book1.study = "ready";

// console.log(book1);

// book1.master = "David";

// console.log(book1);

// JS 어딘가에 Class 생성자함수를 활용해서 이미 누군가에게 객체를 만들어놓았다는 뜻

// class 생성자함수를 통해서 이미 생성되어진 요소를 가져와서 사용할 때엔 반드시 new라는 예약어 + prototype함수를 활용해야 함!

// prototype을 통해서 생성된 값을 인스턴스 객체

// 최초의 선언한 변수의 값으로 할당이 된다!

// let book2 = new Object();
// console.log(typeof book2);

// book2.title = "타입스크립트";
// book2.author = "마라탕";
// book2.bestSeller = "Yes";

// console.log(book2);

// let book3 = new Array();
// console.log(typeof book3);

// delete book2.bestSeller;

// console.log(book2);

// 객체중첩
const student = {
  name: "서강준",
  age: 20,
  favorite: "game",
  score: {
    history: 100,
    science: 90,
    average: function () {
      return (this.history + this.science) / 2;
    },
    like() {
      alert(`꿔바로우를 좋아해요!`);
    },
  },
};

// function // 화살표 함수는 직계요소를 가져오지 못함!
// this는 바로 이전에 실행된 이벤트 대상. 부모 요소를 가져옴. 그러니까 써!
// 함수는 객체의 자식 / 배열도 객체에서! => 객체 지향 언어

console.log(student.score.history);
console.log(student.score.average());

// 객체 안에 property 일부로서 탄생된 함수는 method라고 칭한다!

student.score.like();

const window = {
  document: {
    html: {
      head: {
        meta: "a",
        link: "./",
      },
      body: {
        h1: "안녕하세요",
        p: "반갑습니다",
      },
    },
  },
  alert() {

  }
  prompt() {

  }
  scrollY: {
    
  }
};
