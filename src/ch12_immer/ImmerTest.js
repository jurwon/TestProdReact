import React, { useCallback, useRef, useState } from "react";
import { Button } from "antd";
import { produce } from "immer";

// 배열 내장함수(concat,map,filter, splice, 등) -> 기존배열을 유지하면서, 새롭게 생성
// spread 연산자를 이용해서, 기존 내용의 사본을 만들어서 작업함.
// 문제 발생 ) 배열의 깊이가 깊어짐
//spread 연산자. ...array ) 사용하면 구현은 가능하지만 작업이 어려움, 복잡도 올라감

//immer 사용해서 해결
//준비물 : yarn add immer
//이름, 나이, 입력란에서 추가, 삭제 예제 이용

const ImmerTest = () => {
  //순서2 , useRef, 설정1
  const inputElement = useRef(null);

  // id , 임의로 useRef로 만들어 사용하기.
  const nextId = useRef(1);

  // form , 객체의 기본값, name : "", age : ""
  const [form, setForm] = useState({
    name: "",
    age: "",
  });

  // sample data
  const [data, setData] = useState({
    array: [],
    dummyObject: null,
  });

  // 이벤트 핸들러
  const onChange = useCallback(
    (e) => {
      // input name 태그의 name 속성과, value 가져오기
      // input age 태그의 name 속성과, value 가져오기
      // 비구조화 할당.
      // const name = e.target.name
      // const value = e.target.value
      const { name, value } = e.target;

      //방법1)
      // 기존 spread 연산자를 이용한 , 불변성 유지 하면서, 업데이트 하기.
      // setForm({
      //   ...form,
      //   [name]: [value],
      // });

      //방법 2)
      //immer라이브러리로 수정
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  // form 을 등록하는 이벤트 핸들러
  const onSubmit = useCallback(
    (e) => {
      //기본 submit 의 기능을 막기 위한 함수.
      e.preventDefault();
      // info data
      const info = {
        // useRef 의 값 이용하기.
        id: nextId.current,
        name: form.name,
        age: form.age,
      };

      //기존 방법 1)
      // sample data의 array 에 새항목 추가.
      // setData({
      //   // 기존 spread 연산자를 이용한 , 불변성 유지 하면서, 업데이트 하기.
      //   ...data,
      //   array: data.array.concat(info),
      // });

      //방법2)
      //immer 사용
      setData(
        produce(data, (draft) => {
          draft.array.push(info);
        })
      );

      // form data 초기화, 입력란 비우기.
      setForm({
        name: "",
        age: "",
      });

      // nextId 값 1 증가 시키기.
      nextId.current += 1;
      // useCallback 의 의존성 배열 , data, form.name, form.age 변경시, 새함수 생성
    },
    [data, form.name, form.age]
  );

  // 삭제하는 함수
  const onRemove = useCallback(
    // 1 매개변수 : 콜백함수
    (id) => {
      //기본 방법 1)
      // setData({
      //   // 기존 spread 연산자를 이용한 , 불변성 유지 하면서, 업데이트 하기.
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id),
      // });

      //immer사용 방법 2)
      setData(
        produce(data, (draft) => {
          draft.array.splice(
            draft.array.findIndex((info) => info.id === id),
            1
          );
        })
      );
    },
    // 2 매개변수
    // 의존성 배열
    [data]
  );

  // input 2개, 버튼 하나, 리스트 목록
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          placeholder="이름 입력해주세요"
          value={form.name}
          onChange={onChange}
        />
        <input
          name="age"
          placeholder="나이 입력해주세요"
          value={form.age}
          onChange={onChange}
        />
        {/* <button type="submit">등록하기</button> */}
        <Button htmlType="submit">등록하기</Button>
      </form>
      {/* 리스트 출력하기.  */}
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              이름 : {info.name} , 나이 : {info.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImmerTest;
