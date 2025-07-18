import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>S/ {product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`}>Ver más</Link>
      <button onClick={() => dispatch({ type: "ADD", product })}>Agregar</button>
    </div>
  );
};

export default ProductCard;
