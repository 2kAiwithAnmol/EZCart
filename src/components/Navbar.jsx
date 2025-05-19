import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';  // Importing AuthContext

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useCart();
  const { isAuthenticated, logout } = useAuth();  // Accessing authentication state from context
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex bg-white shadow-md px-6 py-4 justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">EZCart</Link>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="border rounded px-3 py-1 w-60"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="md:hidden cursor-pointer">
        {menuOpen ? (
          <X onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} flex-col text-center absolute top-16 left-0 w-full bg-white p-6 gap-4 md:gap-6 md:flex md:flex-row md:static md:w-auto md:p-0 md:bg-transparent`}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart {totalItems > 0 && <span className="text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full ml-1">{totalItems}</span>}</Link></li>
        
        {/* Conditional rendering based on authentication */}
        {!isAuthenticated ? (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>SignUp</Link></li>
          </>
        ) : (
          <li><button onClick={() => {logout(); setMenuOpen(false)}}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
