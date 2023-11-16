//context API 테스트 메인으로 사용 예정
//부모 컴포넌트

import React from "react";
import styled from "styled-components";

import TestColorBox from "./TestColorBox";
// import colorContext, { ColorProvider } from "./testColor";
import TestSelectColors from "./TestSelectColors";

const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  box-sizing: border-box;
  border: 1px solid #557c55;
  border-radius: 5px;
  padding: 15px;
  margin: 0 auto;
  margin-top: 50px;
  background: white;

  &:focus {
    outline: none;
    border: 1px solid #f875aa;
  }
`;

const TestColorMain = () => {
  return (
    // <div>
    //   <colorContext.Provider value={{ color: "#F875AA" }}>
    //     <TestColorBox></TestColorBox>
    //   </colorContext.Provider>
    // </div>

    <div>
      <h1>Select Color!</h1>
      <ColorContainer>
        <TestSelectColors />

        <TestColorBox />
      </ColorContainer>
    </div>
  );
};

export default TestColorMain;
