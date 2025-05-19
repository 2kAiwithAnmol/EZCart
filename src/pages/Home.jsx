import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SkeletonCard from "../components/SkeletonCard";

const Home = ({ searchTerm }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOption, setSortOption] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // 🔹 Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();

        // Add random rating for demo
        const withRating = data.map((p) => ({
          ...p,
          rating: Math.floor(Math.random() * 3) + 3,
        }));

        setAllProducts(withRating);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let updated = [...allProducts];

    if (searchTerm) {
      updated = updated.filter((p) =>
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      updated = updated.filter((p) => p.category?.name === selectedCategory);
    }

    if (selectedPriceRange) {
      updated = updated.filter((p) => {
        const price = p.price;
        if (selectedPriceRange === "under1000") return price < 1000;
        if (selectedPriceRange === "1000to3000") return price >= 1000 && price <= 3000;
        if (selectedPriceRange === "3000to5000") return price > 3000 && price <= 5000;
        if (selectedPriceRange === "above5000") return price > 5000;
        return true;
      });
    }

    if (selectedRating) {
      updated = updated.filter((p) => p.rating >= selectedRating);
    }

    if (sortOption === "lowToHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      updated.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(updated);
    setCurrentPage(1);
  }, [
    allProducts,
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    selectedRating,
    sortOption,
  ]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex">
      <Sidebar
        products={allProducts}
        onCategoryChange={setSelectedCategory}
        onPriceChange={setSelectedPriceRange}
        onRatingChange={setSelectedRating}
      />
      <div className="p-6 w-full">
        <div className="flex justify-end mb-4">
          <select
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-2 py-1 rounded"
            value={sortOption}
          >
            <option value="">Sort By</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) =>
                indexOfLastProduct < filteredProducts.length ? prev + 1 : prev
              )
            }
            disabled={indexOfLastProduct >= filteredProducts.length}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
