const $txt = document.querySelector(".txt-title");
const content = "Hello";
let contentIndex = 0;

let typing = function () {
  $txt.innerHTML += content[contentIndex];
  contentIndex++;
  if (content[contentIndex] === "\n") {
    $txt.innerHTML += "<br />";
    contentIndex++;
  }
  if (contentIndex > content.length) {
    $txt.textContent = "";
    contentIndex = 0;
  }
};

// 0.5초간격으로 typing 함수 실행
setInterval(typing, 500);

// moveToTop
let moveToTop = function () {
  document.body.scrollIntoView({ behavior: "smooth" });
};

const slideContainerArrow = document.querySelector(".slide_container_arrow"); // 슬라이드 영역
const slideArrows = document.querySelectorAll(".slide_container_btn"); // 슬라이드 버튼
// const slidePagers = document.querySelectorAll(".slide_pager span"); // 슬라이드 페이저
const slideImg = document.querySelector(".slide_img"); // 슬라이드 이미지

// 배열
const pics = ["slide1.png", "slide2.png", "slide3.png"];
let i = 0;
let slideInterval;
let isTransitioning = false;

slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
slidePagers[0].classList.add("active");

// 실제 이미지 및 페이저 값을 변경시켜주는 실행 함수
const updateSlide = (i) => {
  slidePagers.forEach((item) => {
    item.classList.remove("active");
  });
  slideImg.style.backgroundImage = `url(./img/${pics[i]})`;
  slidePagers[i].classList.add("active");
};

// 자동으로 슬라이드 이미지가 변경되도록 해주는 함수
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    i = (i + 1) % pics.length;
    updateSlide(i);
  }, 4000);
};

// 자동슬라이드 기능을 정지시켜주는 함수
const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// 자동슬라이드 재시작을 실행시켜주는 함수
const resetSlideShow = () => {
  stopSlideShow();
  isTransitioning = false;
  startSlideShow();
};

// 화살표 클릭 및 이미지 변경요청 함수
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (isTransitioning) return;
    isTransitioning = true;

    stopSlideShow();
    if (e.target.id === "leftArrow") {
      i = (i - 1 + pics.length) % pics.length;
    } else if (e.target.id === "rightArrow") {
      i = (i + 1) % pics.length;
    }

    updateSlide(i);

    setTimeout(() => {
      isTransitioning = false;
      startSlideShow();
    }, 500);
  });
});
