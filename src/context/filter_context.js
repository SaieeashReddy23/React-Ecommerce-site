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
  categoryFilter: false,
  category: "",
  searchFilter: false,
  search: "",
  colorsFilter: false,
  colors: "",
  priceFilter: false,
  price: 0,
  freeShipping: false,
  sort: "lowestToHighest",
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [filterState, dispatchFilter] = useReducer(reducer, initialState);

  const loadProducts = () => {
    const newProducts = products.sort((a, b) => a.price - b.price);
    dispatchFilter({ type: LOAD_PRODUCTS, data: newProducts });
  };

  const setGridView = () => {
    dispatchFilter({ type: SET_GRIDVIEW });
  };

  const setListView = () => {
    dispatchFilter({ type: SET_LISTVIEW });
  };

  const selectCategory = (category) => {
    if (category === "All") {
      dispatchFilter({
        type: UPDATE_FILTERS,
        payload: {
          categoryFilter: false,
          category: "",
        },
      });
      dispatchFilter({ type: FILTER_PRODUCTS, payload: products });
    } else {
      dispatchFilter({
        type: UPDATE_FILTERS,
        payload: {
          categoryFilter: true,
          category: category,
        },
      });
      filterProducts(category);
    }
  };

  const filterProducts = (category) => {
    const newProducts = products.filter((item) => item.category === category);

    dispatchFilter({ type: FILTER_PRODUCTS, payload: newProducts });
  };

  const sortProducts = (value) => {
    dispatchFilter({ type: UPDATE_SORT, payload: value });
    reallySortProducts(value);
  };

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const reallySortProducts = (value) => {
    if (value === "lowestToHighest") {
      const newData = filterState.filteredData.sort(
        (a, b) => a.price - b.price
      );
      dispatchFilter({ type: SORT_PRODUCTS, payload: newData });
    } else if (value === "highestToLowest") {
      const newData = filterState.filteredData.sort(
        (a, b) => b.price - a.price
      );
      dispatchFilter({ type: SORT_PRODUCTS, payload: newData });
    } else if (value === "a_z") {
      const newData = filterState.filteredData.sort((a, b) => compare(a, b));

      dispatchFilter({ type: SORT_PRODUCTS, payload: newData });
    } else {
      const newData = filterState.filteredData.sort((a, b) => compare(b, a));

      dispatchFilter({ type: SORT_PRODUCTS, payload: newData });
    }
  };

  useEffect(() => {
    loadProducts();
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...filterState,
        loadProducts,
        setGridView,
        setListView,
        selectCategory,
        sortProducts,
        reallySortProducts,
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
