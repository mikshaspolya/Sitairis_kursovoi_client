import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserStatus } from "../api/users";

const Styles = styled.div`
  .yourData {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
  Button {
    margin: 10px auto;
    display: block;
  }
`;

const UserData = (props) => {
  const [status, setStatus] = useState("ACTIVE");
  
  const user = {
    id: props.user.id,
    name: props.user.name,
    surname: props.user.surname,
    phone: props.user.phoneNumber,
    date: props.user.dateOfBirth,
    email: props.user.email,
    login: props.user.login,
    status: props.user.status,
    uid: props.user.uuid
  };

  const handleClick = async() => {
    const response = await updateUserStatus(user.uid, status);
    toast.success('Статус успешно изменен!', { autoClose: 5000 });
  }

  return (
    <Styles>
      <Container className="yourData" style={{ maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Данные пользователя</h3>
        <Row>
          <Col style={{ width: "200px" }}> 
            <p>Идентификатор:</p>
            <p>Имя:</p>
            <p>Фамилия:</p>
            <p>Номер телефона:</p>
            <p>Дата рождения:</p>
            <p>Почта:</p>
            <p>Логин:</p>
            <p>Статус:</p>
          </Col>
          <Col
            style={{
              width: "200px",
              display: "flex",
              flexFlow: "column wrap",
            }}
          >
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.phone}</p>
            <p>{user.date}</p>
            <p>{user.email}</p>
            <p>{user.login}</p>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option>ACTIVE</option>
                <option>BLOCKED</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-dark" onClick={handleClick}>Обновить статус</Button>
      </Container>
    </Styles>
  );
};

export default UserData;
