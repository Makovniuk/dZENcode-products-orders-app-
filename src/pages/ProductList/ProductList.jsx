import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsItem from '../../components/ProductsItem/ProductsItem';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import thunks from '../../store/services/products/thunks';

const ProductsList = ({ orderId }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedType, setSelectedType] = useState('');

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

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  // 🔹 Фильтрация по orderId
  const productsForOrder = orderId
  ? products.filter(product => product.order === orderId)
  : products;
  console.log(orderId, productsForOrder);

  // 🔹 Уникальные типы из продуктов конкретного заказа
  const uniqueTypes = [...new Set(productsForOrder.map(p => p.type))];

  // 🔹 Фильтрация по типу
  const filteredProducts = selectedType
    ? productsForOrder.filter(p => p.type === selectedType)
    : productsForOrder;

  if (loading) {
    return (
      <Container className="pt-5 text-center">
        <Spinner animation="border" />
        <p>Загрузка товаров...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="pt-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container fluid className="py-3">
      {!orderId &&
      <Row className="mb-3 align-items-center">
        <Col md={1} className="mb-3">
          <h3 className="mb-0">Продукты/{filteredProducts.length}</h3>
        </Col>
        <Col md={1} className="mb-3">
          <p className="mb-0 text-end text-muted">Тип:</p>
        </Col>
        <Col md={3} className="mb-3 text-start">
          <Form.Select value={selectedType} onChange={handleTypeChange}>
            <option value="">Все типы</option>
            {uniqueTypes.map((type, idx) => (
              <option key={idx} value={type}>{type}</option>
            ))}
          </Form.Select>
        </Col>
      </Row>
}
      {filteredProducts.length === 0 ? (
        <Alert variant="info">Нет товаров для отображения</Alert>
      ) : (
        filteredProducts.map(product => (
          <ProductsItem
            key={product.id}
            title={product.title}
            status={product.status}
            isNew={product.isNew}
            type={product.type}
            serialNumber={product.serialNumber}
            dateStart={product.guarantee.start}
            dateEnd={product.guarantee.end}
            usd={product.price.find(p => p.symbol === 'USD')?.value}
            uah={product.price.find(p => p.symbol === 'UAH')?.value}
            groupName="Длинное предлинное длиннющее название группы"
            user="—"
            arrivalName="Длинное предлинное длиннющее название прихода"
            arrivalDate={product.date}
          />
        ))
      )}
    </Container>
  );
};

export default ProductsList;
