import React, { useContext } from "react";
import styled from "styled-components";

//yarn add react-router-dom으로 도구 설치

//전역 속성 가져오기
import ColorContext from "../ch14_ContextAPITest/testColor";

const HeaderContainer = styled.header`
  /* background-color: #557c55; */
  background: red;
  padding: 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 5vh;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fa7070;
  padding: 10px;
  cursor: pointer;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      margin-right: 20px;
    }

    a {
      text-decoration: none;
      color: #f2ffe9;
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const handleLogoClick = () => {
  window.location.href = "/";
};

const Header = () => {
  const { state } = useContext(ColorContext);

  return (
    <HeaderContainer style={{ backgroundColor: state.color }}>
      <HeaderContent>
        <Logo onClick={handleLogoClick}>My Logo</Logo>
        <Navigation>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/Join">Join</a>
            </li>
            <li>
              <a href="/Login">Login</a>
            </li>
            <li>
              <a href="/TodoMain">TodoList</a>
            </li>
            <li>
              <a href="/MainNews">News</a>
            </li>
            <li>
              <a href="/TestColorMain">Pallet</a>
            </li>
          </ul>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
