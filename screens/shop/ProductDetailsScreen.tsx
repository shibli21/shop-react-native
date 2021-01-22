import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  NavigationComponent,
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";

interface ProductDetailsScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const ProductDetailsScreen = (props: ProductDetailsScreenProps) => {
  const productId = props.navigation.getParam("productId");
  const product = useSelector((state: RootState) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: product?.imageUrl }} />
      <View style={styles.actions}>
        <Button color={colors.primary} title="Add to cart" onPress={() => {}} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{product?.title}</Text>
        <Text style={styles.price}>${product?.price.toFixed(2)}</Text>
      </View>
      <Text style={styles.description}>{product?.description}</Text>
    </ScrollView>
  );
};

ProductDetailsScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}): StackNavigationOptions => {
  const productTitle = navigation.getParam("productTitle");
  return {
    headerTitle: productTitle,
  };
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 250,
  },
  actions: {
    padding: 10,
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
  description: {
    padding: 10,
  },
});
