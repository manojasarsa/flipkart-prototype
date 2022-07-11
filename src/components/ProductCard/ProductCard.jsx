import "./productcard.css";

export const ProductCard = ({ product }) => {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={product.image} alt="product" />
            </div>
            <div className="product-details">
                <li className="brand-name">{product.brand}</li>
                <li>₹ {product.price}</li>
                <li>{product.category}</li>
                <li>Size {product.size}</li>
            </div>
        </div>
    )
}