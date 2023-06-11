import { createContext, useContext, useState } from "react";
import PRODUCTS_DATA from "../shop-data.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS_DATA);
  const value = { products, setProducts };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(`useProducts 要在 ProductsProvider 的子组件中使用`);
  }

  return context;
};
