import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../admin.jpg";
import YourData from "../../components/YourData";
import AdminUserList from "../../components/AdminUserList";
import { getUser, getUsers } from "../../api/users";

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

const AdminAccount = () => {
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser().then((data) => {
      setData(data);
      localStorage.setItem("id", data.id);
      localStorage.setItem("status", data.status);
      localStorage.setItem("login", data.login);
    });
  }, []);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
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
              <YourData user={data} />
            </Col>
            <Col>
              <AdminUserList
                text="Все пользователи"
                list={users.slice(1)}
                path="/adminShowUser/"
              />
            </Col>
          </Row>
        </Container>
      </Styles>
    </>
  );
};

export default AdminAccount;
