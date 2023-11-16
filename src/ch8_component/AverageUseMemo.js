// 예)
// array = [1,2,3,4,5]
// array.reduce((a,b) => a+b,0)
// 의 결과값은 -> 15
// a : 누산기,(누적된값)
// a : 0 , b : 1 => 1
// a : 1 , b : 2 => 3
// a : 3 , b : 3 => 6
// a : 6 , b : 4 => 10
// a : 10 , b : 5 => 15

import React, { useMemo, useState } from "react";
import { Button } from "antd";

const doAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseMemo = () => {
  const [list, setList] = useState([]);
  //정수로 변환해서 저장 필요
  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  //임의로 결과값을 만들어서, 이 값이 변경될때만 연산하기
  // const avgResult = useMemo(콜백함수, 의존성 배열)
  // list배열에 숫자 추가되면서 그때, 연산이 수행됨
  // 전에는 값을 입력하는 순간에도 연산 수행
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <h1>AverageUseMemo</h1>
      <input value={number} onChange={onChange}></input>
      <Button onClick={onInsert}>등록하기</Button>

      <br />
      {/* 리액트 리스트 출력시, key 반드시 설정 */}
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <br />
      {/* useMemo사용 전 */}
      {/* <div>평균값 : {doAverage(list)}</div> */}

      {/* useMemo 사용 후 */}
      <div>평균값 : {avgResult}</div>
    </div>
  );
};

export default AverageUseMemo;
