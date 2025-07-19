import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import Products from './pages/Products/Products';
import OrdersPage from './pages/OrdersPage/OrdersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Templates />}>
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<OrdersPage  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
