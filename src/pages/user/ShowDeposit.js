import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../finance.jpg";

import { useParams } from "react-router-dom";
import DepositData from "../../components/DepositData";
import DepositCards from "../../components/DepositCards";

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

const ShowDeposit = () => {
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
              <DepositData account={account} />
            </Col>
            <Col>
              <DepositCards cards={cards} />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default ShowDeposit;
