import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";

import { useParams } from "react-router-dom";
import AdminDepositData from "../../components/AdminDepositData";
import AdminDepositCards from "../../components/AdminDepositCards";
import { getAccountById } from "../../api/accounts";
import { getCards } from "../../api/cards";

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

const AdminShowUserDeposits = () => {
  const { id } = useParams();
  const [account, setAccount] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAccountById(id).then((data) => {
      setAccount(data);
    });
  }, []);

  useEffect(() => {
    getCards(id).then((data) => {
      setCards(data);
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
          <Row>
            <Col>
              <AdminDepositData account={account} />
            </Col>
            <Col>
              <AdminDepositCards cards={cards}/>
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default AdminShowUserDeposits;
