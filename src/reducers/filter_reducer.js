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
      const temp = action.payload.map((a) => a.price);
      const max_price = Math.max(...temp);

      return {
        ...state,
        filteredData: action.payload,
        all_products: action.payload,
        filters: {
          ...state.filters,
          max_price: max_price,
          price: max_price,
        },
      };
    case SET_LISTVIEW:
      return { ...state, list_view: true };

    case SET_GRIDVIEW:
      return { ...state, list_view: false };

    case UPDATE_SORT:
      return { ...state, sort: action.payload };

    case SORT_PRODUCTS:
      const { sort, filteredData } = state;
      const compare = (a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }
        return 0;
      };
      let newData;
      if (sort === "lowestToHighest") {
        newData = filteredData.sort((a, b) => a.price - b.price);
      } else if (sort === "highestToLowest") {
        newData = filteredData.sort((a, b) => b.price - a.price);
      } else if (sort === "a_z") {
        newData = filteredData.sort((a, b) => compare(a, b));
      } else {
        newData = filteredData.sort((a, b) => compare(b, a));
      }

      return { ...state, filteredData: newData };

    case UPDATE_FILTERS:
      const name = action.payload.name;
      const value = action.payload.value;

      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, company, price, shipping } = state.filters;

      let tempProducts = [...all_products];

      if (text) {
        console.log("Entered in the text block");
        tempProducts = all_products.filter((product) => {
          return product.name.toLowerCase().startsWith(text);
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.company === company;
        });
      }

      if (shipping) {
        tempProducts = tempProducts.filter((product) => {
          return product.shipping === true;
        });
      }

      // tempProducts = tempProducts.filter(({ colors }) => {
      //   let found = false;
      //   colors.map((c) => {
      //     if (c === color) {
      //       found = true;
      //     }
      //   });
      //   return found;
      // });

      tempProducts = tempProducts.filter((product) => {
        return product.price <= price;
      });

      return {
        ...state,
        filteredData: tempProducts,
      };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          company: "all",
          category: "all",
          color: "all",
          shipping: false,
        },
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default filter_reducer;
