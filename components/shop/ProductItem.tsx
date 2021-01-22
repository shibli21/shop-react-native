import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

interface Props {
  product: Product;
  onViewDetails: () => void;
  onAddToCart: () => void;
}

const ProductItem = ({ product, onViewDetails, onAddToCart }: Props) => {
  return (
    // <TouchableNativeFeedback onPress={onViewDetails}>
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: product.imageUrl }} />

      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <View style={styles.button}>
          <Button
            color={colors.primary}
            title="View Details"
            onPress={onViewDetails}
          />
        </View>
        <View style={styles.button}>
          <Button
            color={colors.accent}
            title="Add to cart"
            onPress={onAddToCart}
          />
        </View>
      </View>
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
  button: {
    width: "49%",
  },
});
