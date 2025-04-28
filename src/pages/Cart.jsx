import React from "react";
const Cart = () => {
    const CartItems = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: "₹999",
            quantity: 1,
            image: "https://vlebazaar.in/image/cache/wp/gj/-boAt-Rockerz-510-Super-Extra-Bass-Bluetooth-Headset-Furious-blue-On-th/-boAt-Rockerz-510-Super-Extra-Bass-Bluetooth-Headset-Furious-blue-On-the-Ear-800x800h.webp"
        },
        {
            id: 2,
            name: "Wireless Speaker ",
            price: "₹4999",
            quantity: 2,
            image: "https://m.media-amazon.com/images/I/81gtmDxxC2L._AC_UF1000,1000_QL80_.jpg"

        }
    ]
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
            <div className="space-y-6">
                {CartItems.map((item) => (
                    <div key={item.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
                        <img src={item.image} alt={item.name} className="w-24 h-24 object-contain"/>
                        <div className="ml-6 flex-1">
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p2 className="text-green-600 font-semibold">{item.price}</p2>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">-</button>
                            <span>{item.quantity}</span>
                            <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cart