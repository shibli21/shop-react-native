export const ADD_ORDER = "ADD_ORDER";

export interface AddOrderAction {
  type: typeof ADD_ORDER;
  orderData: CartState;
}

export type OrdersActionType = AddOrderAction;

export const addOrder = (
  cartItems: Item,
  totalAmount: number
): OrdersActionType => {
  return {
    type: "ADD_ORDER",
    orderData: {
      items: cartItems,
      totalAmount: totalAmount,
    },
  };
};
