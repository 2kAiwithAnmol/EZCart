import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Sidebar from "./components/Sidebar";
import Cart from "./pages/Cart";
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

      </Routes>
    </Router>
    </>
  );
}

export default App;
