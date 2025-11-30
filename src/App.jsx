import './App.css';
import LoginPage from '../components/pages/login/LoginPage';
import OrderPage from '../components/pages/order/OrderPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="login" element={ <LoginPage/> } />
        <Route path="commande/:name" element={ <OrderPage/> } />
      </Routes>
    </div>
  );
}

export default App;
