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
