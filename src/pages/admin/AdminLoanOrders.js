import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";
import OrderList from "../../components/OrdersList";

import { getLoanOrderPending } from "../../api/loanOrders";

const Styles = styled.div`
  .my-app-back {
    background: url(${photo}) no-repeat fixed bottom;
    background-size: cover;
    position: relative;
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
`;

const AdminLoanOrders = () => {
  const [loanOrders, setLoanOrders] = useState([]);

  useEffect(() => {
    getLoanOrderPending().then((data) => {
      setLoanOrders(data);
    });
  }, []);

  return (
    <>
      <Navibar
        text1="Заявки на кредиты"
        text2="Заявки на вклады"
        link1="/adminAccount"
        link2="/adminLoanOrders"
        link3="/adminDepositOrders"
        link4="/adminLoans"
        link5="/adminDeposits"
        link6="/adminCurrencies"
      />
      <Styles>
        <Container fluid className="my-app-back">
          <div className="my-app-overlay"></div>
          <OrderList text="Заявки на кредиты" list={loanOrders} type="кредит" />
        </Container>
      </Styles>
    </>
  );
};

export default AdminLoanOrders;
