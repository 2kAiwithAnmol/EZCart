import React from "react"
import { useCart } from "../context/CartContext"
const ProductCard = ({product}) => {
    const {addToCart} = useCart();
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
        <img src={product.image} alt={product.name} />
        <h2 class="text-lg font-semibold mt-2">{product.name}</h2>
        <p class="text-green-600 font-bold">{product.price}</p>
        <button
        className="mt-2 px-4 py-1 bg-blue-600 text-white rounded"
        onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}
export default ProductCard