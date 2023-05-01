import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";


const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    color: wheat;
    &:hover {
      color: white;
    }
    text-decoration: none;
  }
`;

function MainNavibar(props) {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand style={{ marginLeft: "20px" }}>
              Интернет-банкинг
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default MainNavibar;
