import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { single_product_url as singleUrl } from "../utils/constants";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";

const initialState = {
  sidebar: false,
  products: [],
  loading: false,
  error: false,
  featured_products: [],
  single_product: {},
  single_error: false,
  single_loading: false,
  list_view: false,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async () => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const res = await fetch(url);
      const response = await res.json();

      dispatch({ type: GET_PRODUCTS_SUCCESS, response });
    } catch (error) {
      console.log("SOme error occured while fetching products");
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const getSingleProduct = async (id) => {
    const productUrl = `${singleUrl}${id}`;

    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const res = await fetch(productUrl);
      const response = await res.json();
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: response });
    } catch (error) {
      console.log("some error occured while fetching a single product");
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const setGridView = () => {
    dispatch({ type: "GRID_VIEW" });
  };

  const setListView = () => {
    dispatch({ type: "LIST_VIEW" });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        getSingleProduct,
        setGridView,
        setListView,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
