import ProductCard from "../../components/product-card/product-card.component";
import { useProducts } from "../../context/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useProducts();

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
