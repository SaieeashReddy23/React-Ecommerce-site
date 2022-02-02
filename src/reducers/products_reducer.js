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

const products_reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, sidebar: true };

    case SIDEBAR_CLOSE:
      return { ...state, sidebar: false };

    case GET_PRODUCTS_BEGIN:
      return { ...state, loading: true };

    case GET_PRODUCTS_SUCCESS:
      const featured_products = action.response.filter(
        (item) => item.featured === true
      );

      return {
        ...state,
        loading: false,
        products: action.response,
        featured_products,
      };

    case GET_PRODUCTS_ERROR:
      return { ...state, error: true, loading: false };

    case GET_SINGLE_PRODUCT_BEGIN:
      return { ...state, single_loading: true };

    case GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        single_loading: false,
        single_product: action.payload,
      };

    case GET_SINGLE_PRODUCT_ERROR:
      return { ...state, single_error: true, single_loading: false };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default products_reducer;
