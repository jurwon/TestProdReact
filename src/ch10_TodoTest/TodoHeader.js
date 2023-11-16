import React from "react";
import styled from "styled-components";

const Header = styled.div`
  & h1 {
    color: #fa7070;
  }
`;

const TodoHeader = () => {
  return (
    <Header>
      <h3>My ToDo List 🤪</h3>
      <h1>{new Date().toDateString()}</h1>
    </Header>
  );
};

export default TodoHeader;
