// immer 모듈 가져오기
import { produce } from "immer";

import React from "react";

const TestZone = () => {
  const array = {
    class: {
      deep404: {
        inside: 3,
        sampleArray: [2, 3, 4],
      },
      middle: 2,
    },
    end: 5,
  };

  const sampleData = [{ id: 1, name: "sjw", age: "22" }];

  // 기본 문법 살펴보기.
  // produce ( 원본 데이터, 변경할 업데이트 함수)
  const nextState = produce(array, (draft) => {
    // 변경하고 싶은 값 변경하기.
    draft.class.deep404.inside = 30000;
  });

  //데이터 추가
  // 기존의 draft.class안의 데이터가 모두 없어지고 name으로 치환됨
  const nextState2 = produce(array, (draft) => {
    draft.class = { name: "sjw" };
  });

  //데이터 추가2
  const nextState3 = produce(sampleData, (draft) => {
    draft.push({ id: 2, name: "dodo", age: "2" });
  });

  //데이터 제거1
  // id가 1인 data 없어져야하는데 그대로 유지되고있음
  // 다시 검토 필요
  const nextState4 = produce(sampleData, (draft) => {
    draft.filter((item) => item.id !== 1);
  });

  //splice함수 소개
  //splice(start,deletecount,newItem,newItem,...)
  //splice(1,1) : 인덱스 1부터, 1개 요소 삭제하는 내장 함수
  //splice(1) : 인덱스 1부터 배열 변경

  //데이터 제거 2 : 제거한 원소를 가지는 배열 출력
  const nextState5 = produce(sampleData, (draft) => {
    //id가 1인 요소 찾아서 배열에서 삭제.
    draft.splice(
      draft.findIndex((t) => t.id === 1),
      1
    );
  });

  console.log("불변성 유지 하면서 업데이트하기");
  console.log("nextState.class.deep404.inside 의 값: ");
  console.log(nextState);
  console.log(nextState2);
  console.log(nextState3);
  console.log(nextState4);
  console.log(nextState5);

  return (
    <div>
      <h1>TestZone</h1>
      <h3>결과 뷰: {nextState.class.deep404.inside}</h3>
    </div>
  );
};

export default TestZone;
