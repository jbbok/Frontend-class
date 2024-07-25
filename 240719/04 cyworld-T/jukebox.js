const songs = document.querySelectorAll(".albumTable_song");
// console.log(songs);

// songs.forEach((song) => {
//   console.log(song);
// });

for (let song of songs) {
  // console.log(song);
  const play = song.querySelector(".fa-play");
  const pause = song.querySelector(".fa-pause");
  play.addEventListener("click", (e) => {
    // console.log("play!");
    // console.log(e.target);
    // console.log(e.target.closest("td"));
    // console.log(e.target.closest("td").querySelector("audio"));
    // 부모요소에서 형제요소를 찾아오는 과정!
    e.target.closest("td").querySelector("audio").play();
  });
  pause.addEventListener("click", (e) => {
    e.target.closest("td").querySelector("audio").pause();
  });
}

// e객체 > target || currentTarget
// currentTarget : 이벤트 핸들러가 부착되어진 요소를 의미!
// target : 실제 이벤트가 발생된 요소를 의미!
