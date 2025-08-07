import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../../components/OrderItem/OrderItem';
import ProductsPanelList from '../../components/ProductsPanelList/ProductsPanelList';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import thunks from '../../store/services/orders/thunks';
import productsThunks from '../../store/services/products/thunks';

const OrdersList = () => {
  const { orders } = useSelector((state) => state.ordersReducer);
  const { products } = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchAllData = useCallback(async () => {
    setLoading(true);
    try {
      await dispatch(thunks.fetchOrders());
      await dispatch(productsThunks.fetchProducts());
    } catch (err) {
      setError(err.message || 'Ошибка при загрузке заказов');
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (orders.length === 0) {
      fetchAllData();
    } else {
      setLoading(false);
    }
  }, [fetchAllData, orders.length]);

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

  const selectedOrder = orders.find(order => order.id == selectedOrderId);

  const quantityProducts = (orderId) => {
    const productsCount = products.filter(p => p.order == orderId);
    return productsCount.length;
  };

  const getOrderTotal = (orderId, currency = 'USD') => {
    const orderProducts = products.filter(p => p.order == orderId);
  
    return orderProducts.reduce((sum, product) => {
      const priceEntry = product.price?.find(p => p.symbol == currency);
      return sum + (priceEntry?.value || 0);
    }, 0);
  };

  return (
    <div>
    <h1 className="mb-4">Приходы / {orders.length}</h1>

    {orders.length === 0 ? (
      <Alert variant="info">Нет заказов для отображения</Alert>
    ) : (
      <div className="d-flex align-items-start gap-4">
        <div className="flex-grow-1">
          {orders.map((order) => (
            <OrderItem
              key={order.id}
              title={order.title}
              productsCount={quantityProducts(order.id)}
              date={order.data}
              amountUsd={getOrderTotal(order.id, 'USD')}
              amountUah={getOrderTotal(order.id, 'UAH')}
              id={order.id}
              isExpanded={selectedOrderId === order.id}
              isAnyExpanded={Boolean(selectedOrderId)}
              onToggle={() =>
                setSelectedOrderId(
                  selectedOrderId === order.id ? null : order.id
                )
              }
            />
          ))}
        </div>

        {selectedOrderId && (
        <div
            style={{
              width: '800px',
              maxHeight: '80vh',
              overflowY: 'auto',
              backgroundColor: '#fff',
              boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
              borderRadius: '8px',
              padding: '1rem',
            }}
          >
            <ProductsPanelList
              orderId={selectedOrderId}
              title={selectedOrder?.title}
              onClose={() => setSelectedOrderId(null)}
            />
        </div>
        )}
      </div>
    )}
  </div>
  );
};

export default OrdersList;
