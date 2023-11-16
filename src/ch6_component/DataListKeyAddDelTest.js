import React, { useState } from "react";
import { Button } from "antd";

//내장함수
//concat, filter, map : 함수들의 특징
//결론, 새로운 배열을 생성한다
//데이터와 연동해서 생각함.
//리스트 요소 출력할 때 key(pk) 필요 (db index와 유사)
//리액트에서 특정의 데이터를 리스트로 출력시, 인덱스 설정 필요

const DataListKeyAddDelTest = () => {
  const [food, setFood] = useState([
    { id: 1, text: "버블티" },
    { id: 2, text: "샐러드" },
    { id: 3, text: "그릭요거트" },
    { id: 4, text: "에스프레소" },
  ]);

  //id, text관련해서 input 태그 설정
  const [inputText, setInputText] = useState("");
  //기본 id  4개까지 사용했고 그 후에 5부터 사용
  const [nextId, setNextId] = useState(5);

  //리스트 출력하기
  const foodList = food.map((food) => (
    <li key={food.id} onDoubleClick={() => onRemoveText(food.id)}>
      {food.id} : {food.text}
    </li>
  ));

  //데이터 추가
  const onChangeText = (e) => setInputText(e.target.value);

  const onClickText = () => {
    const nextFood = food.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setFood(nextFood);
    setInputText("");
  };

  // 키보드에서 엔터 키 입력시, 클릭 이벤트 호출 연결 확인.
  const onEnterPress = (e) => {
    if (e.key === "Enter") {
      onClickText();
    }
  };

  //데이터 삭제
  const onRemoveText = (id) => {
    const nextFood2 = food.filter((food) => food.id !== id);
    setNextId(nextId - 1);
    setFood(nextFood2);
  };

  return (
    <div>
      <input
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onEnterPress}
      />
      <Button onClick={onClickText}>+</Button>
      <ul>{foodList}</ul>
    </div>
  );
};

export default DataListKeyAddDelTest;
