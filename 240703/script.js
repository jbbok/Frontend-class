const btns = document.querySelector(".controls");
const prevBtn = btns.querySelector(".prev");
const nextBtn = btns.querySelector(".next");
// console.log(btns, prevBtn, nextBtn);

const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
// console.log(slide[0]);

const slideCount = slide.length;
// console.log(slideCount);
const slideWidth = 200;
const slideMargin = 30;

// const currentIdx = 0;
let currentIdx = 0;

// 복제한 5개의 li Node를 왼쪽으로 이동시키기 위한 함수(1)
const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  // console.log(newSlideCount);
  const newWidth = `${
    (slideWidth + slideMargin) * newSlideCount - slideMargin
  }px`;
  slides.style.width = newWidth;
};

// 복제한 5개의 li Node를 왼쪽으로 이동시키기 위한 함수(2)
const setInitialPos = () => {
  const initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
};

// ★ li Node를 복제하기 위한 함수 ★
// (화살표함수) 함수를 선언한다
const makeClone = () => {
  // slideCount; i++) 증감연산자
  for (let i = 0; i < slideCount; i++) {
    // .cloneNode(true) / .cloneNode(false) 2가지 있음
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }
  // for (let i = slideCount - 1; = 슬라이드 끝이 어딜지 모르니 전체에서 -1 /
  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(() => {
    slides.classList.add("animated");
  }, 100);
};

// 함수를 실행한다
makeClone();

// 버튼 클릭을 통해서 실제 슬라이드를 출력시켜주는 함수
const moveSlide = (num) => {
  slides.style.left = `${-num * (slideWidth + slideMargin)}px`;
  currentIdx = num;
  // currentIdx, slideCount 얘네 둘이 겹져지는 순간
  // console.log(currentIdx, slideCount);
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(() => {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(() => {
      slides.classList.add("animated");
    }, 600);
  }
};

// 버튼 클릭 이벤트 함수
nextBtn.addEventListener("click", () => {
  // console.log("clisk right");
  moveSlide(currentIdx + 1);
});

prevBtn.addEventListener("click", () => {
  // console.log("clisk left");
  moveSlide(currentIdx - 1);
});

// 자동슬라이드 기능

// undefined : 값이 정의되지 않았다!
let timer = undefined;

const autoSlide = () => {
  if (timer === undefined) {
    timer = setInterval(() => {
      moveSlide(currentIdx + 1);
    }, 3000);
  }
};

autoSlide();

// 자동슬라이드 및 정지 기능 함수
const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

slides.addEventListener("mouseenter", () => {
  stopSlide();
});

slides.addEventListener("mouseleave", () => {
  autoSlide();
});

// slides.addEventListener("mouseover", () => {
//   stopSlide();
// });

// slides.addEventListener("mouseout", () => {
//   autoSlide();
// });

btns.addEventListener("mouseover", () => {
  stopSlide();
});

btns.addEventListener("mouseout", () => {
  autoSlide();
});
