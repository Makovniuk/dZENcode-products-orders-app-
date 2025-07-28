import React, { useEffect, useState, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../../components/OrderItem/OrderItem';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import thunks from '../../store/services/orders/thunks';

const OrdersList = () => {
  const { orders } = useSelector((state) => state.ordersReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrdersList = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(thunks.fetchOrders());
    } catch (err) {
      setError(err.message || 'Ошибка при загрузке товаров');
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (orders.length === 0) {
      fetchOrdersList();
    } else {
      setLoading(false);
    }
  }, [fetchOrdersList, orders.length]);

  if (loading) {
    return (
      <Container className="pt-5 text-center">
        <Spinner animation="border" />
        <p>Загрузка заказов...</p>
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
    <>
      <h1 className="mb-4">Приходы / {orders.length} </h1>
      {orders.length === 0 ? (
        <Alert variant="info">Нет заказов для отображения</Alert>
      ) : (
        orders.map(order => (
          <OrderItem
            key={order.id}
            title={order.title}
            productsCount={order.productsCount}
            date={order.data}
            amountUsd={order.priceUSD}
            amountUah={order.priceUAH}
          />
        ))
      )}
    </>
  );
};

export default OrdersList;
