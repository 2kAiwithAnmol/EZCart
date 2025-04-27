import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProductDetails from './pages/ProductDetails';
import Sidebar from "./components/Sidebar";
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
      </Routes>
    </Router>
    </>
  );
}

export default App;
