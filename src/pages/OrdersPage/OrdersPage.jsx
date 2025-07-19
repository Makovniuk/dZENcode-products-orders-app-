import Orders from '../Orders/Orders';

export default function OrdersPage() {
  return (
    <Orders
      title="Длинное предлинное длиннющее название "
      productsCount={23}
      date="06 / Апр / 2017"
      amountUsd="2,500.85"
      amountUah="250 000.50"
    />
  );
}
