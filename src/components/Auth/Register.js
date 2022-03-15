import React,{useState} from "react";
import NewUserForm from "./NewUserForm";
import Container from "../common/Container";
import Splash from "../common/Splash";
import regSplash from '../../assets/regSplash.jpg'

const Register = (props) => {
    const [newUser, setNewUser] = useState({
        email: "",
        password: "",
        fname: "",
        lname: ""
    })

    const updateForm = (field, value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () => {};

  return (
    <Container>
        <Splash image={regSplash} style={{height: "25vh"}} />
      <h1 style={{}}>Register</h1>
      <NewUserForm newUser={newUser} onChange={updateForm} onSubmit={onSubmit} />
    </Container>
  );
};

export default Register;
