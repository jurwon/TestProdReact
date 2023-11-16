import React, { useState, Component } from "react";
import "../CSS/test.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Space, DatePicker, version } from "antd";
import LifeCycleTest from "../ch7_component/LifeCycleTest";

function getRandomColor() {
  // 0~1 사이에 숫자에서, 16777215 이만큼 : RGB코드 #00ff00:16x16x16x16x16x16=16^6
  // 0~16777215 사이의 값을 랜덤하게 출력하기.
  // 출력의 모양은 16진수 : 0~f,
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class Body extends Component {
  // 색상을 랜덤하게 변경 시켜서, 이전 상태와 props , 스냅샷 확인.

  // 부모 App -> 자식 컴포넌트로, props에 color 전달하기.
  state = {
    color: "#000000",
  };
  // 자식에게 색깔을 전달하기 위해서, 이벤트 함수를 수행.
  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.handleClick}>
          랜덤색상
        </Button>
        <LifeCycleTest color={this.state.color} />
      </div>
    );
  }
}

export default Body;
