import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import Editor from "../component/Editor";
import useDiary from "../hooks/useDiary";
import { setPageTitle } from "../util";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(params);
  const data = useDiary(id);
  // console.log(data);
  useEffect(() => {
    setPageTitle(`${id}번째 일기 수정하기`);
  }, []);

  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/");
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, content, emotionId } = data;
      onUpdate(id, date, content, emotionId);
      navigate("/");
    }
  };

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text={"< 뒤로 가기"} onClick={goBack} />}
          title={"일기 수정하기"}
          rightChild={
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={onClickDelete}
            />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
