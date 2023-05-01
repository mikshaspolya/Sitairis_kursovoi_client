import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ListGroup,
  Row,
  Col,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import styled from "styled-components";
import { getCardById, changeCardStatus } from "../api/cards";

const Styles = styled.div`
  .yourDeposits {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
`;

const AdminDepositCards = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [status, setStatus] = useState("ACTIVE");
  const [card, setCard] = useState({});

  const handleItemClick = async (item) => {
    setSelectedItem(item);
    setShowModal(true);
    const response = await getCardById(item);
    setCard(response);
    console.log(response);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      cardId: card.id,
      newStatus: status,
    };
    console.log(data);
    const response = await changeCardStatus(data);
    window.location.reload();
  };

  const toString = (item) => {
    return `Номер: ${item.id}, действительна до ${item.dateOfExpire}, эмитент: ${item.cardIssuer}, тип: ${item.type}, ${item.status}`;
  };

  return (
    <Styles>
      <Container className="yourDeposits" style={{ width: "700px" }}>
        <h3 style={{ textAlign: "center" }}>Карты, привязанные к счету</h3>
        <ListGroup variant="flush">
          {props.cards.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              К данному счету еще не привязаны карты
            </p>
          ) : (
            props.cards.map((item) => (
              <ListGroup.Item
                action
                onClick={() => handleItemClick(item.id)}
                key={item.id}
              >
                {toString(item)}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Данные карты</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col style={{ width: "200px" }}>
                  <p>Номер карты:</p>
                  <p>Имя владельца:</p>
                  <p>Действует до:</p>
                  <p>Эмитент:</p>
                  <p>Тип:</p>
                  <p>Статус:</p>
                </Col>
                <Col
                  style={{
                    width: "200px",
                    display: "flex",
                    flexFlow: "column wrap",
                  }}
                >
                  <p>{card.id}</p>
                  <p>{card.holderName}</p>
                  <p>{card.dateOfExpire}</p>
                  <p>{card.cardIssuer}</p>
                  <p>{card.type}</p>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                style={{ marginRight: "10px" }}
                variant="outline-dark"
                onClick={handleSubmit}
              >
                Обновить статус
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Container>
    </Styles>
  );
};

export default AdminDepositCards;
