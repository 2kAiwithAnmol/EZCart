import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";

const Home = ({ searchTerm }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortOption, setSortOption] = useState("");


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

  return (
    <div className="flex">
      <Sidebar
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
        onRatingChange={handleRatingChange}
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

        <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
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
