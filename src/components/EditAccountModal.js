import React from "react";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { updateUser } from "../api/users";

function EditAccountModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [date, setDate] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setName(props.name);
    setSurname(props.surname);
    setPhone(props.phone);
    setEmail(props.email);
    setDate(props.date);
    setShow(true);
  };

  const handleSubmit = async () => {
    try {
      const id = localStorage.getItem("id");
      const userData = {
        name: name,
        surname: surname,
        dateOfBirth: date,
        phoneNumber: phone,
        email: email,
      };
      const response = await updateUser(id, userData);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Редактировать данные профиля
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактирование</Modal.Title>
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
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Подтвердить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAccountModal;
