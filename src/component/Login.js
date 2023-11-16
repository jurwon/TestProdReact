import { Button } from "antd";
import React from "react";
import { useState } from "react";

//yarn add react-router-dom으로 도구 설치
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>로그인</h1>
      <div>
        <input value={email} onChange={onEmailChange} placeholder="email" />
      </div>
      <div>
        <input
          value={password}
          onChange={onPasswordChange}
          type="password"
          placeholder="password"
        />
      </div>
      <br />
      <div>
        <Button onClick={() => navigate("/")}>로그인</Button>
      </div>
    </div>
  );
};

export default Login;
