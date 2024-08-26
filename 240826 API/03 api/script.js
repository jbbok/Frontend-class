// geolocation : 사용자의 위치를 파악하기 위한 목적 API

// getCurrentPosition(successCB, errorCB, Options)

const getLocation = document.querySelector("#getLocation");

const showPosition = (position) => {
  // position은 인스턴스 객체임! coords 안에 있는 위도와 경도
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude} , 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err.message);
};

getLocation.addEventListener("click", () => {
  // console.log("click");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);

    const options = {
      enableHightAccuracy: true,
      maximumAge: 0,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다!");
  }
});
