import React from "react";
import { Container, ListGroup } from "react-bootstrap";

import styled from "styled-components";

const Styles = styled.div`
  .my-app-list {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
    width: 700px;
  }
`;

const List = (props) => {
  const toString = (item) => {
    if (props.text === "Ваши кредиты") {
      return `Тип кредита: ${item.idLoan}, с ${item.dateOfIssue} по ${item.dateOfEnd}, сумма: ${item.sum}, ${item.status}`;
    } else if (props.text === "Ваши вклады") {
      return `Тип вклада: ${item.idDeposit}, с ${item.dateOfIssue} по ${item.dateOfEnd}, сумма: ${item.sum}, ${item.status}`;
    } else if (props.text === "Ваша история") {
      return `${item.description}`;
    }
  };

  const componentDidMount = () => {
    if (props.text === "Ваши кредиты") {
    } else if (props.text === "Ваши вклады") {
    } else if (props.text === "Ваша история") {
    }
  };

  const myList = props.list;
  return (
    <>
      <Styles>
        <Container className="my-app-list">
          <h3 style={{ textAlign: "center" }}>{props.text}</h3>
          <ListGroup variant="flush">
            {myList.map((item) => (
              <ListGroup.Item key={item.id}>
                {toString(item)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </Styles>
    </>
  );
};

export default List;
