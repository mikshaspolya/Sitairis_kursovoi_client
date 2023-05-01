import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";

import { useParams } from "react-router-dom";
import UserData from "../../components/UserData";
import AdminUserList from "../../components/AdminUserList";
import { getUserAccounts, getUserById } from "../../api/users";

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

const AdminShowUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    getUserById(id).then((data) => {
      setUser(data);
      localStorage.setItem("userUid", data.uuid);
      getUserAccounts(localStorage.getItem("userUid")).then((data) => {
        setAccounts(data);
      });
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
              <UserData user={user} />
            </Col>
            <Col>
              <AdminUserList
                text="Счета пользователя"
                list={accounts}
                path="/adminShowUserDeposits/"
              />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default AdminShowUser;
