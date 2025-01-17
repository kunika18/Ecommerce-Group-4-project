import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop'; 
import ShopCategory from './Pages/ShopCategory';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer'; // Import the Footer component
import { Login } from './Components/login'; // Corrected import
import { Signup } from './Components/signup';

function App() {
  return (
    <div>
    <BrowserRouter>
      
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Shop/>}/> 
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    
  );
}

export default App;
