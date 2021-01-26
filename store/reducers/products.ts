import PRODUCTS from "../../data/products";
import Product from "../../models/product";
import { ProductActionType } from "./../actions/products";

type Action = { type: "fetch" };

const initialState: ProductsState = {
  availableProducts: PRODUCTS,
  userProduct: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = initialState, action: ProductActionType) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      const newProduct = new Product(
        new Date().toISOString(),
        "u1",
        action.productData.title,
        action.productData.description,
        action.productData.imgUrl,
        action.productData.price
      );
      return {
        ...state,
        userProduct: state.userProduct.concat(newProduct),
        availableProducts: state.availableProducts.concat(newProduct),
      };

    case "UPDATE_PRODUCT":
      const productIndex = state.userProduct.findIndex(
        (prod) => prod.id === action.productId
      );
      const updatedProduct = new Product(
        action.productId,
        state.userProduct[productIndex].ownerId,
        action.productData.title,
        action.productData.imgUrl,
        action.productData.description,
        state.userProduct[productIndex].price
      );
      const updatedUserProducts = [...state.userProduct];
      updatedUserProducts[productIndex] = updatedProduct;

      const availableProductIndex = state.availableProducts.findIndex(
        (prod) => prod.id === action.productId
      );
      const updatedAvailableProducts = [...state.availableProducts];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;

      return {
        ...state,
        availableProducts: updatedAvailableProducts,
        userProduct: updatedUserProducts,
      };
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
