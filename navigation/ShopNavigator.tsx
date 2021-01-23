import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import colors from "../constants/colors";
import CartScreen from "../screens/shop/CartScreen";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailsScreen,
    Cart: CartScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.accent,
      },
      headerTintColor: colors.gray50,
    },
  }
);

export default createAppContainer(ProductNavigator);
