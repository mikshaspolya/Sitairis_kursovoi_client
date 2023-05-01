import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import AddUserModal from "./AddUserModal";
import { useNavigate } from "react-router-dom";

const Styles = styled.div`
  .yourDeposits {
    background-color: white;
    opacity: 0.85;
    border-radius: 20px;
    padding: 20px 20px;
    justifycontent: center;
  }
`;

function renderComponent(str) {
  switch (str) {
    case "Все пользователи":
      return <AddUserModal />;
    case "Счета пользователя":
      return <div></div>;
    default:
      return <div>Invalid option</div>;
  }
}

const AdminUserList = (props) => {
  const navigate = useNavigate();
  const handleClick = (itemId) => {
    navigate(`${props.path}${itemId}`);
  };

  const toString = (item) => {
    if (props.text === "Все пользователи") {
      var role;
      if (item.role === "ROLE_ADMIN") role = "администратор";
      if (item.role === "ROLE_USER") role = "клиент";
      return `${item.id}. ${item.name} ${item.surname}, логин: ${item.login}, почта: ${item.email}, роль: ${role}`;
    } else if (props.text === "Счета пользователя") {
      return `Счет: ${item.id}, ${item.dateOfIssue}, ${item.status}, сумма = ${item.sum} ${item.currency}`;
    }
  };

  return (
    <Styles>
      <Container className="yourDeposits" style={{ width: "700px" }}>
        <h3 style={{ textAlign: "center" }}>{props.text}</h3>
        <ListGroup variant="flush">
          {props.list.length === 0 ? (
            <p style={{ textAlign: "center" }}>У клиента еще нет счетов</p>
          ) : (
            props.list.map((item) => (
              <ListGroup.Item
                action
                onClick={() => handleClick(item.id)}
                key={item.id}
              >
                {toString(item)}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <div>{renderComponent(props.text)}</div>
        </Container>
      </Container>
    </Styles>
  );
};

export default AdminUserList;
