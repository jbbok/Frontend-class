const orderButton = document.querySelector("#order");
// console.log(orderButton);
const orderInfo = document.querySelector(".orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  console.log(newH);
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");
  srcNode.value =
    "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/da9e7bb9-a664-4019-960b-89c65d6315f4/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-myEZB1jL.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});
