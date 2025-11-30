import './App.css';
import LoginPage from '../components/pages/login/LoginPage';
import OrderPage from '../components/pages/order/OrderPage';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../components/pages/error/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
