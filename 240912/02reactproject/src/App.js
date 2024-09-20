import React, { useReducer, useRef, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.styles";
import styled from "styled-components";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { type } from "@testing-library/user-event/dist/type";

const Wrapper = styled.div`
  padding: 20px;
  height: 100vh;
  background: var(--primary-color);
`;

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      return [action.data, ...state];
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    }
    case "DELETE": {
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
    }
    default: {
      return state;
    }
  }
  return state;
};

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    content: "mock1",
    emotionId: 1,
  },

  {
    id: "mock2",
    date: new Date().getTime() - 2,
    content: "mock2",
    emotionId: 2,
  },

  {
    id: "mock3",
    date: new Date().getTime() - 3,
    content: "mock3",
    emotionId: 3,
  },
];

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    dispatch({
      type: "INIT", // 초기값})
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []);

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content: content, // content 라고만 써도 됨
        emotionId: emotionId, // value 값이 같기 때문에!
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다!</div>;
  } else {
    return (
      <>
        <GlobalStyles />
        <DiaryStateContext.Provider value={data}>
          <DiaryDispatchContext.Provider
            value={{ onCreate, onDelete, onUpdate }}
          >
            <Wrapper>
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/new" element={<New />} />

                <Route path="/diary/:id" element={<Diary />} />

                <Route path="/edit/:id" element={<Edit />} />
              </Routes>
            </Wrapper>
          </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
      </>
    );
  }
};

export default App;
