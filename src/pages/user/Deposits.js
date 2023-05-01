import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../finance.jpg";
import List from "../../components/List";
import LoanForm from "../../components/LoanForm";

import { getDeposits } from "../../api/deposits";
import {getUserDepositOrders} from "../../api/users";

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
`;

const Deposits = () => {
  const [data, setData] = useState([]);
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    getDeposits().then((data) => {
      setDeposits(data);
    });
  }, []);

  useEffect(() => {
    const uid = localStorage.getItem("uid");
    getUserDepositOrders(uid).then((data) => {
      setData(data);
    });
  }, []);

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
          <Row>
            <Col>
              <LoanForm text="Заявка на оформление вклада" options={deposits} />
            </Col>
            <Col>
              <List text="Ваши вклады" list={data} />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default Deposits;
