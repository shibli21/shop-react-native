import React from "react";
import { Button, Platform, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import colors from "../../constants/colors";
import * as CartActions from "../../store/actions/cart";
interface ProductOverviewScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const ProductOverviewScreen = (props: ProductOverviewScreenProps) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );
  const dispatch = useDispatch();

  const selectItemHandler = (id: string, title: string) => {
    props.navigation.navigate("ProductDetail", {
      productId: id,
      productTitle: title,
    });
  };

  return (
    <>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem product={itemData.item}>
            <View style={styles.button}>
              <Button
                color={colors.primary}
                title="View Details"
                onPress={() => {
                  selectItemHandler(itemData.item.id, itemData.item.title);
                }}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={colors.accent}
                title="Add to cart"
                onPress={() => {
                  dispatch(CartActions.addToCart(itemData.item));
                }}
              />
            </View>
          </ProductItem>
        )}
      />
    </>
  );
};

ProductOverviewScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}): StackNavigationOptions => {
  return {
    headerTitle: "All Products",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="cart"
          iconName={Platform.OS === "android" ? "md-cart" : "ios-cart"}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
      </HeaderButtons>
    ),
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default ProductOverviewScreen;

const styles = StyleSheet.create({
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
