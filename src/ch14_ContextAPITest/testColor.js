//준비물
//1) createContext 임포트
// 전역으로 사용할 예제 속성 추가
// 내보내기

//다른 컴포넌트에서 해당 컴포넌트 설정 값 사용
//값 가져오기(getter) : colorContext.Consumer
//변경 된 값 적용(setter) : colorContext.Provider

import { createContext, useState } from "react";

//속성 예시 만들기
//const colorContext = createContext({ color: "#AEDEFC" });

//속성 예시2
const ColorContext = createContext({
  //state속성 값으로
  //color : header,footer, subcolor : content
  state: { color: "#557C55", subcolor: "#F2FFE9" },
  //actions 속성으로 함수로
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

//provider만들기(setter)
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#557C55"); //content
  const [subcolor, setSubColor] = useState("#F2FFE9"); //header,footer
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubColor },
  };

  return (
    //props형태로 value로  값,함수 같이 전달하면서
    //children자리에 또 다른 props전달
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//Consumer(getter)
const { Consumer: ColorConsumer } = ColorContext;

// 추가
export { ColorProvider, ColorConsumer };

//내보내기
export default ColorContext;
