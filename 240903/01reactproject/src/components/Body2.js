import React, { useState } from "react";

const Body2 = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChanegeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChageBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChageBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChanegeName} placeholder="이름" />
      </div>
      <div>
        <select onChange={onChangeGender}>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" onChage={onChageBirth} />
      </div>
      <div>
        <textarea onChange={onChageBio} />
      </div>
    </div>
  );
};

export default Body2;
