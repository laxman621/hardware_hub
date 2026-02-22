import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import RentPage from './pages/RentPage';  
import ServicesPage from './pages/ServicesPage';
import RegisterPage from './pages/RegisterPage';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import './App.css';

function App() {
  

  return (
  <AuthProvider>
    <div className="app-shell">
      <Navbar title="Hardware Hub" />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shop" element={<ProtectedRoute><ShopPage /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/rent" element={<ProtectedRoute><RentPage /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><ServicesPage /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  </AuthProvider>
  );
}

export default App;
