const content =
  "Hi!🐾 I'm Bok, \n Front-End Developer. \n Welcome to My World 💙";

const text = document.querySelector(".text");
// console.log(text);

let i = 0;

const typing = () => {
  let txt = content[i++];
  text.innerHTML += txt === "\n" ? "<br/>" : txt;

  // if (i > content.length) {
  //   text.textContent = "";
  //   i = 0;
  // };

  // setInterval(typing, 250);

  if (i < content.length) {
    let txt = content[1++];
    text.innerHTML += txt === "\n" ? "<br/>" : txt;
    setTimeout(typing, 250);
  } else {
    cursor.style.animation = "none";
    cursor.style.dispaly = "none";
  }
};

typing();