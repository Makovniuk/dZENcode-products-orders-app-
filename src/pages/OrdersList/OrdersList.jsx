import React, { useEffect, useState } from 'react';
import { orders } from '../../api/orders/orders';
import OrderItem from '../../components/OrderItem/OrderItem'; // путь к твоему компоненту
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import store from '../../store/store';

const OrdersList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const storeData = store.getState();
  console.log(storeData);

  useEffect(() => {
    orders.get()
      .then((data) => {
        setOrderList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Ошибка при загрузке заказов');
        setLoading(false);
      });
  }, []);

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
      <h1 className="mb-4">Приходы / {orderList.length} </h1>
      {orderList.length === 0 ? (
        <Alert variant="info">Нет заказов для отображения</Alert>
      ) : (
        orderList.map(order => (
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
