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
import { deleteProduct } from "../../store/actions/products";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const UserProductScreen = (props: Props) => {
  const userProduct = useSelector(
    (state: RootState) => state.products.userProduct
  );

  const dispatch = useDispatch();

  return (
    <FlatList
      data={userProduct}
      renderItem={({ item }) => (
        <ProductItem product={item}>
          <View style={styles.button}>
            <Button
              color={colors.accent}
              title="Edit Product"
              onPress={() => {
                props.navigation.navigate("EditProduct", {
                  productId: item.id,
                  productTitle: item.title,
                });
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              color={colors.primary}
              title="Delete Product"
              onPress={() => {
                dispatch(deleteProduct(item.id));
              }}
            />
          </View>
        </ProductItem>
      )}
    />
  );
};

UserProductScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}): StackNavigationOptions => {
  return {
    headerTitle: "User Products",
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-create" : "ios-create"}
          onPress={() => {
            navigation.navigate("EditProduct");
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default UserProductScreen;

const styles = StyleSheet.create({
  button: {
    width: "49%",
  },
});
