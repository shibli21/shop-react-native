import PRODUCTS from "../../data/products";

const initialState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: any) => {
  return state;
};
