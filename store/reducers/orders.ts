import { OrdersActionType } from "./../actions/orders";
const initialState: OrdersState = {
  orders: [],
};

export default (state = initialState, actions: OrdersActionType) => {
  switch (actions.type) {
    case "ADD_ORDER":
      const newOrder = new Order(
        new Date().toString(),
        actions.orderData.items,
        actions.orderData.totalAmount,
        new Date()
      );
      return { ...state, orders: state.orders.concat(newOrder) };

    default:
      return state;
  }
};
