import React, { useState } from "react";
import "./TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
  // console.log(todo);
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  return (
    <div className="TodoList">
      <h4>Todo List 💛</h4>
      <input onchne className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {/* {todo.map((it) => (
          // <div>{it.content}</div>
          <TodoItem {...it} />
        ))} */}
        {getSearchResult().map(() => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
