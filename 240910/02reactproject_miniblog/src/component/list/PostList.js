import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  difplay: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const PostList = ({ post, onClickItem }) => {
  return (
    <Wrapper>
      <div>리액트에서 컴포넌트 렌더링하기</div>
      <div>리액트 컴포넌트 개념 소개</div>
      <div>리액트와 자바스크립트의 상관관계</div>
      <div>안녕하세요! Davidㅇ입니다.</div>
    </Wrapper>
  );
};

export default PostList;
