import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto 0;
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    // console.log("로그인");
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>이메일 주소</Form.Label>
            <Form.Control type="email" placeholder="이메일을 입력해주세요" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              type="password"
              placeholder="비밀번호를 입력해주세요"
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Login
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
