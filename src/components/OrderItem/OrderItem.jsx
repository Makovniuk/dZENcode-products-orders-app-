import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { BsListUl } from 'react-icons/bs';
import DeleteConfirmationModal from '../DeleteOrderModal/DeleteOrderModal';
import ProductsPanelList from '../ProductsPanelList/ProductsPanelList';

export default function OrderItem({
  title,
  productsCount,
  date,
  amountUsd,
  amountUah,
  id,
  isExpanded,
  isAnyExpanded,
  onToggle
}) {
  const [showModalDelete, setShowModalDelete] = useState(false);

  const compact = isAnyExpanded;
  const highlighted = isExpanded;

  return (
    <>
      <div className="d-flex align-items-start">
        <Card
          className={`mb-2 shadow-sm me-3 ${highlighted ? 'border-primary border-2' : ''}`}
          style={
            compact
              ? { width: '350px', transition: 'all 0.3s' }
              : { width: '100%', transition: 'all 0.3s' }
          }
        >
          <Card.Body className="py-2">
            <Row className="align-items-center">
              {compact ? (
                <>
                   <Col md={2}>
                    <Button variant="light" size="sm" onClick={onToggle}>
                      <BsListUl />
                    </Button>
                  </Col>
                  <Col md={4}>
                    <div>
                      <h6>{productsCount}</h6>
                    </div>
                    <div className="text-muted">Продукта</div>
                  </Col>
                  <Col md={6}>
                    <div className="text-muted text-center">{date.split('-')[1]}/12</div>
                    <div className="text-center">
                      <h6>{date}</h6>
                    </div>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={3}>
                    <Card.Title className="mb-2 text-truncate">{title}</Card.Title>
                  </Col>
                  <Col md={2}>
                    <Button variant="light" size="lg" onClick={onToggle}>
                      <BsListUl />
                    </Button>
                  </Col>
                  <Col md={2}>
                    <div>
                      <h6>{productsCount}</h6>
                    </div>
                    <div className="text-muted">Продукта</div>
                  </Col>
                  <Col md={2}>
                    <div className="text-muted text-center">{date.split('-')[1]}/12</div>
                    <div className="text-center">
                      <h6>{date}</h6>
                    </div>
                  </Col>
                  <Col md={2}>
                    <div className="text-muted">
                      {amountUsd ? `${amountUsd} $` : null}
                    </div>
                    <div>{amountUah ? `${amountUah} грн` : null}</div>
                  </Col>
                  <Col md={1} className="text-end">
                    <Button variant="light" size="sm" onClick={() => setShowModalDelete(true)}>
                      <FaTrash />
                    </Button>
                  </Col>
                </>
              )}
            </Row>
          </Card.Body>
        </Card>
      </div>

      {/* ✅ Модалка удаления */}
      {showModalDelete && (
        <DeleteConfirmationModal
          show={showModalDelete}
          handleClose={() => setShowModalDelete(false)}
          handleDelete={() => {
            console.log('Удалено!');
            setShowModalDelete(false);
          }}
          item={title}
        />
      )}
    </>
  );
}
