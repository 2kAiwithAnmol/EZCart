import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  return (
    <div className="p-4 sm:p-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600 mt-10 text-lg">
          Your cart is empty
        </div>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white shadow-md rounded-lg p-4">
                <img
                src={item.images?.[0] || "https://via.placeholder.com/150x150"}
                alt={item.title}
                className="w-32 h-32 object-contain mb-4 sm:mb-0"
              />

              <div className="sm:ml-6 flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold">{item.name}</h2>
                <p className="text-green-600 font-semibold">{item.price}</p>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-4 sm:mt-0">
                <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-600 font-semibold">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
