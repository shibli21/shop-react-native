import CartItem from "../../models/cart-item";
import { CartActionType } from "./../actions/cart";

// type Action = { type: "ADD_TO_CART" };

const initialState: CartState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action: CartActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const addToProduct = action.product;
      const prodPrice = addToProduct.price;
      const prodTitle = addToProduct.title;
      let updatedOrNewCart;

      if (state.items[addToProduct.id]) {
        updatedOrNewCart = new CartItem(
          state.items[addToProduct.id].qty + 1,
          prodPrice,
          prodTitle,
          state.items[addToProduct.id].sum + prodPrice
        );
      } else {
        updatedOrNewCart = new CartItem(1, prodPrice, prodTitle, prodPrice);
      }
      return {
        ...state,
        items: { ...state.items, [addToProduct.id]: updatedOrNewCart },
      };

    default:
      return state;
  }
};
