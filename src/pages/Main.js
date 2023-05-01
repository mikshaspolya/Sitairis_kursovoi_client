import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Button, Form } from "react-bootstrap";
import styled from "styled-components";
import photo from "../main_finance.jpg";
import MainNavibar from "../components/MainNavibar";
import authUser from "../api/auth";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const Styles = styled.div`
  .my-app-back {
    background: url(${photo}) no-repeat fixed bottom;
  }
`;

const Main = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const userData = {
    username: login,
    password: password,
    client_id: "kursovoi-app",
    grant_type: "password",
  };
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      const response = await authUser(userData);
      localStorage.setItem("token", response.access_token);

      const decodedToken = jwtDecode(localStorage.getItem("token"));
      localStorage.setItem("uid", decodedToken.sub);

      const roles = decodedToken.realm_access.roles;

      if (roles.includes("admin")) {
        localStorage.setItem("role", "admin");
        navigate("/adminAccount");
      } else if (roles.includes("user")) {
        localStorage.setItem("role", "user");
        navigate("/userAccount");
      }
    } catch (error) {
      toast.error('Неверный логин или пароль!', { autoClose: 5000 });
      console.log(error);
    }
  };

  return (
    <>
      <MainNavibar/>
      <Styles>
        <Container
          fluid
          className="my-app-back"
          style={{
            backgroundSize: "cover",
            position: "relative",
            zIndex: "0",
            padding: "50px",
            display: "flex",
            justifyContent: "space-around",
            minHeight: "90vh",
          }}
        >
          <div
            style={{
              backgroundColor: "black",
              opacity: 0.5,
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
          ></div>
          <Form
            className="d-flex flex-column align-items-center z-index-1"
            style={{
              backgroundColor: "white",
              opacity: 0.85,
              borderRadius: "20px",
              padding: "30px",
              width: "500px",
              marginTop: "100px",
              marginBottom: "250px",
            }}
          >
            <h3>Добро пожаловать!</h3>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Control
                type="login"
                placeholder="Введите логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="outline-dark" onClick={handleAuth}>
              Вход
            </Button>
          </Form>
        </Container>
      </Styles>
    </>
  );
};

export default Main;
