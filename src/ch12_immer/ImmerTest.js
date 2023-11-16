import React, { useCallback, useRef, useState } from "react";
import { Button } from "antd";
import { produce } from "immer";

const ImmerTest = () => {
  //순서2 , useRef, 설정1
  //const inputElement = useRef(null);

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
