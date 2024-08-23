// 기존 callback 함수의 단점을 최소화하고자 나온 첫번째 대안! Promise

// promise = 약속

// callback 함수 중 가운데 어떤 요소라도 1개만 에러가 발생되는 경우, 연결되어있는 다른 callback 함수 실행에도 영향을 미친다!

// 그런데, 만약 callback 함수가 많이 연결되어있는 경우에는 어떤 callback 함수에서 에러가 발생되었는지 서칭 && 디버깅 하기가 매우 힘들다!

// 생성자함수 혹은 클래스를 통해서 탄생된 프로토타입

const likePizza = true;


// Producing code = 제작코드 영역 이라고 부름
// resolve = 해결하다 / reject = 문제가 생기다
// 참인 실행문이 첫번째, 에러인 실행문이 두번째 순서로!! 순서중요!!!!! ★
const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다.");
  else reject("피자를 주문하지 않습니다.");
});


// consuming code = 실행코드 영역이라고 부름
pizza.then(result => console.log(result))
.catch((err) => console.log(err))
.finally(() => console.log("완료"));