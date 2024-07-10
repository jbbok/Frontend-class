const pic = document.querySelector(".pic");
// console.log(pic);
const imgs = pic.querySelectorAll("img");
// console.log(imgs);

imgs.forEach((img) => {
  img.addEventListener("click", function () {
    // console.log("click");
    imgs.forEach((sibling) => {
      if (sibling !== img) {
        sibling.classList.remove("active");
      }
    });
    this.classList.add("active");
    const desc = document.querySelector(".desc");

    // 이미지를 찾기 위해 이미지 조건문? 안에 넣어야함
    const contents = desc.querySelectorAll(".content");
    // console.log(contents);

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    const targetId = img.getAttribute("data-alt");
    // console.log(targetId);
    const targerContent = document.getElementById(targetId);
    if (targerContent) {
      targerContent.classList.add("active");
    }
  });
});
