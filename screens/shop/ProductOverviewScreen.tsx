import React from "react";
import { Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";
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

  return (
    <>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            product={itemData.item}
            onAddToCart={() => {
              dispatch(CartActions.addToCart(itemData.item));
            }}
            onViewDetails={() => {
              props.navigation.navigate("ProductDetail", {
                productId: itemData.item.id,
                productTitle: itemData.item.title,
              });
            }}
          />
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
  };
};

export default ProductOverviewScreen;
