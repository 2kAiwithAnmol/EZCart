import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex bg-white shadow-md px-6 py-4 justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">EZCart</Link>
      </div>
      <div className="md:hidden cursor-pointer">
        {menuOpen ? (<X onClick={() => setMenuOpen(false)} />) : (<Menu onClick={() => setMenuOpen(true)} />)}
      </div>
      <ul
        className={`transition-all  duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} flex-col text-center absolute top-16 left-0 w-full bg-white p-6 gap-4 md:gap-6 md:flex md:flex-row md:static md:w-auto md:p-0 md:bg-transparent`}
      >
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link></li>
        <li><Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link></li>
        <li><Link to="/signup" onClick={() => setMenuOpen(false)}>SignUp</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
