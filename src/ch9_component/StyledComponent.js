import React from "react";
import styled, { css } from "styled-components";
import { Button } from "antd";
import { AiFillApple } from "react-icons/ai";

const StyledComponent = () => {
  const Box = styled.div`
    background: ${(props) => props.color || "blue"};
    padding: 1rem;
    display: flex;
  `;
  const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 500;

    // & 현재 요소
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }

    /* props를 이용할 수 있음 */
    ${(props) =>
      props.test &&
      css`
        background: none;
        border: 2px solid white;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      `}

    & + button {
      margin-left: 1rem;
    }
  `;

  return (
    <div>
      <div>
        <h1>StyledComponent</h1>
        <Box color="red">
          <Button test={true}>HELLO</Button>
        </Box>
      </div>
      <div>
        <h1>
          test react-icons <AiFillApple />
        </h1>
      </div>
    </div>
  );
};

export default StyledComponent;
