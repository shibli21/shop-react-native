import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { NavigationScreenProp } from "react-navigation";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/shop/ProductItem";
import * as CartActions from "../../store/actions/cart";
interface ProductOverviewScreenProps {
  navigation: NavigationScreenProp<any, any>;
}

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

ProductOverviewScreen.navigationOptions = {
  headerTitle: "All Products",
};

export default ProductOverviewScreen;
