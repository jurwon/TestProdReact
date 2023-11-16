import React, { useContext } from "react";
import styled from "styled-components";

//전역 속성 가져오기
import ColorContext from "../ch14_ContextAPITest/testColor";

const FooterDiv = styled.div`
  background-color: #557c55;
  width: 100%;
  height: 10vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = () => {
  const { state } = useContext(ColorContext);

  return (
    <footer>
      <FooterDiv style={{ backgroundColor: state.color }}>
        <h1>Footer</h1>
      </FooterDiv>
    </footer>
  );
};

export default Footer;
