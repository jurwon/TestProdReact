//sass문법을 테스트 할 공간
import React from "react";
import "./SassComponent.scss";
import cssModule from "./CSSModule.module.css";

const TestSass = () => {
  return (
    // SassTest
    <div className="SassTest">
      <h1>SassTest</h1>
      <div className="sassContainer">
        <div className="box hotpink"></div>
        <div className="box yunjadu"></div>
        <div className="box jadu"></div>
        <div className="box sky"></div>
        <div className="box yunjadu"></div>
        <div className="box yundo"></div>
        <div className="box ginyundo"></div>
        <div className="box malcha"></div>
        <div className="box jamong"></div>
      </div>

      {/* css 모듈 */}
      <h1>CSS MODULE확인</h1>
      <div className={cssModule.wrapper}>css.module.test</div>
      <div className="testGlobal">css.module.test</div>
      <div className={`${cssModule.wrapper} ${cssModule.wrapper2}`}>
        css.module 2개 적용
      </div>
    </div>
  );
};

export default TestSass;
