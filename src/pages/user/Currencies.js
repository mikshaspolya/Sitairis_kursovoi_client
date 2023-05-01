import React, {useState, useEffect} from "react";
import Chart from "../../components/Chart";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../finance.jpg";
import CurrencyCourse from "../../components/CurrencyCourse";
import { getCurrenciesForToday } from "../../api/currencies";

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

const Currencies = () => {
const [usd, setUSD] = useState();
const [eur, setEUR] = useState();
const [rub, setRUB] = useState();

  useEffect(() => {
    getCurrenciesForToday().then((data) => {
      setUSD(data[7].Cur_OfficialRate)
      setEUR(data[9].Cur_OfficialRate)
      setRUB(data[21].Cur_OfficialRate)
      console.log(data);
    });
  }, []);


  const currencies = { usd: usd, eur: eur, rub: rub };

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

export default Currencies;
