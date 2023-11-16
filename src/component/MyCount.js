import { Button } from "antd";
import React, { useState } from "react";
// useState(0) : 초깃값 (number = 0)
// 첫번째 : 상태값 , 두번째 : 세터 함수

const MyCount = () => {
  const [number, setNumber] = useState(0);

  const onClickUp = () => {
    setNumber(number + 1);
  };
  const onClickDown = () => {
    setNumber(number - 1);
  };

  return (
    <div className="count">
      <h1>Count</h1>
      <div className="count2">
        <h1>{number}</h1>
        {/* <h1>다른 숫자 : {anotherNumber}</h1> */}

        <Button onClick={onClickUp}>+</Button>

        <Button onClick={onClickDown}>-</Button>
      </div>
    </div>
  );
};

export default MyCount;
