import React from "react";

let initialState = {
  count: 0,
  id: "",
  pw: "",
};

const Reducer = (state = initialState, action) => {
  // return <div>Reducer</div>;
  // console.log(action);

  // 1번) if문
  // if (action.type === "INCREMENT") {
  //   return { ...state, count: state.count + 1 };
  //   //이 return은 if문에 대한 값을 실행 하는 것
  // }
  // return { ...state }; //얘가 스토어에 보내는 값!

  // 2번) switch문
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw };
    default:
      return { ...state };
  }
};

export default Reducer;
