// https://reqres.in/api/products/10
// 1. 위 URL 주소를 참고해서 json 데이터를 XMLHttp Request를 활용 후 웹 브라우저 화면에 상품정보를 춫력하세요!
// 2. UI는 자유

const url = "https://reqres.in/api/products/10";
const result = document.querySelector("#result");
// console.log(result);

const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    const product = JSON.parse(xhr.responseText);

    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>생산년도 : ${product.data.year}</p>
    <p>상품색상 : ${product.data.color}</p>
    `;
  }
}