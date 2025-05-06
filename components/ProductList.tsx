import products from "@/data/products";
import React from "react";
import { View } from "react-native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductItem
          key={product.name}
          name={product.name}
          img={product.img}
          price={product.price}
        />
      ))}
    </View>
  );
};

export default ProductList;
