import React from "react";
import Container from "../common/Container";
import Form from "../common/Form";
import InlineInputContainer from "../common/InlineInputContainer";
import Input from "../common/Input";
import Button from "../common/Button";

const LoginForm = (props) => {
    const {newLogin} = props;

    const handleChange = (e) => {
        props.onChange(e.target.id, e.target.value);
    }

  return (
    <Container>
      <Form onSubmit={props.onSubmit} style={{marginTop: '1em'}}>
        <InlineInputContainer>
        <Input
        name="username"
         id="username"
         placeholder="Email"
         onChange={handleChange}
         value={newLogin.username}
         required
         type="email"
        />
        </InlineInputContainer>
        <InlineInputContainer>
          <Input
            id="password"
            placeholder="Password"
            onChange={handleChange}
            value={newLogin.password}
            required
            type="password"
          />
        </InlineInputContainer>
        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
