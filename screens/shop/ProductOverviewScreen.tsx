import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { useSelector } from "react-redux";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}

const ProductOverviewScreen = (props: Props) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  return (
    <FlatList
      data={products}
      renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
    />
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
