// Header Nav
window.addEventListener("scroll", () => {
  // console.log("scroll");
  let scroll = window.scrollY;
  // console.log(window.scrollY);
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");
  console.log(gototop);

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");
// console.log(trigger);
// const gnbA = document.querySelectorAll(".gnb a");
const gnb = document.querySelector(".gnb");
// const gnbA = gnb.querySelectorAll("a");
const gnbLinks = gnb.querySelectorAll("a");

// 전역변수, 지역변수 역할

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});
