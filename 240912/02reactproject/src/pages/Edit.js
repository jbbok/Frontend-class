import React, { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import Header from "../component/Header";
import Button from "../component/Button";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(params);
  const data = useDiary(id);
  // console.log(data);

  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요!")) {
      onDelete(id);
      navigate("/");
    }
  };

  const goBack = () => {
    navigate(-1);
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
      </div>
    );
  }
};

export default Edit;
