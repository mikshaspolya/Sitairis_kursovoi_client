import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";
import LoansList from "../../components/LoansList";
import { getLoanOrders } from "../../api/loanOrders";

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

const loan = {
  fio: "Микшас Полина",
  openDate: "2020-12-12",
  closeDate: "2021-12-12",
  rate: 15.2,
  currency: "USD",
  sum: 200,
  status: "PENDING",
};

const AdminLoans = () => {
  const [loanOrders, setLoanOrders] = useState([]);

  useEffect(() => {
    getLoanOrders().then((data) => {
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
          <LoansList
            text="Все кредиты клиентов"
            list={loanOrders}
            type="кредита"
            obj={loan}
          />
        </Container>
      </Styles>
    </>
  );
};

export default AdminLoans;
