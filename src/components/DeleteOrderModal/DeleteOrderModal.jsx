import React, { useState } from 'react';
import { Modal, Button, Image, Row, Col } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default  function DeleteOrderModal({ show, handleClose, handleDelete, item }) {
  return (
    <Modal show={show} onHide={handleClose} centered >
       <Modal.Header closeButton className="border-0 pb-0">
        <Modal.Title className="fs-6 fw-bold">
          Вы уверены, что хотите удалить этот приход?
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="pt-1">
        <Row className="align-items-center">
          <Col xs="auto" className="d-flex align-items-center">
            {/* Зелёная точка */}
            <span
              style={{
                display: 'inline-block',
                width: 10,
                height: 10,
                backgroundColor: 'green',
                borderRadius: '50%',
                marginRight: 10,
              }}
            />
            <Image
               src="https://i.pinimg.com/736x/96/5c/31/965c31197aa0d32ba5d46142e2d6fd9c.jpg"
              style={{ width: 40, height: 25 }}
              rounded
            />
           </Col>
          <Col>
            <div className="fw-bold text-truncate">{item}</div>
            <div className="text-muted small">SN: {item.serial || '12.3456789'}</div>
          </Col>
        </Row>
      </Modal.Body>

      <div
        className="d-flex justify-content-between align-items-center px-4 py-3"
        style={{
          backgroundColor: '#77c043', // зелёный как на скрине
          borderBottomLeftRadius: '0.3rem',
          borderBottomRightRadius: '0.3rem',
        }}
      >
        {/* Кнопка отмена */}
        <Button
          variant="light"
          className="fw-bold px-4"
          onClick={handleClose}
        >
          ОТМЕНИТЬ
        </Button>

        <Button
          variant="danger"
          className="fw-bold d-flex align-items-center gap-2 px-4"
          onClick={handleDelete}
        >
          <FaTrash /> УДАЛИТЬ
        </Button>
      </div>
    </Modal>
  );
};

