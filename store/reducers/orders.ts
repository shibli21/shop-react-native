import Order from "../../models/order";
import { OrdersActionType } from "./../actions/orders";
const initialState: OrdersState = {
  orders: [],
};

export default (state = initialState, actions: OrdersActionType) => {
  switch (actions.type) {
    case "SET_ORDERS":
      return {
        orders: actions.orders,
      };
    case "ADD_ORDER":
      const newOrder = new Order(
        actions.orderData.id,
        actions.orderData.items,
        actions.orderData.totalAmount,
        actions.orderData.date
      );
      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};
