import React, { useState, useEffect, useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
// {}를 써서 변수의 값으로 가져오기!
import Header from "../component/Header";
import Button from "../component/Button";
// export default 형태는 이렇게 가져와도 됨
import DiaryList from "../component/DiaryList";
import { getMonthRangeByDate, setPageTitle } from "../util";

const Home = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      // console.log(beginTimeStamp, endTimeStamp);
      setFilteredData(
        data.filter(
          (it) => beginTimeStamp <= it.date && it.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  // console.log(data);

  useEffect(() => {
    setPageTitle("안뇽 뽀 일기장");
  }, []);

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        title={headerTitle}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
