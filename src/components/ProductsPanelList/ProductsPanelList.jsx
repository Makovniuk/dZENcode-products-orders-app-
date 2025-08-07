import React, { useEffect, useState, useCallback } from 'react';
import { Badge, Alert, Button, Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaTimes, FaTrash, FaCircle  } from 'react-icons/fa';
import thunks from '../../store/services/products/thunks';
import './ProductsPanelList.css';


const ProductsPanelList = ({ orderId, title, onClose }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductsList = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await dispatch(thunks.fetchProducts());
    } catch (err) {
      setError(err.message || 'Ошибка при загрузке товаров');
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProductsList();
  }, [fetchProductsList]);

  const filteredProducts = orderId
    ? products.filter(product => product.order == orderId)
    : products;

  return (
    <div className="products-panel-wrapper p-3 bg-white rounded shadow-sm position-relative mb-3">
      <button
        className="close-button"
        onClick={onClose}
        aria-label="Закрыть"
      >
        <FaTimes />
      </button>
      <div className="d-flex-col justify-content-between align-items-center mb-3">
         <h5 className="mb-0 text-truncate fw-semibold mb-3">
         {title}
        </h5>
        <Button variant="light" size="sm" className="d-flex align-items-center gap-2 px-3 py-2">
          <div className="circle-icon text-white">
            <FaPlus size={12} />
          </div>
          <span className="fw-semibold" style={{ color: 'rgb(134, 190, 72)' }}>Добавить продукт</span>
        </Button>
      </div>
      <div className="products-list">
        {loading ? (
          <div className="text-center py-4">
            <Spinner animation="border" />
          </div>
        ) : error ? (
          <Alert variant="danger">{error}</Alert>
        ) : filteredProducts.length === 0 ? (
          <Alert variant="info">Нет товаров для отображения</Alert>
        ) : (
          filteredProducts.map(product => (
            <Row 
            key={product.id} 
            className="align-items-center justify-content-between py-2 px-2 border-bottom"
            >
              <Col xs={1} className="text-center">
            <FaCircle color={product.status === 'Свободен' ? 'green' : 'orange'} size={15} />
             </Col>
            <Col md={8} className="d-flex align-items-center gap-2 overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/96/5c/31/965c31197aa0d32ba5d46142e2d6fd9c.jpg"
                alt="product"
                className="rounded"
                width="32"
                height="32"
              />
              <div className="flex-grow-1 text-truncate">
                <div className="fw-semibold">{product.title}</div>
                <div className="text-muted small text-truncate">SN: {product.serialNumber}</div>
              </div>
            </Col>

            <Col xs={2}>
            <Badge bg={product.status === 'Свободен' ? 'success' : 'warning'}>{product.status}</Badge>
          </Col>

            <Col md={1} className="text-end">
              <Button variant="light" size="sm" title="Удалить продукт">
                <FaTrash />
              </Button>
            </Col>
          </Row>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductsPanelList;
