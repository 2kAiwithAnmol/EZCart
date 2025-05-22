import React from "react";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cartItems } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Shipping Form */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Address" className="w-full border p-2 rounded" />
            <input type="text" placeholder="City" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Postal Code" className="w-full border p-2 rounded" />
            <input type="text" placeholder="Phone Number" className="w-full border p-2 rounded" />
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity} x ₹{item.price}
                    </p>
                  </div>
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-4 font-semibold">
                <span>Subtotal:</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>₹{calculateTotal()}</span>
              </div>

              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded mt-4">
                Place Order
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
