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
      const { id, color, amount, product } = action.payload;
      const tempItem = state.cart.find((i) => i.id === id + color);

      if (tempItem) {
        const tempCart = state.cart.map((cartItem) => {
          if (cartItem.id === id + color) {
            cartItem.amount += amount;
            return cartItem;
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
      return {
        cart: [],
        total_amount: 0,
        total_products_price: 0,
        shipping: 555,
      };

    case COUNT_CART_TOTALS:
      let total_quantity = 0;
      let total_price = 0;
      state.cart.forEach((item) => {
        total_quantity += item.amount;
        total_price += item.price * item.amount;
      });

      return {
        ...state,
        total_amount: total_quantity,
        total_products_price: total_price,
      };

    case REMOVE_CART_ITEM:
      const cart = state.cart.filter((item) => item.id != action.payload);
      return { ...state, cart };

    case TOGGLE_CART_ITEM_AMOUNT:
      const load = action.payload;
      let car = state.cart;
      let totalAmount = state.total_amount;
      let totalPrice = state.total_products_price;

      if (load.value === "increase") {
        car.map((item) => {
          if (item.id === load.id) {
            if (item.amount < item.max) {
              item.amount += 1;
              totalAmount++;
              totalPrice += item.price;
            }
            return item;
          } else {
            return item;
          }
        });
      } else if (load.value === "decrease") {
        car.map((item) => {
          if (item.id === load.id) {
            if (item.amount > 1) {
              item.amount -= 1;
              totalAmount--;
              totalPrice -= item.price;
            }
            return item;
          } else {
            return item;
          }
        });
      }

      return {
        ...state,
        cart: car,
        total_products_price: totalPrice,
        total_amount: totalAmount,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }

  return state;
};

export default cart_reducer;
