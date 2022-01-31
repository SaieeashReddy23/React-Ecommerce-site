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
      break;
    case SET_GRIDVIEW:
      break;
    case UPDATE_SORT:
      break;
    case SORT_PRODUCTS:
      break;
    case UPDATE_FILTERS:
      break;
    case FILTER_PRODUCTS:
      break;
    case CLEAR_FILTERS:
      break;

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }

  return state;
};

export default filter_reducer;
