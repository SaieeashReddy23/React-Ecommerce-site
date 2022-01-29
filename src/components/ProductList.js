import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

import { useProductsContext } from "../context/products_context";

const ProductList = () => {
  const { products } = useProductsContext();

  return (
    <>
      {/* <GridView items={products} /> */}
      <ListView items={products} />
    </>
  );
};

export default ProductList;
