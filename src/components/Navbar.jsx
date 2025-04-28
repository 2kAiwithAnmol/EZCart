import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">EZCart</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li className="hover:text-blue-500 cursor-pointer"><Link to="/">Home</Link></li>
        <li className="hover:text-blue-500 cursor-pointer"><Link to="/shop">Shop</Link></li>
        <li className="hover:text-blue-500 cursor-pointer"><Link to="/about">About</Link></li>
        <li className="hover:text-blue-500 cursor-pointer"><Link to="/contact">Contact</Link></li>
        <li className="hover:text-blue-500 cursor-pointer"><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
