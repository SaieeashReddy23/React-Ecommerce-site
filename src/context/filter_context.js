import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  filteredData: [],
  test: false,
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [filterState, dispatchFilter] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, data: products });
  }, []);

  return (
    <FilterContext.Provider value={{ ...filterState }}>
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
