import React, { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

//axios
//"https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=87af28a1123a4fcc9c869c0b81bd243c"
import axios from "axios";

//모델 구조
// {
//   "status": "ok",
//   "totalResults": 70,
//   "articles": [
//       {
//           "source": {
//               "id": null,
//               "name": "YouTube"
//           },
//           "author": null,
//           "title": "[경제 톡톡톡]김범수 카카오 창업자 “모든 사업 원점 재검토” - 채널A 뉴스",
//           "description": "[경제 톡톡톡]김범수 카카오 창업자 “모든 사업 원점 재검토”카카오 창업자인 김범수 미래 이니셔티브 센터장이 오늘 \"모든 사업을 원점에서 재검토하겠다\"고 밝혔습니다. 김 센터장은 \"초심으로 돌아가 최선의 노력을 다하겠다\"고 밝히며 \"\"올해 말에 가시적인 방안을 내고 내년에는 본격적...",
//           "url": "https://www.youtube.com/watch?v=BHXc8OtRJlk",
//           "urlToImage": "https://i.ytimg.com/vi/BHXc8OtRJlk/maxresdefault.jpg",
//           "publishedAt": "2023-11-13T04:33:46Z",
//           "content": null
//       },

//key : articles, 값 : [{기사객체},{기사객체},{기사객체},...]
//가지고 올 data
//1) title 2) description 3) url 4) urlToImage

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

const ApiTestKoreaNews = () => {
  //REST API서버에서 임시로 받아온 Data, state로 확인
  const [data, setData] = useState(null);

  //이벤트
  const onClick = async () => {
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
      <ApiBtn onClick={onClick}>한국 News 가져오기</ApiBtn>

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

export default ApiTestKoreaNews;
