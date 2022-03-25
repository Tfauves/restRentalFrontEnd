import React from "react";
// import LoginForm from "./LoginForm";
import Container from "../common/Container";
import regSplash from "../../assets/regSplash.jpg";
import Splash from "../common/Splash";

const Login = (props) => {
  return (
    <Container>
      <Splash
        image={regSplash}
        style={{
          height: "20vh",
          color: "#f1f1f1",
        }}
      >
        <h1>Login</h1>
      </Splash>
      {/* <LoginForm /> */}
    </Container>
  );
};
export default Login;
