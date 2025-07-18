import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Templates from './components/Templates/Templates';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Templates />}>
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
