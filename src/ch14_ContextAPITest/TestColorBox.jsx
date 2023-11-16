import React from "react";

//전역 속성 가져오기
import { ColorConsumer } from "./testColor";

//전역에서 설정한 속성 가져오기
const TestColorBox = () => {
  return (
    <div>
      {/* 예시1 */}
      {/* <colorContext.Consumer> */}
      {/* {(value) => ( */}

      {/* 예시2 */}
      <ColorConsumer>
        {/* 값가져오기  children 부분에 값의 형태가 아니라 함수 형태로 사용중. child as Function */}
        {({ state }) => (
          <div>
            <div
              style={{
                width: "64px",
                height: "64px",
                // background: value.state.color,
                background: state.color,
              }}
            ></div>

            <div
              style={{
                width: "32px",
                height: "32px",
                // background: value.state.subcolor,
                background: state.subcolor,
              }}
            ></div>
          </div>
        )}
      </ColorConsumer>
    </div>
  );
};

export default TestColorBox;
