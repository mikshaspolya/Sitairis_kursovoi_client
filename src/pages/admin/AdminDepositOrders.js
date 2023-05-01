import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";
import OrderList from "../../components/OrdersList";

import { getDepositOrderPending } from "../../api/depositOrders";

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

const AdminDepositOrders = () => {
  const [depositOrders, setDepositOrders] = useState([]);

  useEffect(() => {
    getDepositOrderPending().then((data) => {
      setDepositOrders(data);
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
          <OrderList
            text="Заявки на вклады"
            list={depositOrders}
            type="вклад"
          />
        </Container>
      </Styles>
    </>
  );
};

export default AdminDepositOrders;
