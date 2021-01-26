import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import {
  createStackNavigator,
  NavigationStackOptions,
} from "react-navigation-stack";
import colors from "../constants/colors";
import CartScreen from "../screens/shop/CartScreen";
import OrdersScreen from "../screens/shop/OrdersScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import EditProductScreen from "../screens/user/EditProductScreen";
import UserProductScreen from "../screens/user/UserProductScreen";

const defaultNavigationOptions: NavigationStackOptions = {
  headerStyle: {
    backgroundColor: colors.accent,
  },
  headerTintColor: colors.gray50,
};

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          size={23}
          color={drawerConfig.tintColor}
          name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
        />
      ),
    },
    defaultNavigationOptions,
  }
);

const OrdersNavigator = createStackNavigator(
  {
    Orders: OrdersScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          size={23}
          color={drawerConfig.tintColor}
          name={Platform.OS === "android" ? "md-list" : "ios-list"}
        />
      ),
    },
    defaultNavigationOptions,
  }
);
const AdminNavigator = createStackNavigator(
  {
    UserProduct: UserProductScreen,
    EditProduct: EditProductScreen,
  },
  {
    navigationOptions: {
      drawerIcon: (drawerConfig) => (
        <Ionicons
          size={23}
          color={drawerConfig.tintColor}
          name={Platform.OS === "android" ? "md-create" : "ios-create"}
        />
      ),
    },
    defaultNavigationOptions,
  }
);

const ShopNavigator = createDrawerNavigator(
  {
    Products: ProductNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
  },
  {
    contentOptions: {
      activeTintColor: colors.primary,
    },
  }
);

export default createAppContainer(ShopNavigator);
