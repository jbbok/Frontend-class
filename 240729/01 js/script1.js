//  사용자에게 화씨온도를 받아서 콘솔창에서 해당 온도를 섭씨온도로 변환했을 때 값을 출력해주세요!

//  섭씨온도 = (화씨온도 -32) / 1.8

// prompt("화씨온도를 입력하세요!", "ex) 45"); // 입력할 때 (질문)
// const fah = prompt("화씨온도를 입력하세요!", "ex) 45"); // 변수 선언
const fah = parseFloat(prompt("화씨온도를 입력하세요!", "ex) 45")); // 소수점 있을 수도 있으니까...

console.log(fah);
console.log(typeof fah);

// const cel = (fah - 32) / 1.8;
const cel = ((fah - 32) / 1.8).toFixed(2); // 소수점 숫자 갯수 제한 2자리까지만~

// console.log(cel);

// alert() //경고하다, 알리다 // 답을 내줌 (prompt랑 짝꿍!)
alert(`화씨온도 ${fah}도는 섭씨온도 ${cel}도 입니다!`);
