import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
