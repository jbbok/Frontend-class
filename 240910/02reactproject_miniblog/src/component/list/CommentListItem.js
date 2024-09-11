import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 8px 16px;
  border: 1px solid pink;
  border-radius: 8px;
  cursor: pointer;
  background: #fff;
  transition: background 0.3s;
  &:hover {
    background: pink;
  }
`;

const CommentListItem = ({ comment }) => {
  // console.log(props);
  return <Wrapper>{comment}</Wrapper>;
};

export default CommentListItem;
