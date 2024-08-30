const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const subpageImage = document.querySelector(".subPage .parallaxImage");
// console.log(imageAll, subpageImage);

const totalNum = imageAll.length;
let scrollNum = 0;
let x = 0;
let targetX = 0;
const speed = 0.1;

window.addEventListener("scroll", () => {
  const scrollNum = window.scrollY;

  imageAll.forEach((image, index) => {
    if (index < 4) {
      // 4,5,6번 이미지는 밑에 직접 줬으니까 4 밑으로! 0,1,2,3
      image.style.transform = `translateY(${
        -scrollNum / (2 * (totalNum - index))
      }px)`;
    }
  });
});

window.addEventListener("mousemove", (e) => {
  x = e.pageX - window.innerWidth / 2;
});

const loop = () => {
  targetX += (x - targetX) * speed;

  // imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 70}px)`;
  imageAll[4].style.transform = `scale(1.1) translate(${-targetX / 70}px, ${
    -scrollNum / (2 * totalNum - 4)
  })px`;
  imageAll[5].style.transform = `scale(1.1) translate(${-targetX / 100}px, ${
    -scrollNum / (2 * totalNum - 4)
  })px`;
  subpageImage.style.transform = `scale(1.1) translate(${-targetX / 10}px, ${
    -scrollNum / (2 * totalNum - 4)
  })px`;
  // scale(1.1)로 키워서 양 옆 여백 안 보이게

  window.requestAnimationFrame(loop);
};

loop();
