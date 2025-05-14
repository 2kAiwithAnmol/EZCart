import { useEffect, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import SkeletonCard from "../components/SkeletonCard";

const Home = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedPriceRange, selectedRating, sortOption]);

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleCategoryChange = (category) => setSelectedCategory(category);
  const handlePriceChange = (range) => setSelectedPriceRange(range);
  const handleRatingChange = (rating) => setSelectedRating(rating);

  const filteredProducts = products.filter((product) => {
    const isCategoryMatch = selectedCategory
      ? product.name.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;
    const isSearchMatch = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;

    let priceNum = parseInt(product.price.replace(/[^\d]/g, ""));
    let isPriceMatch = true;

    if (selectedPriceRange === "under1000") isPriceMatch = priceNum < 1000;
    else if (selectedPriceRange === "1000to3000")
      isPriceMatch = priceNum >= 1000 && priceNum <= 3000;
    else if (selectedPriceRange === "3000to5000")
      isPriceMatch = priceNum > 3000 && priceNum <= 5000;
    else if (selectedPriceRange === "above5000")
      isPriceMatch = priceNum > 5000;
    const isRatingMatch = selectedRating
      ? product.rating >= selectedRating
      : true;
    return isCategoryMatch && isPriceMatch && isRatingMatch && isSearchMatch;
  });

  const sortedProducts = [...filteredProducts];

  if (sortOption === "lowToHigh") {
    sortedProducts.sort(
      (a, b) =>
        parseInt(a.price.replace(/[^\d]/g, "")) -
        parseInt(b.price.replace(/[^\d]/g, ""))
    );
  } else if (sortOption === "highToLow") {
    sortedProducts.sort(
      (a, b) =>
        parseInt(b.price.replace(/[^\d]/g, "")) -
        parseInt(a.price.replace(/[^\d]/g, ""))
    );
  } else if (sortOption === "rating") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct, indexOfLastProduct
  );
  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchTerm,
    selectedCategory,
    selectedPriceRange,
    selectedRating,
    sortOption,
  ]);

  return (
    <div className="flex">
      <Sidebar
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        onRatingChange={handleRatingChange}
      />
      <div className="p-6 w-full">
        {/* Sort Dropdown */}
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

        {/* Pagination Buttons */}
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
                indexOfLastProduct < sortedProducts.length ? prev + 1 : prev
              )
            }
            disabled={indexOfLastProduct >= sortedProducts.length}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        {/* Product Grid */}
        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg mt-8">No products found.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Home;
