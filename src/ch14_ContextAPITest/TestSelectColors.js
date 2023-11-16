import React from "react";
import { ColorConsumer } from "./testColor";

const colors = [
  "#F875AA",
  "#FFDFDF",
  "#FFF6F6",
  "#AEDEFC",
  "#F2FFE9",
  "#A6CF98",
  "#557C55",
  "#FA7070",
];

const TestSelectColors = () => {
  return (
    <div>
      <ColorConsumer>
        {/* 값가져오기  children 부분에 값의 형태가 아니라 함수 형태로 사용중. child as Function */}
        {({ actions, state }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "30px",
                  height: "30px",
                  cursor: "pointer",
                }}
                //좌클릭
                onClick={() => actions.setColor(color)}
                //우클릭
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubColor(color);
                }}
              ></div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default TestSelectColors;
