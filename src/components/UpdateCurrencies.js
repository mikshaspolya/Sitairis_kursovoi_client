import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import styled from "styled-components";
import { useState } from "react";

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

const UpdateCurrencies = () => {
  const [usd, setUSD] = useState();
  const [eur, setEUR] = useState();
  const [rub, setRUB] = useState();

  return (
    <Styles>
      <Container className="yourData" style={{ maxWidth: "400px" }}>
        <h3 style={{ textAlign: "center" }}>Актуальные курсы валют</h3>
        <Row>
          <Col style={{ width: "200px" }}>
            <p>&nbsp;</p>
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
            <p>BYN</p>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={usd}
                onChange={(e) => setUSD(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={eur}
                onChange={(e) => setEUR(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={rub}
                onChange={(e) => setRUB(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default UpdateCurrencies;
