import { View, Text } from "react-native";
import React from "react";
import BaseAppComponent from "../shared/components/BaseAppComponent";
import ProductsDisplay from "../shared/components/ProductsDisplay";

const NewProductsScreen = () => {
  return (
    <BaseAppComponent
      screenHeaderTitle="Добавете продукти"
      screenHeaderSubtitle="(по желание)"
      contentOffset={"12%"}
    >
      <ProductsDisplay style={{ marginTop: "4%" }}/>
    </BaseAppComponent>
  );
};

export default NewProductsScreen;
