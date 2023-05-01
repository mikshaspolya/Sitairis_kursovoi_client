import React from "react";
import { Container, Button } from "react-bootstrap";

const AddDelButtons = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "10px",
      }}
    >
      <Button variant="outline-dark">Добавить</Button>
      <Button variant="outline-dark">Удалить</Button>
    </Container>
  );
};

export default AddDelButtons;
