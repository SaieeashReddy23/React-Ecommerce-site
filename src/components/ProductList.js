import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

import { useProductsContext } from "../context/products_context";

const ProductList = () => {
  const { products, list_view } = useProductsContext();

  return (
    <>
      {list_view ? (
        <ListView items={products} />
      ) : (
        <GridView items={products} />
      )}
    </>
  );
};

export default ProductList;
