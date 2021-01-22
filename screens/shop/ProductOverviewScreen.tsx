import React from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

interface ProductOverviewScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

const ProductOverviewScreen = (props: ProductOverviewScreenProps) => {
  const products = useSelector(
    (state: RootState) => state.products.availableProducts
  );

  return (
    <>
      <FlatList
        data={products}
        renderItem={(itemData) => (
          <ProductItem
            product={itemData.item}
            onAddToCart={() => {}}
            onViewDetails={() => {}}
          />
        )}
      />
    </>
  );
};

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
