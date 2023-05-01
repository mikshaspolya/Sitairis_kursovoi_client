import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../finance.jpg";
import YourData from "../../components/YourData";
import YourDeposits from "../../components/YourDeposits";
import { getUser, getUserAccounts } from "../../api/users";

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

const MyAccount = () => {
  const [data, setData] = useState({});
  const [accounts, setAccounts] = useState([]);
  const uid = localStorage.getItem("uid");

  useEffect(() => {
    getUser().then((data) => {
      setData(data);
      localStorage.setItem("id", data.id);
      localStorage.setItem("status", data.status);
      localStorage.setItem("login", data.login);
      console.log(data);
    });
  }, []);

  useEffect(() => {
    getUserAccounts(uid).then((data) => {
      setAccounts(data);
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
              <YourData user={data} />
            </Col>
            <Col>
              <YourDeposits list={accounts} />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default MyAccount;
