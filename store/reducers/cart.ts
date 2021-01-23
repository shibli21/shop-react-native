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
        totalAmount: state.totalAmount + prodPrice,
      };
    case "REMOVE_FROM_CART":
      const selectedCartItem = state.items[action.productId];
      const currentQty = selectedCartItem.qty;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.qty - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice
        );
        updatedCartItems = {
          ...state.items,
          [action.productId]: updatedCartItem,
        };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.productId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    default:
      return state;
  }
};
