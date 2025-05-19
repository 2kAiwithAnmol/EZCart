import { useState, useMemo } from "react";
import { Menu, X } from "lucide-react";

const Sidebar = ({ products, onCategoryChange, onPriceChange, onRatingChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // 🔹 Extract unique categories from products
  const categories = useMemo(() => {
    const catSet = new Set();
    products.forEach((p) => {
      if (p.category?.name) {
        catSet.add(p.category.name);
      }
    });
    return Array.from(catSet);
  }, [products]);

  const priceRanges = [
    { label: "Under ₹1000", value: "under1000" },
    { label: "₹1000 - ₹3000", value: "1000to3000" },
    { label: "₹3000 - ₹5000", value: "3000to5000" },
    { label: "Above ₹5000", value: "above5000" },
  ];

  const ratings = [
    { label: "4★ & above", value: 4 },
    { label: "3★ & above", value: 3 },
    { label: "2★ & above", value: 2 },
  ];

  return (
    <>
      <div className="sm:hidden p-4">
        <button className="text-blue-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`bg-white shadow-md rounded-lg p-6 w-64 sm:block ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <h2 className="text-2xl font-bold mb-3">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => onCategoryChange(category)}
              className="cursor-pointer hover:text-blue-500"
            >
              {category}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-5 mb-3">Price Range</h2>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li
              key={range.value}
              onClick={() => onPriceChange(range.value)}
              className="cursor-pointer hover:text-blue-500"
            >
              {range.label}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-bold mt-5 mb-3">Rating</h2>
        <ul className="space-y-2">
          {ratings.map((rating) => (
            <li
              key={rating.value}
              onClick={() => onRatingChange(rating.value)}
              className="cursor-pointer hover:text-blue-500"
            >
              {rating.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
