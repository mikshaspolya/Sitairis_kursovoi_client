import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: "#212529", color: "wheat", position: 'fixed', bottom: '0'}}>
      <Container style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
        <p>© 2023 «StrongBank» ОАО</p>
        <p>kursovoibanking@gmail.com</p>
        <p>Минск, ул. Гикало, дом 9, офис 71</p>
      </Container>
    </Container>
  );
};

export default Footer;
