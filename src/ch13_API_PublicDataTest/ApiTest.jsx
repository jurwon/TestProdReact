import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

//axios
//'https://jsonplaceholder.typicode.com/todos/1'
import axios from "axios";

const ApiContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid gray;

  textarea {
    width: 100%;
    margin-top: 10px;
  }

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const ApiBtn = styled(Button)`
  margin-bottom: 20px;
`;

const ApiTest = () => {
  //REST API서버에서 임시로 받아온 Data, state로 확인
  const [data, setData] = useState(null);

  //이벤트

  //방법1
  // const onClick = () => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos/1")
  //     //위의 get함수로 data받는 것 성공했다면 then 실행됨
  //     .then((response) => {
  //       setData(response.data);
  //     });
  // };

  //방법2
  //async, await방법 (비동기)
  const onClick = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  //newsapi가져오기
  //async, await방법 (비동기)
  const onClickNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2023-10-14&sortBy=popularity&apiKey=87af28a1123a4fcc9c869c0b81bd243c"
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickKoraNews = async () => {
    try {
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c"
      );

      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>ApiTest</h1>
      <ApiBtn onClick={onClick}>Todo api 가져오기</ApiBtn>
      <ApiBtn onClick={onClickNews}>Apple news가져오기</ApiBtn>
      <ApiBtn onClick={onClickKoraNews}>한국 news가져오기</ApiBtn>
      <ApiContent>
        {data && (
          <textarea
            rows={50}
            // stringify함수의 출력할 data
            // 2번째 인자 : null이면 문자열
            // 3번째 인자 :
            value={JSON.stringify(data, null, 2)}
            readOnly={true}
          ></textarea>
        )}
      </ApiContent>
    </div>
  );
};

export default ApiTest;
