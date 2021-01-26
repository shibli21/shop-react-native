export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

export interface CreateProductAction {
  type: typeof CREATE_PRODUCT;
  productData: {
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

export type ProductActionType =
  | CreateProductAction
  | UpdateProductAction
  | DeleteProductAction;

export const createProduct = (
  title: string,
  description: string,
  imgUrl: string,
  price: number
) => {
  return {
    type: CREATE_PRODUCT,
    productData: { title, description, imgUrl, price },
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
