import react, {useState} from "react";
import { Menu, X } from "lucide-react";
const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className="sm:hidden p-4">
            <button className="text-blue-600"
            onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X size={28} /> : <Menu size={28} />}</button>
            </div>
            <div className={`bg-white shadow-md rounded-lg p-6 w-64 sm:block ${isOpen ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-bold mb-3">Categories</h2>
                <ul className="space-y-2">
                    <li>Headphones</li>
                    <li>Earbuds</li>
                    <li>Speakers</li>
                    <li>Accessories</li>
                </ul>
                <h2 className="text-xl font-bold mt-5 mb-3">Price Range</h2>
                <li>Under ₹1000</li>
                <li>₹1000 - ₹3000</li>
                <li>₹3000 - ₹5000</li>
                <li>Above ₹5000</li>
            </div>
        </>
    )
}
export default Sidebar