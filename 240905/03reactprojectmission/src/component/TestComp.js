// import React, { useReducer } from "react";
import { useReducer } from "react";

const TestComp = () => {
  // const [count, setCount] = useState();

  // const onIncrease = () => {
  //   setCount(count + 1);
  // };

  // const onDecrease = () => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>0</bold>
      </div>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default TestComp;
