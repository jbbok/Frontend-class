import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { getFormattedDate, emotionList } from "../util";

const EditorSection = styled.div`
  margin-bottom: 40px;
  & h4 {
    font-size: 18px;
  }
`;

const Textarea = styled.textarea`
  border: none;
  background: #ececec;
  border-radius: 5px;
  padding: 20px;
  font-size: 16px;
  font-family: "Gowun Dodum", sans-serif;
  width: 100%;
  min-height: 200px;
  resize: none;
`;

const Input = styled.input`
  border: none;
  border-radius: 5px;
  background: #ececec;
  padding: 20px;
  font-size: 16px;
  font-family: "Gowun Dodum", sans-serif;
  cursor: pointer;
`;

const Buttongroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Emotiongroup = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2%;
`;

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    date: getFormattedDate(new Date()),
    emotionId: 1,
    content: "",
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(parseInt(initData.date))),
      });
    }
  }, [initData]);

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    });
  };

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };

  const handleSubmit = () => {
    onSubmit(state);
  };

  const handelGoBack = () => {
    navigate(-1); // 바로 직전 페이지로 가겠다
  };

  const handleChangeEmotion = (emotionId) => {
    setState({
      ...state,
      emotionId,
    });
  };

  return (
    <div>
      <EditorSection>
        <h4>오늘의 날짜</h4>
        <div>
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 감정</h4>
        <Emotiongroup>
          {emotionList.map((it) => (
            <EmotionItem
              key={it.id}
              {...it}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === it.id}
            />
          ))}
        </Emotiongroup>
      </EditorSection>
      <EditorSection>
        <h4>오늘의 일기</h4>
        <div>
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </EditorSection>
      <EditorSection>
        <Buttongroup>
          <Button type={""} text={"취소하기"} onClick={handelGoBack} />
          <Button type={"positive"} text={"작성완료"} onClick={handleSubmit} />
        </Buttongroup>
      </EditorSection>
    </div>
  );
};

export default Editor;

// 쨘;
