export const ADD_TO_CART = "ADD_TO_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

export type CartActionType = AddToCartAction;

export const addToCart = (product: Product): CartActionType => {
  return { type: ADD_TO_CART, product: product };
};
