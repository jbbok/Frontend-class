import React from "react";
import styled from "styled-components";

const ButtonItem = styled.button`
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-family: "Gowun Dodum", sans-serif;
  cursor: pointer;
  ${({ type }) =>
    type === "positive"
      ? `background: #54c3c9; color: #fff;`
      : type === "negative"
      ? `background: #f57a81; color: #fff;`
      : `background: #ccc; color: #000;`}
`;

const Button = ({ text, type, onClick }) => {
  // console.log(title, type);
  return (
    <div>
      <ButtonItem type={type} onClick={onClick}>
        {text || "Button"}
      </ButtonItem>
    </div>
  );
};

export default Button;
