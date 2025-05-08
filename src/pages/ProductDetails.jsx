import { useParams } from 'react-router-dom';
import React from 'react';
import products from '../data/products';

const ProductDetails = () => {
    const {id} = useParams();
    const product = products.find((p) => p.id === parseInt(id));
    if(!product) {
        return <h2>Product Not Found</h2>
    }
    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name}
                className="w-full h-96 object-contain"
                />
                <div className="p-6">
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-black-600 font-semibold mb-4">{product.price}</p>
                    <p className="text-gray-600"> Experience premium quality with our {product.name}. Built to last, priced to impress!</p>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails
