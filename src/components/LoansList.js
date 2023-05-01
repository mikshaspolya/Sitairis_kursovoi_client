import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  ListGroup,
  Col,
  Row,
  Modal,
  Button,
  Form,
} from "react-bootstrap";
import styled from "styled-components";
import { getLoanOrderById, changeLoanOrderStatus } from "../api/loanOrders";
import { getUserById } from "../api/users";
import { getLoanById } from "../api/loans";
import { getDepositById } from "../api/deposits";
import {
  getDepositOrderById,
  changeDepositOrderStatus,
} from "../api/depositOrders";

const Styles = styled.div`
  .yourDeposits {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
`;

const LoansList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);
  const [status, setStatus] = useState("APPROVED");
  const [loanOrder, setLoanOrder] = useState({});
  const [user, setUser] = useState({});
  const [loan, setLoan] = useState({});

  const handleClick = async (item) => {
    setSelectedItem(item);
    setShowModal(true);
    if (props.text === "Все кредиты клиентов") {
      const response = await getLoanOrderById(item);
      setLoanOrder(response);
      const resp = await getUserById(response.idUser);
      setUser(resp);
      const res = await getLoanById(response.idLoan);
      setLoan(res);
    } else if (props.text === "Все вклады клиентов") {
      const response = await getDepositOrderById(item);
      setLoanOrder(response);
      const resp = await getUserById(response.idUser);
      setUser(resp);
      const res = await getDepositById(response.idDeposit);
      setLoan(res);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const orderData = {
      id: loanOrder.id,
      newStatus: status,
    };

    if (props.text === "Все кредиты клиентов") {
      const response = await changeLoanOrderStatus(orderData);
    } else if (props.text === "Все вклады клиентов") {
      const response = await changeDepositOrderStatus(orderData);
    }
    window.location.reload();
  };

  console.log(status);

  const toString = (item) => {
    if (props.text === "Все кредиты клиентов")
      return `С ${item.dateOfIssue} по ${item.dateOfEnd}, номер кредита: ${item.idLoan}, сумма: ${item.sum}, клиент: ${item.idUser}, статус: ${item.status}`;
    if (props.text === "Все вклады клиентов")
      return `С ${item.dateOfIssue} по ${item.dateOfEnd}, номер вклада: ${item.idDeposit}, сумма: ${item.sum}, клиент: ${item.idUser}, статус: ${item.status}`;
  };

  return (
    <Styles>
      <Container className="yourDeposits" style={{ width: "700px" }}>
        <h3 style={{ textAlign: "center" }}>{props.text}</h3>
        <ListGroup variant="flush">
          {props.list.length === 0 ? (
            <p style={{ textAlign: "center" }}>Кредитов нет</p>
          ) : (
            props.list.map((item) => (
              <ListGroup.Item
                action
                onClick={() => handleClick(item.id)}
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
              <Modal.Title>Изменение статуса {props.type}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col style={{ width: "200px" }}>
                  <p>ФИО:</p>
                  <p>Дата открытия:</p>
                  <p>Дата закрытия:</p>
                  <p>Ставка:</p>
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
                  <p>{`${user.name} ${user.surname}`}</p>
                  <p>{loanOrder.dateOfIssue}</p>
                  <p>{loanOrder.dateOfEnd}</p>
                  <p>{loan.interest}</p>
                  <p>{loan.currency}</p>
                  <p>{loanOrder.sum}</p>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      as="select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="APPROVED">APPROVED</option>
                      <option value="DECLINED">DECLINED</option>
                      <option value="EXPIRED">EXPIRED</option>
                      <option value="CLOSED">CLOSED</option>
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

export default LoansList;
