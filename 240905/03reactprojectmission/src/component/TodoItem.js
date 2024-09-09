import React from "react";
import "./TodoItem.css";
import TodoItem from "./TodoItem";

const todoItem = ({ id, isDone, content, createdDate, onUpdate, onDelete }) => {
  // console.log(id, isDone, content, createdDate);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button>
      </div>
    </div>
  );
};

export default TodoItem;
