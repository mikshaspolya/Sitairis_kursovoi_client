import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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

function Navibar(props) {
  return (
    <>
      <Styles>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link to={props.link1}>
              <Navbar.Brand style={{ marginLeft: "20px" }}>
                Интернет-банкинг
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav style={{ marginRight: "auto", marginLeft: "20px" }}>
                <Nav.Link>
                  <Link to={props.link1}>Мой аккаунт</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={props.link2}>{props.text1}</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={props.link3}>{props.text2}</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={props.link4}>Кредиты</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={props.link5}>Вклады</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={props.link6}>Курсы валют</Link>
                </Nav.Link>
              </Nav>
              <Nav style={{ marginLeft: "auto", marginRight: "20PX" }}>
                <Link to="/main">
                  <Button variant="outline-light">Выйти</Button>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Styles>
    </>
  );
}

export default Navibar;
