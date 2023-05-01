import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createAccount } from "../api/accounts";

function AddDepositModal(props) {
  const [show, setShow] = useState(false);
  const [currency, setCurrency] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const account = {
      holderUuid: localStorage.getItem("uid"),
      currency: currency,
    };
    try {
      const response = await createAccount(account);
      console.log(response);
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Добавить счет
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Форма добавления счета</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Выберите валюту счета</Form.Label>
              <Form.Control
                as="select"
                value={currency}
                onChange={handleCurrencyChange}
              >
                <option value="BYN">BYN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="RUB">RUB</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddDepositModal;
