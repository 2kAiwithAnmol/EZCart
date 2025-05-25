import  {useState} from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./components/Checkout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
           <ScrollToTop />
          <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <Routes>
            <Route path="/" element={<Home searchTerm={searchTerm}/>} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
