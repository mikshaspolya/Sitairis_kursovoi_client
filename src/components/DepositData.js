import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import DeleteDepositModal from "./DeleteDepositModal";

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

const DepositData = (props) => {
  const account = {
    number: props.account.id,
    date: props.account.dateOfIssue,
    currency: props.account.currency,
    status: props.account.status,
    sum: props.account.sum
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
            <p>Статус:</p>
            <p>Сумма:</p>
          </Col>
          <Col
            style={{
              width: "200px",
              display: "flex",
              flexFlow: "column wrap",
            }}
          >
            <p>{account.number}</p>
            <p>{account.date}</p>
            <p>{account.currency}</p>
            <p>{account.status}</p>
            <p>{account.sum}</p>
          </Col>
        </Row>
        <DeleteDepositModal id={account.number}/>
      </Container>
    </Styles>
  );
};

export default DepositData;
