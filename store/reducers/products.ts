import { ProductActionType } from "./../actions/products";
import PRODUCTS from "../../data/products";

type Action = { type: "fetch" };

const initialState: ProductsState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case "DELETE_PRODUCT":
      return {
        ...state,
        userProduct: state.userProduct.filter((p) => p.id !== action.productId),
        availableProducts: state.availableProducts.filter(
          (p) => p.id !== action.productId
        ),
      };
    default:
      return state;
  }
};
