import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import colors from "../constants/colors";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";

const ProductNavigator = createStackNavigator(
  {
    ProductOverview: ProductOverviewScreen,
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
