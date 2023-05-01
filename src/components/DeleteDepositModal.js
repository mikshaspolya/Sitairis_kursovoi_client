import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {deleteAccount} from '../api/accounts'

function DeletedepositModal(props) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const response = await deleteAccount(props.id);
    navigate(`/userAccount`);
    handleClose();
  };

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Удалить счет
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Вы действительно хотите удалить этот счет?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Да, хочу
          </Button>
          <Button variant="outline-dark" onClick={handleClose}>
            Нет
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeletedepositModal;
