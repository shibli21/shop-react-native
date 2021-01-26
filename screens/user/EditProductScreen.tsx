import React, { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from "react-navigation";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { StackNavigationOptions } from "react-navigation-stack/lib/typescript/src/vendor/types";
import { useDispatch, useSelector } from "react-redux";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { createProduct, updateProduct } from "../../store/actions/products";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

const EditProductScreen = (props: Props) => {
  const dispatch = useDispatch();
  const prodId = props.navigation.getParam("productId");
  const editProduct = useSelector((state: RootState) =>
    state.products.userProduct.find((prod) => prodId === prod.id)
  );

  const [title, setTitle] = useState(editProduct ? editProduct.title : "");
  const [imageUrl, setImageUrl] = useState(
    editProduct ? editProduct.imageUrl : ""
  );
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState(
    editProduct ? editProduct.description : ""
  );

  const submitHandler = useCallback(() => {
    if (editProduct) {
      dispatch(updateProduct(prodId, title, description, imageUrl));
    } else {
      dispatch(createProduct(title, description, imageUrl, +price));
    }
  }, [dispatch, prodId, title, description, imageUrl, price]);

  useEffect(() => {
    props.navigation.setParams({ submit: submitHandler });
  }, [submitHandler]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Image Url</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
          />
        </View>
        {!editProduct && (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={(text) => setPrice(text)}
            />
          </View>
        )}
        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProductScreen;

EditProductScreen.navigationOptions = ({
  navigation,
}: {
  navigation: Navigation;
}): StackNavigationOptions => {
  const submitFn = navigation.getParam("submit");
  return {
    headerTitle: navigation.getParam("productId")
      ? "Edit Product"
      : "Add Product",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="save"
          iconName={
            Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
          }
          onPress={submitFn}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    fontWeight: "bold",
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
