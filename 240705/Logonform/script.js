const tokenButton = document.querySelector("#token_button");
const token = document.querySelector("#token");
const tokenTimer = document.querySelector("#token_timer");
const tokenConfirmButton = document.querySelector("#token_timer_confirmBtn");
const signupButton = document.querySelector("#signup_button");

const changePhone1 = () => {
  const phone1 = document.querySelector("#phone1").value;
  if (phone1.length === 3) {
    document.querySelector("#phone2").focus();
  }
};
const changePhone2 = () => {
  const phone2 = document.querySelector("#phone2").value;
  if (phone2.length === 4) {
    document.querySelector("#phone3").focus();
  }
};
const changePhone3 = () => {
  const phone1 = document.querySelector("#phone1").value;
  const phone2 = document.querySelector("#phone2").value;
  const phone3 = document.querySelector("#phone3").value;
  if (phone1.length === 3 && phone2.length === 4 && phone3.length === 4) {
    tokenButton.style =
      "background-color: #fff; color: #0068FF; cursor: pointer";
    tokenButton.removeAttribute("disabled");
  }
};

let interval;

const getTokenTimer = () => {
  let timer = 180;
  let interval = setInterval(() => {
    if (timer >= 0) {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
      document.querySelector("#token_timer").innerText =
        minutes + ":" + String(seconds).padStart(2, "0");
      timer -= 1;
    } else {
      tokenNumber.innerText = "000000";
      tokenButton.style = "";
      tokenButton.setAttribute("disabled", "true");

      tokenTimer.innerText = "3:00";
      tokenConfirmButton.style = "";
      tokenConfirmButton.setAttribute("disabled", "true");

      clearInterval(interval);
    }
  }, 1000);
};

tokenButton.addEventListener("click", (e) => {
  e.preventDefault();
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.querySelector("#token").innerText = token;

  tokenConfirmButton.style =
    "background-color: #0068FF; color: #fff; cursor: pointer";
  tokenConfirmButton.removeAttribute("disabled");
  getTokenTimer();
});

tokenConfirmButton.addEventListener("click", function (e) {
  e.preventDefault();
  clearInterval(interval);
  this.style = "background-color: #fff";
  this.setAttribute("disabled", "true");
  this.innerText = "인증완료";
  alert("인증이 완료되었습니다 :p");

  signupButton.style =
    "background-color: #fff; color: #0068ff; border: 1px solid #0068ff; cursor: pointer";
  signupButton.removeAttribute("disabled");
});

signupButton.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("click");
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value;
  const password = document.querySelector("#pw1").value;
  const password2 = document.querySelector("#pw2").value;
  const location = document.querySelector("#location").value;
  const genderwoman = document.querySelector("#gender_woman").checked;
  const genderman = document.querySelector("#gender_man").checked;

  // 단락회로평가 => true / false => 기본값 true || false

  let isValid = true;

  if (email.includes("@") === false) {
    document.querySelector("#error_email").innerText =
      "이메일을 정상적으로 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_email").innerText = "";
  }

  if (name === "") {
    document.querySelector("#error_name").innerText = "이름을 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_name").innerText = "";
  }

  if (password === "") {
    document.querySelector("#error_pw1").innerText = "비밀번호를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_pw1").innerText = "";
  }

  if (password2 === "") {
    document.querySelector("#error_pw2").innerText = "비밀번호를 입력해주세요!";
    isValid = false;
  } else {
    document.querySelector("#error_pw2").innerText = "";
  }

  if (password !== password2) {
    document.querySelector("#error_pw1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_pw2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (
    location !== "서울" &&
    location !== "경기" &&
    location !== "인천" &&
    location !== "대구" &&
    location !== "마산" &&
    location !== "부산"
  ) {
    document.querySelector("#error_location").innerText = "지역을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("#error_location").innerText = "";
  }

  if (genderman === false && genderwoman === false) {
    document.querySelector("#error_gender").innerText = "성별을 선택해주세요";
    isValid = false;
  } else {
    document.querySelector("error_gender").innerText = "";
  }

  if (isValid === true) {
    alert("회원가입을 축하합니다 :D");
  }
});
