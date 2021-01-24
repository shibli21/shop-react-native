import React from "react";
import { Platform, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { NavigationStackScreenComponent } from "react-navigation-stack";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useSelector } from "react-redux";
import OrderItem from "../../components/shop/OrderItem";
import CustomHeaderButton from "../../components/UI/HeaderButton";

interface Props {}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const OrdersScreen: NavigationStackScreenComponent = (props: Props) => {
  const orders = useSelector((state: RootState) => state.orders.orders);

  const transformedCartItems = (items: any) => {
    const transformedCartItems = [];
    for (const key in items) {
      transformedCartItems.push({
        productId: key,
        productTitle: items[key].productTitle,
        productPrice: items[key].productPrice,
        quantity: items[key].qty,
        sum: items[key].sum,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  };

  return (
    <FlatList
      keyExtractor={(items) => items.id}
      data={orders}
      renderItem={({ item }) => (
        <OrderItem
          amount={item.totalAmount}
          date={item.date}
          items={transformedCartItems(item.items)}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}): StackNavigationOptions => {
  return {
    headerTitle: "Your Orders",
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
export default OrdersScreen;

const styles = StyleSheet.create({});
