import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, color, amount, item, product } = action.payload;
      // const cart = [...state.cart, item];
      // const total_products = state.total_products + amount;
      // const total_amount = state.total_amount + amount * (item.price / 100);

      const tempItem = state.cart.find((i) => i.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            cartItem.amount += amount;
          } else {
            return cartItem;
          }
        });

        return { ...state, cart: tempCart };
      } else {
        const newItem = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }

    case CLEAR_CART:
      return { ...state, cart: [] };

    case COUNT_CART_TOTALS:
      break;

    case REMOVE_CART_ITEM:
      const cart = state.cart.filter((item) => item.id != action.payload);
      return { ...state, cart };

    case TOGGLE_CART_ITEM_AMOUNT:
      break;

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }

  return state;
};

export default cart_reducer;
