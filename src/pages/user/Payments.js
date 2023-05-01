import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Button, Form, FloatingLabel } from "react-bootstrap";
import styled from "styled-components";
import photo from "../../finance.jpg";
import Navibar from "../../components/Navibar";
import { useState } from "react";
import { getUserAccounts } from "../../api/users";
import { createAccountTransaction } from "../../api/accounts";

const Styles = styled.div`
  .my-app-back {
    background: url(${photo}) no-repeat fixed bottom;
    background-size: cover;
    position: relative;
    z-index: 0;
    padding: 50px;
    display: flex;
    justify-content: space-around;
    min-height: 90vh;
  }
  .my-app-overlay {
    background-color: black;
    opacity: 0.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .my-app-form {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 30px;
    width: 500px;
    margin-top: 80px;
    margin-bottom: 200px;
  }
`;

const Payments = () => {
  const [accounts, setAccounts] = useState([]);
  const [myAccount, setMyAccount] = useState();
  const [toAccount, setToAccount] = useState();
  const [sum, setSum] = useState();

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    getUserAccounts(uid).then((data) => {
      setAccounts(data);
      setMyAccount(data[0].id);
    });
  }, []);

  const toString = (item) => {
    return `Счет: ${item.id}, ${item.dateOfIssue}, ${item.status}, сумма = ${item.sum} ${item.currency}`;
  };

  function handleChange(event) {
    setMyAccount(event.target.value);
  }

  const handleclick = async () => {
    const transactionData = {
      idTo: toAccount,
      idFrom: myAccount,
      sum: sum,
    };
    const response = await createAccountTransaction(transactionData);
    toast.success('Успешно!', { autoClose: 5000 });
    console.log(response);
  };

  return (
    <>
      <Navibar
        text1="История"
        text2="Платежи"
        link1="/userAccount"
        link2="/history"
        link3="/payments"
        link4="/loans"
        link5="/deposits"
        link6="/currencies"
      />
      <Styles>
        <Container fluid className="my-app-back">
          <div className="my-app-overlay"></div>
          <Form className="d-flex flex-column align-items-center my-app-form">
            <h3>Новый платеж</h3>
            <FloatingLabel controlId="floatingSelectGrid" label="Выберите счет">
              <Form.Select
                className="mb-3"
                style={{ width: "206.4px" }}
                aria-label="Floating label select example"
                onChange={handleChange}
              >
                {accounts.map((item) => (
                  <option value={item.id} key={item.id}>
                    {toString(item)}
                  </option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Control
                value={toAccount}
                onChange={(e) => setToAccount(e.target.value)}
                type="text"
                placeholder="Номер счета получателя"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Control
                value={sum}
                onChange={(e) => setSum(e.target.value)}
                type="text"
                placeholder="Сумма"
              />
            </Form.Group>
            <Button variant="outline-dark" onClick={handleclick}>
              Оплатить
            </Button>
          </Form>
        </Container>
      </Styles>
    </>
  );
};

export default Payments;
