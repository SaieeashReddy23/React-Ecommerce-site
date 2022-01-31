import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, filteredData: action.data };
    case SET_LISTVIEW:
      return { ...state, list_view: true };

    case SET_GRIDVIEW:
      return { ...state, list_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      return { ...state, filteredData: action.payload };

    case UPDATE_FILTERS:
      return {
        ...state,
        categoryFilter: action.payload.categoryFilter,
        category: action.payload.category,
      };

    case FILTER_PRODUCTS:
      return { ...state, filteredData: action.payload };

    case CLEAR_FILTERS:
      break;

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }

  return state;
};

export default filter_reducer;
