import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { cartItems } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-wrap justify-between items-center relative">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">EZCart</Link>
      </div>

      {/* Search Bar - visible on all screen sizes */}
      <div className="w-full sm:w-auto mt-4 sm:mt-0">
        <input
          type="text"
          placeholder="Search products..."
          className="border rounded px-3 py-1 w-full sm:w-60"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Mobile menu toggle icon */}
      <div className="md:hidden z-30 ml-auto">
        {menuOpen ? (
          <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Menu Links */}
      <ul
        className={`
          flex-col gap-4 text-center absolute top-full left-0 w-full bg-white p-6 z-20
          max-h-screen overflow-y-auto
          md:gap-6 md:flex md:flex-row md:static md:w-auto md:p-0 md:bg-transparent md:max-h-none md:overflow-visible
          ${menuOpen ? 'flex' : 'hidden'}
        `}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
            {totalItems > 0 && (
              <span className="text-sm bg-blue-600 text-white px-2 py-0.5 rounded-full ml-1">
                {totalItems}
              </span>
            )}
          </Link>
        </li>

        {!isAuthenticated ? (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
            <li><Link to="/signup" onClick={() => setMenuOpen(false)}>SignUp</Link></li>
          </>
        ) : (
          <li>
            <button onClick={() => { logout(); setMenuOpen(false); }}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
