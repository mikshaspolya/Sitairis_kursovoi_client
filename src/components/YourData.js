import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styled from "styled-components";
import EditAccountModal from "../components/EditAccountModal";

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

const YourData = (props) => {
  const [user, setUser] = useState(props.user);
  console.log(props);

  return (
    <Styles>
      <Container className="yourData" style={{ maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Ваши данные</h3>
        <Row>
          <Col style={{ width: "200px" }}>
            <p>Имя:</p>
            <p>Фамилия:</p>
            <p>Номер телефона:</p>
            <p>Дата рождения:</p>
            <p>Почта:</p>
            <p>Логин:</p>
          </Col>
          <Col
            style={{
              width: "200px",
              display: "flex",
              flexFlow: "column wrap",
            }}
          >
            <p>{props.user.name}</p>
            <p>{props.user.surname}</p>
            <p>{props.user.phoneNumber}</p>
            <p>{props.user.dateOfBirth}</p>
            <p>{props.user.email}</p>
            <p>{props.user.login}</p>
          </Col>
        </Row>
        <EditAccountModal
          name={props.user.name}
          surname={props.user.surname}
          phone={props.user.phoneNumber}
          date={props.user.dateOfBirth}
          email={props.user.email}
        />
      </Container>
    </Styles>
  );
};

export default YourData;
