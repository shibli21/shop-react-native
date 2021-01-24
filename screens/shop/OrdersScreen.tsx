import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
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
import CustomHeaderButton from "../../components/UI/HeaderButton";

interface Props {}

type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const OrdersScreen: NavigationStackScreenComponent = (props: Props) => {
  const orders = useSelector((state: RootState) => state.orders.orders);
  return (
    <FlatList
      keyExtractor={(items) => items.id}
      data={orders}
      renderItem={({ item }) => <Text>{item.totalAmount}</Text>}
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
