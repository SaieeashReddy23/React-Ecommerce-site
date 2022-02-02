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
  list_view: false,
  all_products: [],
  sort: "lowestToHighest",
  sai: [],
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [filterState, dispatchFilter] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatchFilter({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatchFilter({ type: SET_LISTVIEW });
  };

  const updateFilter = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "shipping") {
      value = e.target.checked;
    }

    dispatchFilter({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const updateSort = (e) => {
    dispatchFilter({ type: UPDATE_SORT, payload: e.target.value });
  };

  const clearFilter = () => {
    dispatchFilter({ type: CLEAR_FILTERS });
  };

  useEffect(() => {
    dispatchFilter({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatchFilter({ type: FILTER_PRODUCTS });
    dispatchFilter({ type: SORT_PRODUCTS });
  }, [products, filterState.sort, filterState.filters]);

  return (
    <FilterContext.Provider
      value={{
        ...filterState,
        updateSort,
        setGridView,
        setListView,
        updateFilter,
        clearFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};
