import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";
import CartItem from "./CartItem";

interface TransformedCartItems {
  productId: string;
  productTitle: string;
  productPrice: number;
  quantity: number;
  sum: number;
}

interface OrderItemProps {
  amount: number;
  date: Date;
  items: TransformedCartItems[];
}

const OrderItem = (props: OrderItemProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
        <Text style={styles.date}>{props.date.toUTCString()}</Text>
      </View>
      <View style={styles.button}>
        <Button
          color={colors.primary}
          title={showDetails ? "Hide Details" : "Show Details"}
          onPress={() => {
            setShowDetails((prevState) => !prevState);
          }}
        />
        {showDetails && (
          <View style={styles.detailItems}>
            {props.items?.map((cartItem) => (
              <CartItem
                key={cartItem.productId}
                quantity={cartItem.quantity}
                amount={cartItem.sum}
                title={cartItem.productTitle}
                onRemove={() => {}}
              />
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    alignItems: "center",
  },
  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  button: {
    width: "100%",
  },
  totalAmount: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: "#888",
  },
  detailItems: {
    width: "100%",
  },
});

export default OrderItem;
