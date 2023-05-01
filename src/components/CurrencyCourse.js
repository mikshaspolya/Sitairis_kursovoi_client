import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import CurrencyConverterModal from "./CurrencyConverterModal";

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

const CurrencyCourse = (props) => {
  return (
    <Styles>
      <Container className="yourData" style={{ maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Актуальные курсы валют</h3>
        <Row>
          <Col style={{ width: "200px" }}>
            <p>1 USD</p>
            <p>1 EUR</p>
            <p>100 RUB</p>
          </Col>
          <Col
            style={{
              width: "200px",
              display: "flex",
              flexFlow: "column wrap",
            }}
          >
            <p>{props.currencies.usd}</p>
            <p>{props.currencies.eur}</p>
            <p>{props.currencies.rub}</p>
          </Col>
        </Row>
        <CurrencyConverterModal currencies={props.currencies}/>
      </Container>
    </Styles>
  );
};

export default CurrencyCourse;
