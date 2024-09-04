import React, { useState } from "react";

const Body3 = () => {
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [birth, setBirth] = useState("");
  // const [bio, setBio] = useState("");

  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  // const onChanegeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeGender = (e) => {
  //   setGender(e.target.value);
  // };
  // const onChageBirth = (e) => {
  //   setBirth(e.target.value);
  // };
  // const onChageBio = (e) => {
  //   setBio(e.target.value);
  // };

  const handleOnChange = (e) => {
    console.log("현재 수정 대상 : ", e.target.name);
    console.log("수정값 : ", e.target.value);
    setState({
      ...state,
      // 이벤트가 발생이 되면 state의 초기값을 그대로 보낼 것임. 전개구문연산자로
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          value={state.name}
          onChange={handleOnChange}
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          value={state.birth}
          type="date"
          onChage={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
};

export default Body3;
