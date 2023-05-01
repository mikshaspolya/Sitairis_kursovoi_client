import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import styled from "styled-components";
import Navibar from "../../components/Navibar";
import photo from "../../finance.jpg";
import List from "../../components/List";
import { getUserOperations } from "../../api/users";

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
  .my-app-history {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
    width: 700px;
  }
`;

const History = () => {
  const [data, setData] = useState([]);
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    getUserOperations(uid).then((data) => {
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
          <List text="Ваша история" list={data.reverse()} />
        </Container>
      </Styles>
    </>
  );
};

export default History;
