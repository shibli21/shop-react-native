import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import colors from "../../constants/colors";
import { removeFromCart } from "../../store/actions/cart";
import { addOrder } from "../../store/actions/orders";

interface Props {}

const CartScreen: NavigationStackScreenComponent = (props: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const cartItems = useSelector((state: RootState) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        productTitle: state.cart.items[key].productTitle,
        productPrice: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].qty,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>${cart.totalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => {
            dispatch(addOrder(cart.items, cart.totalAmount));
          }}
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => item.productId}
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem
              removable
              quantity={item.quantity}
              title={item.productTitle}
              amount={item.sum}
              onRemove={() => {
                dispatch(removeFromCart(item.productId));
              }}
            />
          )}
        />
      </View>
    </View>
  );
};

CartScreen.navigationOptions = {
  headerTitle: "Your Cart",
};

export default CartScreen;

const styles = StyleSheet.create({
  screen: { margin: 20 },
  summary: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: "white",
  },
  summaryText: {
    paddingLeft: 10,
  },
  amount: {
    color: colors.primary,
    fontWeight: "bold",
  },
});
