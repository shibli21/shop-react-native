import PRODUCTS from "../../data/products";

type Action = { type: "fetch" };

const initialState: ProductsState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: Action) => {
  return state;
};
