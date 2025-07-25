import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Templates from './components/Templates/Templates';
import OrdersList from './pages/OrdersList/OrdersList';
import ProductsList from './pages/ProductList/ProductList';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Templates />}>
            <Route path="products" element={<ProductsList />} />
            <Route path="orders" element={<OrdersList  />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
