//  1. html, css 구현
// 2.js-별모양 -> 폰트어썸, querySeletorAll, 별을 클릭하면 컬러가 변경!, 어떤 별을 클릭하던지 간에 무조건 별 안의 색상은 제거!, 조건문 => 선택된 별의 개수에 따라서 안에 들어가는 이미지 및 문장이 변경, innerText

const stars = document.querySelectorAll(".fa-star");
// console.log(stars);
const print = document.querySelector(".print");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    // console.log("click");
    stars.forEach((s, i) => {
      // s.classList.remove("active");
      // if (i <= index) {
      //   s.classList.add("active");
      // }
      if (i <= index) {
        s.classList.add("active");
      } else {
        s.classList.remove("active");
      }
    });

    let message = "";
    let imageURL = "";

    switch (index) {
      case 0:
        message = "별로에요!";
        imageURL = "./img/star-lv1.png";
        break;
      case 1:
        message = "보통이에요!";
        imageURL = "./img/star-lv2.png";

        break;
      case 2:
        message = "그냥그래요!";
        imageURL = "./img/star-lv3.png";

        break;
      case 3:
        message = "맘에들어요!";
        imageURL = "./img/star-lv4.png";

        break;
      case 4:
        message = "아주좋아요!";
        imageURL = "./img/star-lv5.png";

        break;
    }

    print.innerHTML = `<img src="${imageURL}">${message}`;
  });
});
