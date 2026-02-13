
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import RentPage from './pages/RentPage';  
import ServicesPage from './pages/ServicesPage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  

  return (
    <div className="app-shell">
      <Navbar title="Hardware Hub" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/rent" element={<RentPage />} />
           <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
