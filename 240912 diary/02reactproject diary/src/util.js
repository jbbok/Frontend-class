import emotion1 from "./emotion/emotion1.png";
import emotion2 from "./emotion/emotion2.png";
import emotion3 from "./emotion/emotion3.png";
import emotion4 from "./emotion/emotion4.png";
import emotion5 from "./emotion/emotion5.png";

export const getEmotionImgById = (emotionId) => {
  const targetEmotionId = String(emotionId);
  switch (targetEmotionId) {
    case "1":
      return emotion1;
    case "2":
      return emotion2;
    case "3":
      return emotion3;
    case "4":
      return emotion4;
    case "5":
      return emotion5;
    default:
      return null;
  }
};

export const getFormattedDate = (targetDate) => {
  const year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

export const emotionList = [
  {
    id: 1,
    name: "완전좋음",
    img: getEmotionImgById(1),
  },
  {
    id: 2,
    name: "좋음",
    img: getEmotionImgById(2),
  },
  {
    id: 3,
    name: "그럭저럭",
    img: getEmotionImgById(3),
  },
  {
    id: 4,
    name: "나쁨",
    img: getEmotionImgById(4),
  },
  {
    id: 5,
    name: "완전나쁨",
    img: getEmotionImgById(5),
  },
];

export const getMonthRangeByDate = (date) => {
  const beginTimeStamp = new Date(
    date.getFullYear(), //년
    date.getMonth(), //월
    1, //일
    0, //시
    0, //분
    0 //초
  ).getTime();
  const endTimeStamp = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  return { beginTimeStamp, endTimeStamp };
};

export const setPageTitle = (title) => {
  const titleElement = document.getElementsByTagName("title")[0];
  //[0] : 배열의 형태로 값을 찾아오고 있기 때문에! 몇 번째인지 지칭해줘야 함!
  titleElement.innerText = title;
};
