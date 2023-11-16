import React, { useRef, useMemo, useCallback, useState } from "react";
import { Button } from "antd";

const doAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const AverageUseRef = () => {
  const [list, setList] = useState([]);
  //정수로 변환해서 저장 필요
  const [number, setNumber] = useState("");

  //순서2, useRef설정
  const inputElement = useRef(null);

  //함수2 변경 - useRef
  //변경 후
  //의존성 배열 모양 -> []빈 배열이라서, 마운트시 한번만 함수 생성
  const onChange = useCallback((e) => {
    console.log("onChange");
    setNumber(e.target.value);
  }, []);

  //함수3 변경 - useRef
  //변경 후
  const onInsert = useCallback(
    (e) => {
      console.log("onInsert");
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");

      //순서3, useRef적용
      inputElement.current.focus();
    },
    [number, list]
  );

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  //임의로 결과값을 만들어서, 이 값이 변경될때만 연산하기
  // const avgResult = useMemo(콜백함수, 의존성 배열)
  // list배열에 숫자 추가되면서 그때, 연산이 수행됨
  // 전에는 값을 입력하는 순간에도 연산 수행
  const avgResult = useMemo(() => doAverage(list), [list]);

  return (
    <div>
      <h1>AverageUseCallback</h1>

      {/* 순서2, useRef적용 */}
      <input
        value={number}
        onChange={onChange}
        ref={inputElement}
        onKeyPress={onEnterPress}
      ></input>
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

export default AverageUseRef;
