import React from "react"
import { useCart } from "../context/CartContext"
const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain transition-transform duration-200 hover:scale-105"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-green-600 font-bold">{product.price}</p>
            <button
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    )
}
export default ProductCard