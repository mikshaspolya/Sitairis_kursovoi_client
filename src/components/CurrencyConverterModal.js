import React from "react";
import { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function CurrencyConverterModal(props) {
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState("0");
  const [amount, setAmount] = useState();
  const [result, setResult] = useState(0.0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currency === "0") setResult(props.currencies.usd * parseFloat(amount));
    if (currency === "1") setResult(props.currencies.eur * parseFloat(amount));
    if (currency === "2")
      setResult((props.currencies.rub * parseFloat(amount)) / 100);
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Открыть конвертер валют
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Конвертер валют</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Выберите валюту</Form.Label>
                  <Form.Control
                    as="select"
                    value={currency}
                    onChange={handleCurrencyChange}
                  >
                    <option value="0">USD</option>
                    <option value="1">EUR</option>
                    <option value="2">RUB</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Введите сумму</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Сумма"
                    value={amount}
                    onChange={handleAmountChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row
              style={{
                marginTop: "10px",
                marginLeft: "100px",
                maxWidth: "300px",
              }}
            >
              <Col>
                <p>BYN</p>
              </Col>
              <Col>
                <p>{result}</p>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Конвертировать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CurrencyConverterModal;
