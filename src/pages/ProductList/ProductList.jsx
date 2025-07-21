import React, { useEffect, useState } from 'react';
import { products } from '../../api/products/products';
import ProductsItem from '../../components/ProductsItem/ProductsItem'; 
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

const ProductsList = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    products.get()
      .then((data) => {
        setProductList(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Ошибка при загрузке товаров');
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
      <h1 className="mb-4">Продукты/ {productList.length} </h1>
      {productList.length === 0 ? (
        <Alert variant="info">Нет заказов для отображения</Alert>
      ) : (
        productList.map(product => (
          <ProductsItem
            key = {product.id}
            title = {product.title}
            status={product.status}
            isNew = {product.isNew}
            type = {product.type}
            serialNumber = {product.serialNumber}
            dateStart = {product.guarantee.start}
            dateEnd = {product.guarantee.end}
            usd = {product.price.find(p => p.symbol === 'USD')?.value}
            uah = {product.price.find(p => p.symbol === 'UAH')?.value}
            groupName = 'Длинное предлинное длиннющее название группы'
            user = '—'
            arrivalName = 'Длинное предлинное длиннющее название прихода'
            arrivalDate = {product.date}
          />
        ))
      )}
    </>
  );
};

export default ProductsList;
