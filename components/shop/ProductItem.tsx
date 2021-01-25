import React, { ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  product: Product;
  children: ReactNode;
}

const ProductItem = (props: Props) => {
  const { product } = props;
  return (
    // <TouchableNativeFeedback onPress={onViewDetails}>
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />

      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>{props.children}</View>
    </View>
    // </TouchableNativeFeedback>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  product: {
    shadowColor: "black",
    shadowOpacity: 0.6,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    height: 250,
    marginHorizontal: 12,
    marginVertical: 6,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: "60%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  actions: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
