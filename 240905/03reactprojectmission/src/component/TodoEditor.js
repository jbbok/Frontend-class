import React, { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate, onSubmit, inputRef }) => {
  // console.log(onCreate);
  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    // console.log(e);
    if (e.keyCode === 13) onSubmit();
  };

  const onsubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 💬</h4>
      <div className="aditor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="새로운 Todo..."
        />
        <button onClick={onsubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
