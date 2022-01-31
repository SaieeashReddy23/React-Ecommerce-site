import React, { useEffect } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filteredData, list_view } = useFilterContext();

  return (
    <>
      {list_view ? (
        <ListView items={filteredData} />
      ) : (
        <GridView items={filteredData} />
      )}
    </>
  );
};

export default ProductList;
