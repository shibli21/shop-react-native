import { Dispatch } from "redux";
import Product from "../../models/product";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const SET_PRODUCT = "SET_PRODUCT";

export interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  productData: {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
    price: number;
  };
}
export interface UpdateProductAction {
  type: typeof UPDATE_PRODUCT;
  productId: string;
  productData: {
    title: string;
    description: string;
    imgUrl: string;
  };
}
export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  productId: string;
}
export interface SetProductAction {
  type: typeof SET_PRODUCT;
  products: Product[];
}

export type ProductActionType =
  | CreateProductAction
  | UpdateProductAction
  | DeleteProductAction
  | SetProductAction;

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        "https://my-shop-3eaa4-default-rtdb.firebaseio.com/products.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const resData = await response.json();
      const loadedProducts = [];

      for (const key in resData) {
        loadedProducts.push(
          new Product(
            key,
            "u1",
            resData[key].title,
            resData[key].imgUrl,
            resData[key].description,
            resData[key].price
          )
        );
      }
      return dispatch({ type: SET_PRODUCT, products: loadedProducts });
    } catch (err) {
      // send to custom analytics server
      throw err;
    }
  };
};

export const createProduct = (
  title: string,
  description: string,
  imgUrl: string,
  price: number
) => {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      "https://my-shop-3eaa4-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          imgUrl,
          price,
        }),
      }
    );

    const resData = await response.json();
    console.log("🚀 ~ file: products.ts ~ line 57 ~ return ~ resData", resData);
    dispatch({
      type: CREATE_PRODUCT,
      productData: { id: resData.name, title, description, imgUrl, price },
    });
  };
};
export const updateProduct = (
  id: string,
  title: string,
  description: string,
  imgUrl: string
) => {
  return {
    type: UPDATE_PRODUCT,
    productId: id,
    productData: { title, description, imgUrl },
  };
};

export const deleteProduct = (productId: string): ProductActionType => {
  return { type: DELETE_PRODUCT, productId };
};
