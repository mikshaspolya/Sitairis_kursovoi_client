import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup, Button } from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AddDepositModal from "../components/AddDepositModal";

const Styles = styled.div`
  .yourDeposits {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
`;

const YourDeposits = (props) => {
  const toString = (item) => {
    return `Счет: ${item.id}, ${item.dateOfIssue}, ${item.status}, сумма = ${item.sum} ${item.currency}`;
  };

  const navigate = useNavigate();

  const handleClick = (itemId) => {
    navigate(`/showDeposit/${itemId}`);
  };

  return (
    <Styles>
      <Container className="yourDeposits" style={{ width: "700px" }}>
        <h3 style={{ textAlign: "center" }}>Ваши счета</h3>
        <ListGroup variant="flush">
          {props.list.length === 0 ? (
            <p style={{ textAlign: "center" }}>У вас еще нет счетов</p>
          ) : (
            props.list.map((item) => (
              <ListGroup.Item
                key={item.id}
                action
                onClick={() => handleClick(item.id)}
              >
                {toString(item)}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px",
          }}
        >
          <AddDepositModal />
        </Container>
      </Container>
    </Styles>
  );
};

export default YourDeposits;
