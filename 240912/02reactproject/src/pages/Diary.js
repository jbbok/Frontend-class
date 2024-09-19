import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import Viewer from "../component/Viewer";
import { getFormattedDate } from "../util";

const Diary = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const data = useDiary(id);
  console.log(data);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    const goBack = () => {
      navigate(-1);
    };

    const goEdit = () => {
      navigate(`/edit/${id}`);
    };

    const { date, emotionId, content } = data; // 객체
    console.log(data);
    console.log(date, emotionId);
    const title = `${getFormattedDate(new Date(parseInt(date)))} 기록`;
    console.log(title);
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          title={title}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer />
      </div>
    );
  }
};

export default Diary;
