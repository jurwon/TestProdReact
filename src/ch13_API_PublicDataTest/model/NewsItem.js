//key : articles, 값 : [{기사객체},{기사객체},{기사객체},...]
//가지고 올 data
//1) title 2) description 3) url 4) urlToImage
import React from "react";
import styled from "styled-components";

//css 작업 대상
//1) image 2) content
const NewsItemCss = styled.div`
  display: flex;
  padding: 20px;
  border: 1px solid gray;

  /* 이미지, thumbnail */
  .thumbnail {
    margin-right: 1rem;

    img {
      display: block;
      width: 300px;
      height: 200px;

      /* 해당 사이즈에 비율 맞춰 이미지 크기 조정 */
      object-fit: cover;
    }
  }

  .contents {
    /* margin: 0 auto; */

    a {
      color: #557c55;
      text-decoration: none;
    }

    p {
      margin: 0 auto;
      line-height: 1.5;
      margin-top: 0.5rem;
      /* 브라우저 너비에 따라 자동으로 줄바꿈 */
      white-space: normal;
    }
  }

  /*  & :현재 요소
   &+& :형제 연산자, 요소의 이웃, 같은 요소를 나열시 */
  & + & {
    margin-top: 3rem;
  }
`;

//props로 부모에서(NewsList) article보냄
//article : 기사 하나 통째로 넘김
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <div>
      <NewsItemCss>
        {/* 조건부 랜더링으로 출력 */}
        {urlToImage && (
          <div className="thumbnail">
            {/* rel="noopener noreferrer" : 새창으로 열었을 때 원본링크, 개인정보 부분 막아줌 */}
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumbnail" />
            </a>
          </div>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </NewsItemCss>
    </div>
  );
};

export default NewsItem;
