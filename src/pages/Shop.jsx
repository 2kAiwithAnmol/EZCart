import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductCardSkeleton = () => {
  return (
    <div className="border rounded p-4 shadow animate-pulse">
      <div className="bg-gray-300 h-40 mb-4 rounded"></div>
      <div className="h-6 bg-gray-300 mb-2 rounded"></div>
      <div className="h-4 bg-gray-300 rounded"></div>
    </div>
  );
};
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
  <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Shop All Products</h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
