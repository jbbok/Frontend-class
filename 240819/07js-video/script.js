const playButton = document.querySelector(".play-pause");
// console.log(playButton);
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
// console.log(volumeBar);
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");

const play = () => {
  playButton.innerText = "II";
  video.play();
};

const pause = () => {
  playButton.innerText = " ▶ ";
  video.pause();
};

const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  // console.log(e);
  video.volume = e.target.value;
};

const formatting = (time) => {
  // console.log(time);
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  // console.log(current, duration);

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration); // 영상 총 재생 시간
};

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  // 현재값 / 전체 기준값 * 100
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  // console.log(progressBarWidth);
  const newPosition = (currentTime / duration) * progressBarWidth;
  progressPointer.style.left = `${newPosition}px`;
};

const videoPoint = (e) => {
  console.log(e.pageX);
  console.log(player.offsetLeft);
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});

// 1. offsetLeft : 브라우저 창을 기준으로 좌우상하 측면에서 얼만큼 떨어졌는가를 알 수 있게 해주는 속성
// 2. pageX : 현재 브라우저 내 x 좌표값을 찾아오도록 해주는 속성
