import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import LoginForm from "./LoginForm";
import Container from "../common/Container";
import regSplash from "../../assets/regSplash.jpg";
import Splash from "../common/Splash";
import { apiHostUrl } from "../../config";
import {AuthContext} from '../Providers/AuthProvider'


const Login = (props) => {
  const [newLogin, setNewLogin] = useState({
    username: '',
    password: '',
  });

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const updateForm = (field, value) => {
    setNewLogin({
      ...newLogin,
      [field]: value
    })
  }

  const onSubmit = () => {
    const data = newLogin;
    login(data);
  }

  const login = async (data) => {
    try {
      const res = await axios.post(`${apiHostUrl}/api/auth/signin`, data)
      console.log(res.data);
      setAuth({
        token: res.data.token,
        profile: {},
        roles: res.data.roles,
      })
      navigate("/")
    }catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };


  return (
    <Container>
      <Splash
        image={regSplash}
        style={{height: "25vh",}}>
        <h1 style={{marginBottom: "25px", fontSize: "3em", textShadow: '0 0 6px #303030, 0 0 5px #303030', color: "#f1f1f1"}}>Login</h1>
      </Splash>
     <LoginForm
      newLogin= {newLogin}
      onChange={updateForm}
      onSubmit={onSubmit}

      />
    </Container>
  );
};
export default Login;
