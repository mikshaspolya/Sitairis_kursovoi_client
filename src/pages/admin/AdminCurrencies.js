import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";
import CurrencyCourse from "../../components/CurrencyCourse";
import Chart from "../../components/Chart";
import { getCurrenciesForToday } from "../../api/currencies";

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

const AdminCurrencies = () => {
  const [usd, setUSD] = useState();
  const [eur, setEUR] = useState();
  const [rub, setRUB] = useState();

  useEffect(() => {
    getCurrenciesForToday().then((data) => {
      setUSD(data[7].Cur_OfficialRate);
      setEUR(data[9].Cur_OfficialRate);
      setRUB(data[21].Cur_OfficialRate);
      console.log(data);
    });
  }, []);

  const currencies = { usd: usd, eur: eur, rub: rub };

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
              <CurrencyCourse currencies={currencies} />
            </Col>
            <Col>
              <Chart />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default AdminCurrencies;
