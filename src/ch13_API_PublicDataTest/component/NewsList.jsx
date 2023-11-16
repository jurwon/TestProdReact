import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import NewsItem from "../model/NewsItem";
import PublicItem from "../model/PublicItem";
import PublicItem2 from "../model/PublicItem2";

const NewsListCss = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  //data 받는중이면 true, 다 받았으면 false
  const [loading, setLoading] = useState(null);

  //상태변수 newsAPI : 0 , 부산먹거리 : 1 , 도보여행 : 2
  const [dataType, setDataType] = useState(0);

  useEffect(() => {
    const resultData = async () => {
      setLoading(true);
      try {
        //뉴스 api
        const query = category === "all" ? "" : `&category=${category}`;

        console.log(query);

        switch (query) {
          case "":
            //전체 기사 조회
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr&apiKey=010327a111f64954acf4bcd1a9ddc06a`
            );
            setArticles(response.data.articles);
            setDataType(0);

            break;
          case "&category=business":
            // 뉴스 API 주소 business 주제
            const response_business = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_business.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;
          case "&category=entertainment":
            // 뉴스 API 주소 entertainment 주제
            const response_entertainment = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_entertainment.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;
          case "&category=health":
            // 뉴스 API 주소 health 주제
            const response_health = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_health.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;
          case "&category=science":
            // 뉴스 API 주소 science 주제
            const response_science = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_science.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;
          case "&category=sports":
            // 뉴스 API 주소 sports 주제
            const response_sports = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_sports.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;
          case "&category=technology":
            // 뉴스 API 주소 technology 주제
            const response_technology = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b7adb4f936494b3bac62f446ab7686cb`
            );
            setArticles(response_technology.data.articles);
            // 상태변수, 타입 지정.
            setDataType(0);
            break;

          case "&category=busanFood":
            //부산 테마먹거리
            const response2 = await axios.get(
              `https://apis.data.go.kr/6260000/FoodService/getFoodKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&numOfRows=100&pageNo=1&resultType=json`
            );
            setArticles(response2.data.getFoodKr.item);
            setDataType(1);
            break;

          case "&category=busanWalking":
            //도보 여행
            const response3 = await axios.get(
              `https://apis.data.go.kr/6260000/WalkingService/getWalkingKr?serviceKey=ALRX9GpugtvHxcIO%2FiPg1vXIQKi0E6Kk1ns4imt8BLTgdvSlH%2FAKv%2BA1GcGUQgzuzqM3Uv1ZGgpG5erOTDcYRQ%3D%3D&pageNo=1&numOfRows=100&resultType=json`
            );
            setArticles(response3.data.getWalkingKr.item);
            setDataType(2);
            break;

          default:
            alert("카테고리를 선택해주세요.");
        }
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    }; // resultData async 함수 블록 끝부분,
    // 비동기 함수 만들어서, 사용하기.
    resultData();

    //category값에 따라 새로운 함수 생성
  }, [category]);

  //주의사항 ,데이터 널 check
  if (loading) {
    return <NewsListCss>데이터 받는중 (대기중...) </NewsListCss>;
  }

  if (!articles) {
    console.log("데이터 못받아옴");
    return null;
  }

  const choosePage = ({ articles }) => {
    switch (dataType) {
      case 0:
        return (
          <div>
            {articles.map((article) => (
              <NewsItem key={article.url} article={article} />
            ))}
          </div>
        );

      case 1:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );

      case 2:
        return (
          <div>
            {articles.map((article) => (
              <PublicItem2 key={article.MAIN_IMG_THUMB} article={article} />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return <NewsListCss>{choosePage({ articles })}</NewsListCss>;
};

export default NewsList;
