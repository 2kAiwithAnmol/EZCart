import react from "react";

const Sidebar = () => {
    return (
        <div className="w-64 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold mb-3">Categories</h2>
            <ul className="space-y-2">
                <li>
                    Headphones
                </li>
                <li>
                    Earbuds
                </li>
                <li>
                    Speaker
                </li>
                <li>
                    Accessories
                </li>
            </ul>
            <h2 className="text-2xl font-bold mt-5 mb-3">
                Price Range
            </h2>
            <ul>
                <li>Under ₹1000</li>
                <li>₹1000 - 3000</li>
                <li>₹3000 - ₹5000</li>
                <li>Above ₹5000</li>
            </ul>
        </div>
    )
}
export default Sidebar