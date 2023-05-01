import React, { useState } from "react";
import { Button, Form, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";

import { createLoanOrder } from "../api/loanOrders";
import { createDepositOrder } from "../api/depositOrders";

const Styles = styled.div`
  .my-app-form {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 30px;
    width: 500px;
    margin-bottom: 200px;
  }
`;

const LoanForm = (props) => {
  const [selectedItem, setSelectedItem] = useState(1);
  const [sum, setSum] = useState();

  const handleclick = async () => {
    if (props.text === "Заявка на оформление кредита") {
      const orderData = {
        uuidUser: localStorage.getItem("uid"),
        idLoan: selectedItem,
        sum: sum,
      };
      const response = await createLoanOrder(orderData);
      console.log(response);
    } else if (props.text === "Заявка на оформление вклада") {
      const orderData = {
        uuidUser: localStorage.getItem("uid"),
        idDeposit: selectedItem,
        sum: sum,
      };
      const response = await createDepositOrder(orderData);
      console.log(response);
    }

    window.location.reload();
  };

  function handleChange(event) {
    setSelectedItem(event.target.value);
  }

  const toString = (item) => {
    return `Тип: ${item.id}, процентная ставка: ${item.interest}%, на ${item.monthsToReturn} месяцев, ${item.currency}`;
  };

  return (
    <>
      <Styles>
        <Form className="d-flex flex-column align-items-center my-app-form">
          <h3>{props.text}</h3>
          <FloatingLabel controlId="floatingSelectGrid" label="Выберите тип">
            <Form.Select
              className="mb-3"
              style={{ width: "206.4px" }}
              aria-label="Floating label select example"
              onChange={handleChange}
            >
              {props.options.map((item) => (
                <option value={item.id} key={item.id}>
                  {toString(item)}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
          <Form.Group className="mb-3" controlId="formBasic">
            <Form.Control
              value={sum}
              onChange={(e) => setSum(e.target.value)}
              type="text"
              placeholder="Сумма"
            />
          </Form.Group>
          <Button variant="outline-dark" onClick={handleclick}>
            Отправить
          </Button>
        </Form>
      </Styles>
    </>
  );
};

export default LoanForm;
