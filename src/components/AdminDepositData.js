import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styled from "styled-components";
import { changeAccountStatus } from "../api/accounts";

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

const AdminDepositData = (props) => {
  const deposit = {
    number: props.account.id,
    date: props.account.dateOfIssue,
    currency: props.account.currency,
    status: props.account.status,
    sum: props.account.sum,
  };
  const [status, setStatus] = useState("ACTIVE");

  const handleClick = async () => {
    const statusData = {
      id: props.account.id,
      newStatus: status,
    };
    const response = await changeAccountStatus(statusData);
    console.log(response);
  };

  return (
    <Styles>
      <Container className="yourData" style={{ maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Данные счета</h3>
        <Row>
          <Col style={{ width: "200px" }}>
            <p>Номер счета:</p>
            <p>Дата открытия:</p>
            <p>Валюта:</p>
            <p>Сумма:</p>
            <p>Статус:</p>
          </Col>
          <Col
            style={{
              width: "200px",
              display: "flex",
              flexFlow: "column wrap",
            }}
          >
            <p>{deposit.number}</p>
            <p>{deposit.date}</p>
            <p>{deposit.currency}</p>
            <p>{deposit.sum}</p>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                as="select"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="BLOCKED">BLOCKED</option>
                <option value="EXPIRED">EXPIRED</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="outline-dark" onClick={handleClick}>
          Обновить статус
        </Button>
      </Container>
    </Styles>
  );
};

export default AdminDepositData;
