import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {createCard} from '../api/cards';

function AddCardModal() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('')
  const [issuer, setIssuer] = useState('')
  const [type, setType] = useState('');
  const { id } = useParams();


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const cardData = {
      holderName: name,
      cardIssuer: issuer,
      type: type,
      idAccount: id
    }
    const response = createCard(cardData);
    console.log(response);
    window.location.reload();
  };

  

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Добавить карту
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Форма добавления карты</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Имя владельца</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Эмитент карты</Form.Label>
              <Form.Control
                as="select"
                value={issuer}
                onChange={e => setIssuer(e.target.value)}
              >
                <option value='VISA'>VISA</option>
                <option value='MASTER_CARD'>MASTER_CARD</option>
                <option value='MIR'>MIR</option>
                <option value='BELCARD'>BELCARD</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Тип карты</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={e => setType(e.target.value)}
              >
                <option value='DEBIT'>DEBIT</option>
                <option value='CREDIT'>CREDIT</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Создать
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCardModal;
