import React, { useEffect } from "react";
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
import { useState } from "react";
import AddCardModal from "./AddCardModal";
import { getCardById, activateCard, changeCardStatus } from "../api/cards";

const Styles = styled.div`
  .yourDeposits {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
`;

const DepositCards = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [card, setCard] = useState({});
  const [pin, setPin] = useState("");

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
      newStatus: "BLOCKED",
    };
    const response = await changeCardStatus(data);
    window.location.reload();
  };

  const handleActivate = async (event) => {
    event.preventDefault();
    const activate = {
      cardId: card.id,
      newPin: pin,
    };
    const response = await activateCard(activate);
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
              К этому счету еще не привязаны карты
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
                  <p>Статус:</p>
                  <p>Эмитент:</p>
                  <p>Тип:</p>
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
                  <p>{card.status}</p>
                  <p>{card.cardIssuer}</p>
                  <p>{card.type}</p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              {card.status === "PENDING" ? (
                <>
                  <Row>
                    <h5 style={{ textAlign: "left" }}>Активация карты</h5>
                    <Col>
                      <Form.Control
                        type="password"
                        value={pin}
                        placeholder="PIN"
                        onChange={(e) => setPin(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Button variant="outline-dark" onClick={handleActivate}>
                        Активировать карту
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : card.status === "BLOCKED" ? (
                <Row>
                  <h5>Карта заблокирована</h5>
                </Row>
              ) : (
                <>
                  <Row>
                    <Col>
                      <h5>Хотите ли Вы заблокировать карту?</h5>
                    </Col>
                    <Col>
                      <Button
                        style={{ marginRight: "10px" }}
                        variant="outline-dark"
                        onClick={handleSubmit}
                      >
                        Да, хочу
                      </Button>
                      <Button
                        style={{ marginLeft: "20px" }}
                        variant="outline-dark"
                        onClick={handleClose}
                      >
                        Нет
                      </Button>
                    </Col>
                  </Row>
                </>
              )}
            </Modal.Footer>
          </Modal>
          <AddCardModal />
        </Container>
      </Container>
    </Styles>
  );
};

export default DepositCards;
