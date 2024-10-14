import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 4px;
`;

const App = () => {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const id = useSelector((state) => state.id);
  const pw = useSelector((state) => state.pw);

  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
    // setCount(count + 1);
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
    // setCount(count + 1);
  };

  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "David", pw: "1234" } });
  };

  return (
    <Wrapper>
      {/* <h1>0</h1> */}
      <h1>{count}</h1>
      <ButtonGroup>
        <button onClick={increase}>증가</button>
        <button onClick={decrease}>감소</button>
      </ButtonGroup>
      <h1>
        {id},{pw}
      </h1>
      <button onClick={login}>로그인</button>
      {/* <Box /> // 자체적으로 state값 받아올 수 있다는 걸 보기 위한 용도였음*/}
    </Wrapper>
  );
};

export default App;
