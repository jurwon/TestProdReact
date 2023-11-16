import { Button } from "antd";
import React from "react";
import styled from "styled-components";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

const MainTitleTextCss = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #fa7070;
`;

const MainTextCss = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: orange;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: calc(100%-40px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  & {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

const Main = () => {
  const navigate = useNavigate();
  //styled.원하는 태그 선택 '(백틱) '(백틱), 열고 닫고

  return (
    <Wrapper>
      <div>
        <h1>메인 페이지</h1>
        <Container>
          <MainTitleTextCss>styled components test</MainTitleTextCss>
          <Button title="회원가입하기" onClick={() => navigate("/Join")}>
            회원가입하기
          </Button>
          <br />
          <Button title="MyCount" onClick={() => navigate("/MyCount")}>
            MyCount
          </Button>
          <br />
          <Button
            title="RefPracticeScrollTest"
            onClick={() => navigate("/RefPracticeScrollTest")}
          >
            RefPracticeScrollTest
          </Button>
          <br />
          <Button
            title="DataListKeyAddDelTest"
            onClick={() => navigate("/DataListKeyAddDelTest")}
          >
            DataListKeyAddDelTest
          </Button>
          <br />
          <Button
            title="InfoTestUseState"
            onClick={() => navigate("/InfoTestUseState")}
          >
            UseState
          </Button>
          <br />
          <Button
            title="InfoTestUseEffect"
            onClick={() => navigate("/InfoTestUseEffect")}
          >
            UseEffect
          </Button>
          <br />
          <Button
            title="CountUseReducerTest"
            onClick={() => navigate("/CountUseReducerTest")}
          >
            UseReducer_Count
          </Button>
          <br />
          <Button
            title="InfoUseReducer"
            onClick={() => navigate("/InfoUseReducer")}
          >
            UseReducer_Info
          </Button>
          <br />
          <Button
            title="AverageUseMemo"
            onClick={() => navigate("/AverageUseMemo")}
          >
            AverageUseMemo
          </Button>
          <br />
          <Button
            title="AverageUseCallback"
            onClick={() => navigate("/AverageUseCallback")}
          >
            AverageUseCallback
          </Button>
          <br />
          <Button
            title="AverageUseRef"
            onClick={() => navigate("/AverageUseRef")}
          >
            AverageUseRef
          </Button>
          <br />
          <Button
            title="AverageUseParams"
            onClick={() => navigate("/useParams")}
          >
            AverageUseParams
          </Button>
          <br />
          <Button
            title="InfoTestCustomHooks"
            onClick={() => navigate("/InfoTestCustomHooks")}
          >
            InfoTestCustomHooks
          </Button>
          <br />
          <Button title="TestSass" onClick={() => navigate("/TestSass")}>
            TestSass
          </Button>
          <br />
          <Button
            title="StyledComponent"
            onClick={() => navigate("/StyledComponent")}
          >
            StyledComponent
          </Button>
          <br />
          <Button title="ImmerTest" onClick={() => navigate("/ImmerTest")}>
            ImmerTest
          </Button>
          <br />
          <Button title="TestZone" onClick={() => navigate("/TestZone")}>
            TestZone
          </Button>
          <br />
          <Button title="ApiTest" onClick={() => navigate("/ApiTest")}>
            ApiTest
          </Button>
          <br />
          <Button
            title="ApiTestKoreaNews"
            onClick={() => navigate("/ApiTestKoreaNews")}
          >
            ApiTestKoreaNews
          </Button>
          <br />

          <Button title="MainNews" onClick={() => navigate("/MainNews")}>
            MainNews
          </Button>
          <br />

          <Button
            title="newsPageTest/:category"
            onClick={() => {
              //navigate("/newsPageTest/:category");
              navigate("/newsPageTest/all");
            }}
          >
            NewsApi Param사용
          </Button>
          <br />
          <Button
            title="TestColorMain"
            onClick={() => navigate("/TestColorMain")}
          >
            TestColorMain
          </Button>
          <br />
        </Container>
      </div>
    </Wrapper>
  );
};

export default Main;
