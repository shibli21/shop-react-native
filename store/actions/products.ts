export const DELETE_PRODUCT = "DELETE_PRODUCT";

export interface DeleteProductAction {
  type: typeof DELETE_PRODUCT;
  productId: string;
}

export type ProductActionType = DeleteProductAction;

export const deleteProduct = (productId: string): ProductActionType => {
  return { type: DELETE_PRODUCT, productId };
};
