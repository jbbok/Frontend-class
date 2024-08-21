const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  // console.log("keyup");

  const numberValue = this.value;
  // console.log(numberValue);

  const trimNumber = numberValue.replace(/-/g, "");
  // console.log(trimNumber); // 숫자만 잘라서 가져옴

  // const regexp = /^[0]\d{9,10}[0-9]$/.test(trimNumber);
  // const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  // const regexp = /^0[0-9]{9,10}$/.test(trimNumber);
  // 패턴만들기 / [반드시 0에서 시작!][0에서 9까지의 숫자] / 하나의 패턴으로 인식!
  // {11자리 수 번호, 10자리 수 번호 -> 2자리 받았음 -> 8~9자리 번호를 받아야함}

  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요!";
  else warningMessage.innerText = "";
});
