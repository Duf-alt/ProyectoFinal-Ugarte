import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { dispatch } = useCart();

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>S/ {product.price.toFixed(2)}</p>
      <button onClick={() => dispatch({ type: "ADD", product })}>Agregar al carrito</button>
    </div>
  );
};

export default ProductDetail;
