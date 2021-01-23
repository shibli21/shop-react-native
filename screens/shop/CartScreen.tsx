import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import CartItem from "../../components/shop/CartItem";
import colors from "../../constants/colors";

interface Props {}

const CartScreen = (props: Props) => {
  const cartTotalAmount = useSelector(
    (state: RootState) => state.cart.totalAmount
  );
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
    return transformedCartItems;
  });

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          onPress={() => {}}
          disabled={cartItems.length === 0}
        />
      </View>
      <View>
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <CartItem
              quantity={item.quantity}
              title={item.productTitle}
              amount={item.sum}
              onRemove={() => {}}
            />
          )}
        />
      </View>
    </View>
  );
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
