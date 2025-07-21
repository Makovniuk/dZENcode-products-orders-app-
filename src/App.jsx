import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import OrdersList from './pages/OrdersList/OrdersList';
import ProductsList from './pages/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Templates />}>
          <Route path="products" element={<ProductsList />} />
          <Route path="orders" element={<OrdersList  />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
