export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

interface AddToCartAction {
  type: typeof ADD_TO_CART;
  product: Product;
}

interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART;
  productId: string;
}

export type CartActionType = AddToCartAction | RemoveFromCartAction;

export const addToCart = (product: Product): CartActionType => {
  return { type: ADD_TO_CART, product: product };
};

export const removeFromCart = (productId: string): CartActionType => {
  return { type: REMOVE_FROM_CART, productId: productId };
};
