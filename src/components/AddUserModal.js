import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { createUser } from "../api/users";

function AddUserModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const [uuid, setUUID] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userData = {
      login: login,
      uuid: uuid,
      name: name,
      surname: surname,
      dateOfBirth: date,
      phoneNumber: phone,
      email: email,
      password: password,
    };
    const response = await createUser(userData);
    console.log(response);
    //window.location.reload();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Создать пользователя
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Создание пользователя</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Имя</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Фамилия</Form.Label>
              <Form.Control
                type="text"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Дата рождения</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Почта</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Логин</Form.Label>
              <Form.Control
                type="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>UUID</Form.Label>
              <Form.Control
                type="text"
                value={uuid}
                onChange={(e) => setUUID(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Регистрация
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddUserModal;
