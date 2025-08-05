// OrdersWithProducts.jsx
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import OrdersList from '../../pages/OrdersList/OrdersList';
import ProductsList from '../../pages/ProductList/ProductList';

const OrdersWithProducts = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  return (
    <Container fluid className="pt-4">
      <Row>
        <Col md={4}>
          <OrdersList
            onSelectOrder={setSelectedOrderId}
            selectedOrderId={selectedOrderId}
          />
        </Col>
        <Col md={8}>
          {selectedOrderId ? (
            <ProductsList selectedOrderId={selectedOrderId} />
          ) : (
            <div className="text-muted mt-5">Выберите приход слева, чтобы увидеть его товары</div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersWithProducts;
