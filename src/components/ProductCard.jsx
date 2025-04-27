const ProductCard = ({product}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
        <img src={product.image} alt={product.name} />
        <h2 class="text-lg font-semibold mt-2">{product.name}</h2>
        <p class="text-green-600 font-bold">{product.price}</p>
        </div>
    )
}
export default ProductCard