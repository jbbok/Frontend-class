import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 😺🍀</h3>
      <h1>{new Date().toDateString()}</h1>
      {/* 인스턴스 객체는 못 가져오니까 문자열로 바꿔줘야 함! */}
    </div>
  );
};

export default Header;
