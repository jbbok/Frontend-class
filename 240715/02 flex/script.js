// Header Nav
window.addEventListener("scroll", () => {
  // console.log("scroll");
  let scroll = window.scrollY;
  // console.log(window.scrollY);
  const header = document.querySelector("header");

  if (scroll > 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: false,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
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
